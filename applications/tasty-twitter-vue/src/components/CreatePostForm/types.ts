export type NewPost = {
  content: string;
};

export interface ISubmitCallback {
  (newPost: NewPost): Promise<void>;
}
