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
          .filter(({ comments }) => comments.length > 0)
          .sort((a, b) => b.comments.length - a.comments.length)
          .splice(0, 3)
          .map<IMostDiscussedPostView>(view => ({
            id: view.id,
            content:
              view.content.length < 80
                ? view.content
                : view.content.slice(0, 80) + "...",
            commentsCount: view.comments.length
          }))
      )
    );
  }
}
