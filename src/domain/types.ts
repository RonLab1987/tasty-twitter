export interface IAuthor {
  avatar: string;
  fullname: string;
}

export type Id = string;
export type ISODate = string;

export interface ICommentView {
  id: Id;
  createDate: ISODate;
  author: IAuthor;
  content: string;
}

export interface IPostView {
  id: Id;
  createDate: ISODate;
  author: IAuthor;
  image: string | null;
  content: string;
  comments: ICommentView[];
}

export interface IMostDiscussedPostView {
  id: Id;
  content: string;
  commentsCount: number;
}
