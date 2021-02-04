export interface CreatePostFormDTO {
  content: string
}

export interface CreatePostFormProps {
  onSubmit: (dto: CreatePostFormDTO) => Promise<any>;
}
