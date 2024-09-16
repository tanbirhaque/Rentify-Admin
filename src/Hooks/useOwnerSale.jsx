import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";
const useOwnerSale = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic();
    const { data: ownerSale = [], refetch } = useQuery({
        queryKey: ['ownerSale', user],
        queryFn: async () => {
            // when data import from database then change the url & use axios public 
            const res = await axiosPublic.get(`/ownerSaleReq?email=${user.email}`)
            // console.log(res.data)
            return res.data;
        }
    })
    return [ownerSale, refetch]
};

export default useOwnerSale;