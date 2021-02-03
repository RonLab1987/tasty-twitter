import { IAuthor, Id } from "../../domain";
import { CreatePostDTO, ICommentModel, IPostModel } from "./types";
export declare const generateAuthor: () => IAuthor;
export declare const generateComment: (postId: Id) => ICommentModel;
export declare const mapToPost: (dto: CreatePostDTO) => IPostModel;
