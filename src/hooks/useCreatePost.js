import { postPost } from "@/services/postServices";
import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";

const useCreatePost = (data) => {
  return useMutation({
    mutationFn:postPost,
    onSuccess: ()=>{
      toast.success('post created');
    },
    onError: ()=>{
      toast.error("error while creating post")
    }
  })
};

export default useCreatePost;
