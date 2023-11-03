'use client';
import React, { FC } from "react";
import { useForm} from "react-hook-form";

export interface FieldValues {
    title: string;
    subtitle: string;
    description: string;
    postType: string;

}
export interface PostFieldsProps {
    onSubmit: (data: FieldValues) => void;
    defaultValues?: FieldValues;
}
const PostFields: FC<PostFieldsProps> = ({ onSubmit, defaultValues }) => {
    const {handleSubmit, register, setValue} = useForm<FieldValues>({ defaultValues });
    const submitHandler = (data: FieldValues) => {
        console.log(data);
        onSubmit(data);
    }

  return (
    <div className="container">
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title:</label>
                <input {...register("title", {required: true})} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subtitle:</label>
                <input {...register("subtitle", {required: true})} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description:</label>
                <input {...register("description", {required: true})} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Post Type:</label>
                <select {...register("postType")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option value="Javascript">Javascript</option>
                    <option value="NodeJs">NodeJs</option>
                </select>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    </div>
  )
}

export default PostFields