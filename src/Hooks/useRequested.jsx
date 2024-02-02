import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useRequested = () => {
  const { user } = useContext(AuthContext)
  const currentUserEmail = user?.email
  const axiosPublic = useAxiosPublic();
  const { data: requested = [], refetch } = useQuery({
    queryKey: ["requested", user],
    queryFn: async () => {
      const res = await axiosPublic.get("/all_requested", {
        params: { email: currentUserEmail },
      });
      return res.data;
    },
  });
  return [requested, refetch];
};

export default useRequested;  
