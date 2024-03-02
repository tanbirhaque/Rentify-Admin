import axios from "axios";

const useAxiosPublic = () => {
  const axiosPublic = axios.create({
    // baseURL: "https://rentify-server-ashen.vercel.app",
    baseURL: "https://rentify-server-drab.vercel.app",
  });
  return axiosPublic;
};

export default useAxiosPublic;
