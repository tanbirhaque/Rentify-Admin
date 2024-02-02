import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useSavedProperties = () => {
  const { user } = useContext(AuthContext)
  const currentUserEmail = user?.email
  const axiosPublic = useAxiosPublic();
  const { data: saved = [], refetch, isLoading } = useQuery({
    queryKey: ["saved", user],
    queryFn: async () => {
      const res = await axiosPublic.get("/saved-properties", {
        params: { email: currentUserEmail },
      });
      return res.data;
    },
  });
  return [saved, refetch, isLoading];
};

export default useSavedProperties;
