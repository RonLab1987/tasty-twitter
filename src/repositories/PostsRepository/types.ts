import { Observable } from "rxjs";
import { MostDiscussedPostView, PostView } from "@/domain";

export enum StorageKeys {
  PostViews = "POST_VIEWS",
  MostDiscussedPosts = "MOST_DISCUSSED_POSTS"
}

export interface CreatePostDTO {
  content: string;
}

export interface PostsRepository {
  postViews$: Observable<PostView[]>;
  mostDiscussedPosts$: Observable<MostDiscussedPostView[]>;
  createPost(dto: CreatePostDTO): Promise<any>;
}
