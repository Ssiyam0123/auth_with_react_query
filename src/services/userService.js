import axiosInstance from "@/lib/axios";
import React from "react";


const currentUserInfo = async (email) => {
  const { data } = await axiosInstance.get(`/user/${email}`);
  return data;
};

export default currentUserInfo;
