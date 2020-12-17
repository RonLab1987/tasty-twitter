import { IAuthor } from "@/domain";
import { image } from "faker";

export const DEFAULT_AUTHOR: IAuthor = {
  avatar: image.people(100, 100),
  fullname: "Random Man"
};

export const POSTS_LIST_KEY = "TT_POSTS_LIST";
export const COMMENTS_LIST_KEY = "TT_COMMENTS_LIST";
