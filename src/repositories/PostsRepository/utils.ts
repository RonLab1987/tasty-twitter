import { IAuthor, Id } from "@/domain";
import { image, lorem, name } from "faker";
import { v4 as uuid } from "uuid";
import { DEFAULT_AUTHOR } from "./constants";
import { CreatePostDTO, ICommentModel, IPostModel } from "./types";

export const generateAuthor = (): IAuthor => ({
  avatar: image.people(100, 100) + `?q=${uuid()}`,
  fullname: name.firstName() + " " + name.lastName()
});

export const generateComment = (postId: Id): ICommentModel => ({
  postId,
  id: uuid(),
  createDate: new Date().toISOString(),
  author: generateAuthor(),
  content: Math.random() > 0.5 ? lorem.paragraph() : lorem.lines()
});

export const mapToPost = (dto: CreatePostDTO): IPostModel => {
  const content = dto.content;
  return {
    id: uuid(),
    createDate: new Date().toISOString(),
    author: DEFAULT_AUTHOR,
    image: null,
    content
  };
};
