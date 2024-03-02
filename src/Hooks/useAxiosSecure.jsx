import axios from "axios";

const axiosSecure = axios.create({
    // baseURL: 'https://rentify-server-ashen.vercel.app'
    baseURL: 'https://rentify-server-drab.vercel.app'
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;