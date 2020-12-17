import { CreatePostDTO, IPostsRepository } from "./types";
import { Observable, ReplaySubject } from "rxjs";
import { v4 as uuid } from "uuid";
import { IMostDiscussedPostView, IPostView } from "@/domain";
import { generatePost } from "./utils";
import { injectable } from "tsyringe";

const mockPostViews: IPostView[] = new Array(10).fill(null).map(generatePost);

const mockMostDiscussedPosts: IMostDiscussedPostView[] = [
  {
    id: uuid(),
    content: "Some most discussed message",
    commentsCount: 565
  }
];

@injectable<IPostsRepository>()
export class PostsRepositoryLocal implements IPostsRepository {
  private _postViews$ = new ReplaySubject<IPostView[]>(1);
  private _mostDiscussedPosts$ = new ReplaySubject<IMostDiscussedPostView[]>(1);

  constructor(private _storage: Storage) {
    console.log(mockPostViews);
    this._postViews$.next(mockPostViews);
    this._mostDiscussedPosts$.next(mockMostDiscussedPosts);
  }

  get postViews$(): Observable<IPostView[]> {
    return this._postViews$;
  }

  get mostDiscussedPosts$(): Observable<IMostDiscussedPostView[]> {
    return this._mostDiscussedPosts$;
  }

  createPost(dto: CreatePostDTO): Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => resolve(), 1000);
    });
  }

  // private _getPostViewsFromStorage(): IPostView[] {
  //   const content = this._storage.getItem(StorageKeys.PostViews);
  //   if (!content) {
  //     return [];
  //   }
  //   return (JSON.stringify(content) as unknown) as IPostView[];
  // }
}
