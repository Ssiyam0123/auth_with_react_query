"use client";

import useAddLike from "@/hooks/useAddLike";
import useDeletePost from "@/hooks/useDeletePost";
import { useSession } from "next-auth/react";
import {  usePathname } from "next/navigation";
import React from "react";

export default function PostCard({ data }) {
  const { mutate: deletePost } = useDeletePost();
  const path = usePathname();
  const { mutate: likePost } = useAddLike();
  // console.log(email)
  const {data: session} = useSession()
  const email =  session?.user?.email

  const handleLike = (id) => {
    likePost({ id, email });

  };

  const handleDelete = (id) => {
    try {
      deletePost(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-2 grid grid-cols-4 gap-2">
      {data?.map((c) => (
        <div className="border-2 p-4 rounded-2xl" key={c?._id}>
          <div className="border-b-2 mb-4 pb-2">postedBy : {c?.user?.name}</div>
          <p>{c?.title}</p>
          <p>{c?.description}</p>
          <div className="mb-5 mt-2 border-t-2">
            <button
              onClick={() => handleLike(c?._id)}
              className="border-2 p-2 mt-3 cursor-pointer "
            >
              Like : {c?.likes?.count}
            </button>
            {path == "/profile" && (
              <button
                onClick={() => handleDelete(c?._id)}
                className="border-2 p-2 mt-3 cursor-pointer "
              >
                {" "}
                delete post
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
