// first import tanstack query
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useBlogs = () => {
  const axiosSecure = useAxiosSecure();
  const { data: blogs = [], refetch } = useQuery({
    queryKey: ["blog"],
    queryFn: async () => {
      // when data import from database then change the url & use axios public
      const res = await axiosSecure.get("/blogs");
      // console.log(res.data);
      return res.data;
    },
  });
  return [blogs, refetch];
};

export default useBlogs;
