import { Observable } from "rxjs";
import { IPostView } from "../../domain";
import { InjectionToken } from "tsyringe";
import { CreatePostDTO } from "../../repositories/PostsRepository";
export interface IPostFeedService {
    postViews$: Observable<IPostView[]>;
    createPost(dto: CreatePostDTO): Promise<void>;
}
export declare const IPostFeedServiceToken: InjectionToken<IPostFeedService>;
