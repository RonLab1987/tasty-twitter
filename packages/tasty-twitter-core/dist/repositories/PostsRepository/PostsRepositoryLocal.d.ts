import { CreatePostDTO, IPostsRepository } from "./types";
import { Observable } from "rxjs";
import { IPostView } from "../../domain";
export declare class PostsRepositoryLocal implements IPostsRepository {
    private _storage;
    private _postViews$;
    private _posts$;
    private _comments$;
    private _scheduledGenerators;
    constructor(_storage: Storage);
    get postViews$(): Observable<IPostView[]>;
    createPost(dto: CreatePostDTO): Promise<void>;
    private _getPosts;
    private _savePosts;
    private _getComments;
    private _saveComments;
    private _initCommentGenerator;
    private _scheduleCommentGenerator;
}
