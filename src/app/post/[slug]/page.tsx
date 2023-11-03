import PostDetail from "@/app/components/PostDetail"
import PostItem from "@/app/components/PostItem"
import Link from "next/link"
import { data } from "../api";

const Post = ({ params }: { params: { slug: string } }) => {
  // filter api data
  // pass data in post Detail


  const filterData = data.filter((item) => item.id === params?.slug);
  if (!filterData || filterData.length === 0) {
    return <div>Post not found</div>;
  }
  const postItem = filterData[0];
    return (
      <div>
        Post, {params?.slug}
        <h1>{postItem.title}</h1>
        <div>
          <Link href={`/post/${params.slug}/edit`} className="btn btn-square">
          </Link>
        </div>
        <PostDetail post={postItem}/> 
      </div>     
    )
  }
  
  export default Post