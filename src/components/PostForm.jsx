"use client";

import useCreatePost from "@/hooks/useCreatePost";
import useCurrentUser from "@/hooks/useCurrentUser";
import useUsersAllPost from "@/hooks/useUsersAllPost";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { data } = useSession();
  const { mutateAsync: createPost } = useCreatePost();
  const email = data?.user?.email;
  const { data: user } = useCurrentUser(email);
  console.log(data)
  const path = usePathname()


  const postData = {
    user: {
      name: user?.name,
      email: user?.email,
    },
    title,
    description,
  };

  const handlePost =  () => {
    if(!data){
    return  toast.error('PLEASE LOGIN FOR POST')
    }
    // console.log(postData)
    try {
       createPost(postData);
       setTitle("")
       setDescription("")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-10 space-y-5 border-2 p-4 rounded-2xl h-50">
      <div className="flex gap-5  items-center">
        <p>enter your title :</p>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 rounded-2xl p-2"
          required
        />
      </div>
      <div className="flex gap-5  items-center">
        <p>enter your description :</p>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          className="border-2 rounded-2xl p-2"
          required
        />
      </div>

      <div>
        <button
          className="border-2 p-2 rounded-2xl cursor-pointer"
          onClick={() => handlePost()}
        >
          post
        </button>
      </div>
    </div>
  );
}
