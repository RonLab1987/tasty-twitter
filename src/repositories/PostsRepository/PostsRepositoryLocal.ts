import { CreatePostDTO, PostsRepository, StorageKeys } from "./types";
import { Observable, ReplaySubject } from "rxjs";
import { Author, MostDiscussedPost, PostView } from "@/domain";
import { v4 as uuid } from "uuid";

const mockAuthor: Author = {
  avatar: "http://random.cat/view/635",
  fullname: "Random Cat"
};
const mockPostViews: PostView[] = [
  {
    id: uuid(),
    author: mockAuthor,
    image: null,
    content: "Random Cat make random post",
    lastComments: []
  }
];

const mockMostDiscussedPosts: MostDiscussedPost[] = [
  {
    id: uuid(),
    content: "Some most discussed message",
    commentsCount: 565
  }
];

export class PostsRepositoryLocal implements PostsRepository {
  private _postViews$ = new ReplaySubject<PostView[]>(1);
  private _mostDiscussedPosts$ = new ReplaySubject<MostDiscussedPost[]>(1);

  constructor(private _user: Author, private _storage: Storage) {
    this._postViews$.next(mockPostViews);
    this._mostDiscussedPosts$.next(mockMostDiscussedPosts);
  }

  get postViews$(): Observable<PostView[]> {
    return this._postViews$;
  }

  get mostDiscussedPosts$(): Observable<MostDiscussedPost[]> {
    return this._mostDiscussedPosts$;
  }

  createPost(dto: CreatePostDTO): Promise<any> {
    return Promise.resolve();
  }

  private _getPostViewsFromStorage(): PostView[] {
    const content = this._storage.getItem(StorageKeys.PostViews);
    if (!content) {
      return [];
    }
    return (JSON.stringify(content) as unknown) as PostView[];
  }
}
