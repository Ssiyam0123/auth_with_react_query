import axiosInstance from "@/lib/axios";

export const getUsersAllPost = async (email, type) => {
  const { data } = await axiosInstance.get(`/post?email=${email}&type=${type}`);
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

export const addLike = async(id, email)=>{
  const {data}  = await axiosInstance.post(`/likes/${id}`,{email})
  return data
}
