"use client";

import useDeletePost from "@/hooks/useDeletePost";
import useUsersAllPost from "@/hooks/useUsersAllPost";
import { useSession } from "next-auth/react";
import React from "react";

export default function PostCard({ data, refetch }) {
  const { mutate: deletePost } = useDeletePost();

  const handleDelete =  (id) => {
    console.log(id);
    try {
       deletePost(id);
    
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-2">
      {data?.map((c) => (
        <div className="border-2 p-2 rounded-2xl" key={c?._id}>
          <p>{c?.title}</p>
          <p>{c?.description}</p>
          <div className="mb-5 mt-2 border-t-2">
            <button className="border-2 p-2 mt-3 cursor-pointer ">
              {" "}
              Like : {c?.likes?.count}
            </button>
            <button
              onClick={() => handleDelete(c?._id)}
              className="border-2 p-2 mt-3 cursor-pointer "
            >
              {" "}
              delete post
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
