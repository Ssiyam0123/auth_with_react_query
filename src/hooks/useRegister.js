import axios from "axios";

export const useRegister = async (body) => {
  const { data } = await axios.post("/api/auth/register", body);
// console.log('from axios : ',data)
  return data;
};
