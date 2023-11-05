'use client';
import { data } from "../../api";
import PostFields, { FieldValues } from '../../../components/PostFields';
import { useRouter } from "next/navigation";


const EditPost = ({ params }: { params: { slug: string } }) => {  
  const post = data.find((post) => post.id === params?.slug);
  const router = useRouter();

  const handleEdit = (editedData: FieldValues) => {
    console.log('----> editData', editedData);

    router.push("/post")
  };
  return (    
    <div>
      <h1>Edit Post: {params?.slug}</h1>
      <PostFields onSubmit={handleEdit} defaultValues={post} />
    </div>
  )
}

export default EditPost