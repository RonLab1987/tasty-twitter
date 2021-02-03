import { Observable } from "rxjs";
import { IMostDiscussedPostView } from "../../domain";
import { InjectionToken } from "tsyringe";
export interface IMostDiscussedPostFeedService {
    mostDiscussedPostViews$: Observable<IMostDiscussedPostView[]>;
}
export declare const IMostDiscussedPostFeedServiceToken: InjectionToken<IMostDiscussedPostFeedService>;
