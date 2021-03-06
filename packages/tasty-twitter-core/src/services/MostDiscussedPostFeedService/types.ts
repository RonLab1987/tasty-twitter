import { Observable } from "rxjs";
import { IMostDiscussedPostView } from "../../domain";
import { InjectionToken } from "tsyringe";

export interface IMostDiscussedPostFeedService {
  mostDiscussedPostViews$: Observable<IMostDiscussedPostView[]>;
}

export const IMostDiscussedPostFeedServiceToken: InjectionToken<IMostDiscussedPostFeedService> =
  "IMostDiscussedPostFeedService";
