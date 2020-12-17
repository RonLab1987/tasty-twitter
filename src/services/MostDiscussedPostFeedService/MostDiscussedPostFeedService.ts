import { IMostDiscussedPostFeedService } from "./types";
import { inject, injectable } from "tsyringe";
import {
  IPostsRepository,
  IPostsRepositoryToken
} from "@/repositories/PostsRepository";
import { Observable } from "rxjs";
import { IMostDiscussedPostView, IPostView } from "@/domain";
import { map } from "rxjs/operators";

@injectable<IMostDiscussedPostFeedService>()
export class MostDiscussedPostFeedService
  implements IMostDiscussedPostFeedService {
  constructor(
    @inject(IPostsRepositoryToken)
    private _postRepository: IPostsRepository
  ) {}

  get mostDiscussedPostViews$(): Observable<IMostDiscussedPostView[]> {
    return this._postRepository.postViews$.pipe(
      map<IPostView[], IMostDiscussedPostView[]>(postViews =>
        postViews
          .map<IMostDiscussedPostView>(view => ({
            id: view.id,
            content: view.content,
            commentsCount: view.comments.length
          }))
          .filter(({ commentsCount }) => commentsCount > 0)
          .sort((a, b) => b.commentsCount - a.commentsCount)
          .splice(0, 3)
      )
    );
  }
}
