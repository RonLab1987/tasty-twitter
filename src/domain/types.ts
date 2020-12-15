export interface Author {
  avatar: string;
  fullname: string;
}

export type CommentContent = string;
export interface CommentView {
  author: Author;
  content: CommentContent;
}

export type PostId = string;
export type PostImage = string;
export type PostContent = string;
export interface PostView {
  id: PostId;
  author: Author;
  image: PostImage | null;
  content: PostContent;
  lastComments: CommentView[];
}

export type MostDiscussedPostContent = string;
export interface MostDiscussedPost {
  id: PostId;
  content: MostDiscussedPostContent;
  commentsCount: number;
}
