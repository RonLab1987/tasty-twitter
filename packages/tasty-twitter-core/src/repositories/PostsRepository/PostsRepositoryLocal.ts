import {
  CreatePostDTO,
  ICommentModel,
  IPostModel,
  IPostsRepository
} from "./types";
import { BehaviorSubject, combineLatest, Observable } from "rxjs";
import { ICommentView, Id, IPostView } from "../../domain";
import { generateComment, mapToPost } from "./utils";
import { injectable } from "tsyringe";
import { map, shareReplay, skip } from "rxjs/operators";
import { COMMENTS_LIST_KEY, POSTS_LIST_KEY } from "./constants";
import { random } from "faker";

@injectable<IPostsRepository>()
export class PostsRepositoryLocal implements IPostsRepository {
  private _postViews$: Observable<IPostView[]> | undefined = undefined;
  private _posts$: BehaviorSubject<IPostModel[]>;
  private _comments$: BehaviorSubject<ICommentModel[]>;

  private _scheduledGenerators = new Map<Id, number>();

  constructor(private _storage: Storage) {
    this._posts$ = new BehaviorSubject<IPostModel[]>(this._getPosts());
    this._comments$ = new BehaviorSubject<ICommentModel[]>(this._getComments());

    // init comment generator
    this._posts$.subscribe(posts => {
      posts.forEach(({ id }) => this._initCommentGenerator(id));
    });

    // save changes
    this._posts$.pipe(skip(1)).subscribe(posts => this._savePosts(posts));
    this._comments$
      .pipe(skip(1))
      .subscribe(comments => this._saveComments(comments));
  }

  get postViews$(): Observable<IPostView[]> {
    if (this._postViews$) {
      return this._postViews$;
    }
    this._postViews$ = combineLatest(this._posts$, this._comments$).pipe(
      map<[IPostModel[], ICommentModel[]], IPostView[]>(([posts, comments]) => {
        return posts.map<IPostView>(postModel => ({
          ...postModel,
          comments: comments
            .filter(({ postId }) => postId === postModel.id)
            .map<ICommentView>(({ postId, ...commentView }) => commentView)
        }));
      }),
      shareReplay(1)
    );
    return this._postViews$;
  }

  createPost(dto: CreatePostDTO): Promise<void> {
    return new Promise(resolve => {
      this._posts$.next([mapToPost(dto), ...this._posts$.getValue()]);
      resolve();
    });
  }

  private _getPosts(): IPostModel[] {
    const content = this._storage.getItem(POSTS_LIST_KEY);
    if (!content) {
      return [];
    }
    return (JSON.parse(content) as unknown) as IPostModel[];
  }

  private _savePosts(posts: IPostModel[]) {
    this._storage.setItem(POSTS_LIST_KEY, JSON.stringify(posts));
  }

  private _getComments(): ICommentModel[] {
    const content = this._storage.getItem(COMMENTS_LIST_KEY);
    if (!content) {
      return [];
    }
    return (JSON.parse(content) as unknown) as ICommentModel[];
  }

  private _saveComments(comments: ICommentModel[]) {
    this._storage.setItem(COMMENTS_LIST_KEY, JSON.stringify(comments));
  }

  private _initCommentGenerator(postId: Id) {
    if (this._scheduledGenerators.has(postId)) {
      return;
    }
    this._scheduleCommentGenerator(postId);
  }

  private _scheduleCommentGenerator(postId: Id) {
    const timeoutId = setTimeout(() => {
      this._comments$.next([
        generateComment(postId),
        ...this._comments$.getValue()
      ]);
      this._scheduleCommentGenerator(postId);
    }, random.number({ min: 5000, max: 30000, precision: 5000 }));
    this._scheduledGenerators.set(postId, timeoutId);
  }
}
