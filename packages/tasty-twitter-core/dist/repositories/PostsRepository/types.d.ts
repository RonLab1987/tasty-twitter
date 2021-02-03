import { Observable } from "rxjs";
import { IAuthor, Id, IPostView, ISODateTime } from "../../domain";
import { InjectionToken } from "tsyringe";
export interface IPostModel {
    id: Id;
    createDate: ISODateTime;
    author: IAuthor;
    image: string | null;
    content: string;
}
export interface ICommentModel {
    id: Id;
    postId: Id;
    createDate: ISODateTime;
    author: IAuthor;
    content: string;
}
export interface CreatePostDTO {
    content: string;
}
export interface IPostsRepository {
    postViews$: Observable<IPostView[]>;
    createPost(dto: CreatePostDTO): Promise<void>;
}
export declare const IPostsRepositoryToken: InjectionToken<IPostsRepository>;
