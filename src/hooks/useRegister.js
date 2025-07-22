import axiosInstance from "@/lib/axios";
import axios from "axios";

export const useRegister = async (body) => {
  const { data } = await axiosInstance.post("/auth/register", body);
// console.log('from axios : ',data)
  return data;
};
