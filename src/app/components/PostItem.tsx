import Link from "next/link";
import { FC } from "react";

export interface PostItemProps {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    postType: string;
}

const PostItem: FC<PostItemProps> = ({id, title, subtitle, description, postType}) => {
  return (
    <div className="shadow bg-white rounded text-black">
        <div className="p-6">
            <div className="flex items-center gap-4 mb-4">
                <div className="inline-flex items-center justify-center h-10 w-10 bg-red-500/20 text-red-500 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="dribbble" className="lucide lucide-dribbble h-6 w-6"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg>
                </div>
                <h3 className="text-xl font-medium text-default-200">{title}</h3>
            </div>
            <div>
              <h3>{subtitle}</h3>
              <p className="mb-5">{description}</p>
            </div>
            <Link href={`post/${id}`} className="inline-flex gap-2 items-center relative text-primary group">
                <span className="absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0"></span>
                Read More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="move-right" className="lucide lucide-move-right h-4 w-4"><path d="M18 8L22 12L18 16"></path><path d="M2 12H22"></path></svg>
            </Link>
        </div>
    </div>
  );
};

export default PostItem;