"use client";

import useCreatePost from "@/hooks/useCreatePost";
import useCurrentUser from "@/hooks/useCurrentUser";
import useUsersAllPost from "@/hooks/useUsersAllPost";
import { useSession } from "next-auth/react";
import { useState } from "react";


export default function PostForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { data } = useSession();
  const { mutate: createPost } = useCreatePost();
  const email = data?.user?.email;
  const { data: user } = useCurrentUser(email);
  const {refetch} = useUsersAllPost(email)
  // console.log(user)

  const postData = {
    user: {
      name: user?.name,
      email: user?.email,
    },
    title,
    description,
  };

  const handlePost = () => {
    // console.log(postData)
    createPost(postData);
    refetch()
  };
  return (
    <div className="mt-10 space-y-5">
      <div className="flex gap-5  items-center">
        <p>enter your title :</p>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 rounded-2xl p-2"
        />
      </div>
      <div className="flex gap-5  items-center">
        <p>enter your description :</p>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          className="border-2 rounded-2xl p-2"
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
