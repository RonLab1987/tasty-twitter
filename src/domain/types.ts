export interface Author {
  avatar: string;
  fullname: string;
}

export type Id = string;
export type ISODate = string;

export interface CommentView {
  id: Id;
  createDate: ISODate;
  author: Author;
  content: string;
}

export interface PostView {
  id: Id;
  createDate: ISODate;
  author: Author;
  image: string | null;
  content: string;
  lastComments: CommentView[];
}

export interface MostDiscussedPostView {
  id: Id;
  content: string;
  commentsCount: number;
}
