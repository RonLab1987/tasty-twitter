import { IPostFeedService } from "./types";
import { CreatePostDTO, IPostsRepository } from "../../repositories/PostsRepository";
import { Observable } from "rxjs";
import { IPostView } from "../../domain";
export declare class PostFeedService implements IPostFeedService {
    private _postRepository;
    constructor(_postRepository: IPostsRepository);
    get postViews$(): Observable<IPostView[]>;
    createPost(dto: CreatePostDTO): Promise<void>;
}
