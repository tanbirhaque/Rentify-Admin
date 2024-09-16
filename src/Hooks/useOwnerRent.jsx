import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";



const useOwnerRent = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic();
    const { data: ownerRent = [], refetch } = useQuery({
        queryKey: ['ownerRent',user],
        queryFn: async () => {
            // when data import from database then change the url & use axios public 
            const res = await axiosPublic.get(`/ownerRentReq?email=${user.email}`)
            // console.log(res.data)
            return res.data;
        }
    })
    return [ownerRent, refetch]
};

export default useOwnerRent;