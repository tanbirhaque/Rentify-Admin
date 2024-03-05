import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";

const useSaleRequest = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic();
    const { data: salerequest = [], refetch } = useQuery({
        queryKey: ['salerequest'],
        queryFn: async () => {
            // when data import from database then chage the url & use axios public 
            const res = await axiosPublic.get(`/requested-sale?email=${user.email}`)
            // console.log(res.data)
            return res.data;
        }
    })
    return [salerequest, refetch]
};

export default useSaleRequest;