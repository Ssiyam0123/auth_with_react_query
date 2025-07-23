import { deletedPost } from "@/services/postServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useDeletePost = () => {
  const queryClient= useQueryClient()
  return useMutation({
    mutationFn: (id) => deletedPost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['posts']})
      toast.success("Post deleted successfully");
    },
    onError: () => {
      toast.error("Failed to delete post");
    },
  });
};

export default useDeletePost;
