import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useRentRequest = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic();
    const { data: rentrequest = [], refetch } = useQuery({
        queryKey: ['rentrequest'],
        queryFn: async () => {
            // when data import from database then chage the url & use axios public 
            const res = await axiosPublic.get(`/requested-rent?email=${user.email}`)
            // console.log(res.data)
            return res.data;
        }
    })
    return [rentrequest, refetch]
};

export default useRentRequest;