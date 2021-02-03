import { IMostDiscussedPostFeedService } from "./types";
import { IPostsRepository } from "../../repositories/PostsRepository";
import { Observable } from "rxjs";
import { IMostDiscussedPostView } from "../../domain";
export declare class MostDiscussedPostFeedService implements IMostDiscussedPostFeedService {
    private _postRepository;
    constructor(_postRepository: IPostsRepository);
    get mostDiscussedPostViews$(): Observable<IMostDiscussedPostView[]>;
}
