import { Observable } from "rxjs";
import { MostDiscussedPost, PostView } from "@/domain";

export enum StorageKeys {
  PostViews = "POST_VIEWS",
  MostDiscussedPosts = "MOST_DISCUSSED_POSTS"
}

export interface CreatePostDTO {
  content: string;
}

export interface PostsRepository {
  postViews$: Observable<PostView[]>;
  mostDiscussedPosts$: Observable<MostDiscussedPost[]>;
  createPost(dto: CreatePostDTO): Promise<any>;
}
