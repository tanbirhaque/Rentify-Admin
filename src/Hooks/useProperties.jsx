import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProperties = () => {
  const axiosPublic = useAxiosPublic();
  const { data: properties = [], refetch } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const res = await axiosPublic.get("/properties");
      return res.data;
    },
  });
  return [properties, refetch];
};

export default useProperties;
