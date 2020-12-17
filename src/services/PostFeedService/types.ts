import { Observable } from "rxjs";
import { IPostView } from "@/domain";
import { InjectionToken } from "tsyringe";

export interface CreatePostDTO {
  content: string;
}

export interface IPostFeedService {
  postViews$: Observable<IPostView[]>;
  createPost(dto: CreatePostDTO): Promise<void>;
}

export const IPostFeedServiceToken: InjectionToken<IPostFeedService> =
  "IPostFeedService";
