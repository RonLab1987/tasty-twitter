import { CreatePostDTO, IPostFeedService } from "./types";
import { inject, injectable } from "tsyringe";
import {
  IPostsRepository,
  IPostsRepositoryToken
} from "@/repositories/PostsRepository";
import { Observable } from "rxjs";
import { IPostView } from "@/domain";
import { map } from "rxjs/operators";

@injectable<IPostFeedService>()
export class PostFeedService implements IPostFeedService {
  constructor(
    @inject(IPostsRepositoryToken)
    private _postRepository: IPostsRepository
  ) {}

  get postViews$(): Observable<IPostView[]> {
    return this._postRepository.postViews$.pipe(
      map<IPostView[], IPostView[]>(postViews =>
        postViews.map(view => ({
          ...view,
          comments: view.comments.slice(0, 3)
        }))
      )
    );
  }

  createPost(dto: CreatePostDTO): Promise<void> {
    return this._postRepository.createPost(dto);
  }
}
