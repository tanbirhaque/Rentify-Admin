import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useOwners = () => {
  const axiosSecure = useAxiosSecure();
  const { data: owners = [], refetch } = useQuery({
    queryKey: ["ownerRequest"],
    queryFn: async () => {
      const res = await axiosSecure.get("/ownerRequest");
      return res.data;
    },
  });
  return [owners, refetch];
};

export default useOwners;
