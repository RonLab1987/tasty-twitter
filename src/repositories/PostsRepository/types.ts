import { Observable } from "rxjs";
import { IPostView } from "@/domain";
import { InjectionToken } from "tsyringe";

export enum StorageKeys {
  PostsList = "POST_LIST",
  CommentsList = "COMMENTS_LIST"
}

export interface CreatePostDTO {
  content: string;
}

export interface IPostsRepository {
  postViews$: Observable<IPostView[]>;
  createPost(dto: CreatePostDTO): Promise<void>;
}

export const IPostsRepositoryToken: InjectionToken<IPostsRepository> =
  "IPostsRepository";
