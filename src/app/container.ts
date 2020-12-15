import { PostsRepositoryLocal } from "@/repositories/PostsRepository";

export const postsRepository = new PostsRepositoryLocal(
  {
    avatar: "http://random.cat/view/635",
    fullname: "Random Cat"
  },
  window.localStorage
);
