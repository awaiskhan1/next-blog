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
    <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <h3 className="card-subtitle">{subtitle}</h3>
            <p>{description}</p>
            <div className="card-actions justify-end">
            <Link href={`post/${id}`} >Read More</Link>
            </div>
        </div>
    </div>
  );
};

export default PostItem;