import axiosInstance from "@/lib/axios";

export const getUsersAllPost = async (email) => {
  const { data } = await axiosInstance.get(`/post?email=${email}`);
  return data;
};

export const postPost = async (postData) => {
  const { data } = await axiosInstance.post("/post", postData);
  return data;
};

export const deletedPost = async (id) => {
  const { data } = await axiosInstance.delete(`/post/${id}`);
  return data;
};
