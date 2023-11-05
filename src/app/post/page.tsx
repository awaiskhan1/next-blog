import Link from "next/link"
import PostItem from "../components/PostItem"
import { data } from "./api";

const Posts = () => {
  return (
      <section className="container-fluid mt-6 relative overflow-hidden" id="post">
        <div className="container relative md:rounded-lg shadow backdrop-brightness-50 bg-back/30">
            <div className="lg:py-10 md:py-3">
              <Link href="post/create" className="btn">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  Add Post
              </Link>
              <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
                  {data.map((item) => (
                      <PostItem 
                        key={item.id} 
                        id={item.id} 
                        title={item.title} 
                        subtitle={item.subtitle} 
                        description={item.description} 
                        postType={item.postType} 
                      />
                  ))}
              </div>
            </div>
        </div>
      </section>  
  )
}

export default Posts