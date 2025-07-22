import axios from "axios";
import React from "react";

const useSingleUser = async (email) => {
  const { data } = await axios.get(`/user/${email}`);
  return data;
};

export default useSingleUser;
