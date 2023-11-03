export interface IPostType {
    id?: postType.id,
    label: postType.label,
    value: postType.value,
}
export interface IPostResponse {
  id: string,
  title: string,
  subtitle: string,
  description: string,
  createdAt?: string | Date,
  updatedAt?: string | Date,
  postTypeId: PostType
}

export interface IPostRequest {
    title: string,
    subtitle: string,
    description: string,
    postTypeId: string,
}