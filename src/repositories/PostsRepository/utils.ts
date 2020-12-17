import { IAuthor, ICommentView, IPostView } from "@/domain";
import { image, lorem, name } from "faker";
import { v4 as uuid } from "uuid";

export const generateAuthor = (): IAuthor => ({
  avatar: image.people(100, 100) + `?q=${uuid()}`,
  fullname: name.firstName() + " " + name.lastName()
});

export const generateComment = (): ICommentView => ({
  id: uuid(),
  createDate: new Date().toISOString(),
  author: generateAuthor(),
  content: Math.random() > 0.5 ? lorem.paragraph() : lorem.lines()
});

export const generateLastComments = (): ICommentView[] =>
  new Array(Math.ceil(Math.random() * 10)).fill(null).map(generateComment);

export const mockAuthor: IAuthor = generateAuthor();
export const generatePost = (): IPostView => ({
  id: uuid(),
  createDate: new Date().toISOString(),
  author: mockAuthor,
  image: Math.random() > 0.5 ? null : image.abstract(500, 281) + `?q=${uuid()}`,
  content: Math.random() > 0.5 ? lorem.paragraph() : lorem.lines(),
  comments: generateLastComments()
});
