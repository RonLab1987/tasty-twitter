import { CreatePostDTO, PostsRepository, StorageKeys } from "./types";
import { Observable, ReplaySubject } from "rxjs";
import { Author, MostDiscussedPostView, PostView } from "@/domain";
import { v4 as uuid } from "uuid";

const mockAuthor: Author = {
  avatar: "https://picsum.photos/70/70",
  fullname: "Random Cat"
};
const mockPostViews: PostView[] = [
  {
    id: uuid(),
    createDate: new Date().toISOString(),
    author: mockAuthor,
    image: null,
    content: "Random Cat make random post",
    lastComments: []
  },
  {
    id: uuid(),
    createDate: new Date().toISOString(),
    author: mockAuthor,
    image: "https://picsum.photos/200/300",
    content: "Random Cat make another post",
    lastComments: []
  }
];

const mockMostDiscussedPosts: MostDiscussedPostView[] = [
  {
    id: uuid(),
    content: "Some most discussed message",
    commentsCount: 565
  }
];

export class PostsRepositoryLocal implements PostsRepository {
  private _postViews$ = new ReplaySubject<PostView[]>(1);
  private _mostDiscussedPosts$ = new ReplaySubject<MostDiscussedPostView[]>(1);

  constructor(private _user: Author, private _storage: Storage) {
    this._postViews$.next(mockPostViews);
    this._mostDiscussedPosts$.next(mockMostDiscussedPosts);
  }

  get postViews$(): Observable<PostView[]> {
    return this._postViews$;
  }

  get mostDiscussedPosts$(): Observable<MostDiscussedPostView[]> {
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
