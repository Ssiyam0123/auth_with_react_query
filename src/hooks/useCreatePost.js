import { postPost } from "@/services/postServices";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";

const useCreatePost = (data) => {
  const queryClinet= useQueryClient()
  return useMutation({
    mutationFn:postPost,
    onSuccess: ()=>{
      queryClinet.invalidateQueries({queryKey:['posts']})
      toast.success('post created');
    },
    onError: ()=>{
      toast.error("error while creating post")
    }
  })
};

export default useCreatePost;
