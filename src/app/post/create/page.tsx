'use client';
import PostFields from "./../../components/PostFields"

const CreatePost = () => {
  const submitHandler = (data: any) => {
    console.log('data ----->', data);
  }
  return (
    <div>
        <h2>Create Post</h2>
        <PostFields onSubmit={submitHandler} />
    </div>
  )
}

export default CreatePost