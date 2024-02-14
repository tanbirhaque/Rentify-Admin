//component added by "Fahima"

import useAuth from "../../../../Hooks/useAuth";
import { FaUsers } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { MdOutlineHomeWork } from "react-icons/md";
import { TbBolt, TbHomePlus } from "react-icons/tb";
import SplineChart from "./SplineChart";
import PieChart from "./PieChart";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="bg-[#f9fafb] p-5 space-y-5">
      <div>
        <h1 className="text-xl font-semibold">Hello, {user?.displayName}</h1>
        <p className="text-lg text-slate-400">Welcome Back</p>
      </div>
      {/* data cards */}
      <div className="flex justify-between flex-col md:flex-row gap-5">
        {/* revenue */}
        <div className="flex justify-between bg-white gap-5  rounded-md p-5 border-2">
          <div className="flex flex-col">
            <p className="text-base text-slate-400">Total revenue</p>
            <p className=" text-2xl font-medium">$ 45,890</p>
          </div>
          <div className="bg-[#f8fafc] w-12 h-12 flex items-center justify-center text-[#16a34a] text-2xl rounded-lg">
            <FaDollarSign />
          </div>
        </div>
        {/*  visitor */}
        <div className="flex justify-between bg-white gap-5  rounded-md p-5 border-2">
          <div>
            <p className="text-base text-slate-400">Total Visitor</p>
            <p className=" text-2xl  font-medium">45,890</p>
          </div>
          <div className="bg-[#f8fafc] w-12 h-12 flex items-center justify-center text-[#16a34a] text-2xl rounded-lg">
            <FaUsers />
          </div>
        </div>
        {/* total properties */}
        <div className="flex justify-between bg-white gap-5  rounded-md p-5 border-2">
          <div>
            <p className="text-base text-slate-400">Total Properties</p>
            <p className=" text-2xl  font-medium">45,890</p>
          </div>
          <div className="bg-[#f8fafc] w-12 h-12 flex items-center justify-center text-[#16a34a] text-2xl rounded-lg">
            <MdOutlineHomeWork />
          </div>
        </div>
        {/* sell  */}
        <div className="flex justify-between bg-white gap-5 rounded-md p-5 border-2">
          <div>
            <p className="text-base text-slate-400">Properties for sell</p>
            <p className=" text-2xl  font-medium">45,890</p>
          </div>
          <div className="bg-[#f8fafc] w-12 h-12 flex items-center justify-center text-[#16a34a] text-2xl rounded-lg">
            <TbBolt />
          </div>
        </div>
        {/* rent */}
        <div className="flex justify-between bg-white gap-5  rounded-md p-5 border-2">
          <div>
            <p className="text-base text-slate-400">Properties for rent</p>
            <p className=" text-2xl  font-medium">45,890</p>
          </div>
          <div className="bg-[#f8fafc] w-12 h-12 flex items-center justify-center text-[#16a34a] text-2xl rounded-lg">
            <TbHomePlus />
          </div>
        </div>
      </div>
      {/* chart */}
      <div className="flex flex-col md:flex-row justify-between gap-5">
        {/* spline chart */}
        <div className="w-auto md:w-3/5 p-5 rounded-lg  border-2">
          <div className="flex flex-col md:flex-row justify-between items-center my-5 ">
            <h6 className="text-lg font-semibold">Revenue Analytics</h6>
            <select className="select-bordered select w-auto">
              <option disabled selected>
                Yearly
              </option>
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Today</option>
            </select>
          </div>
          <hr className="w-full my-5" />
          <SplineChart />
        </div>
        {/* pie chart */}
        <div className="w-auto md:w-2/5 bg-white p-5 rounded-lg  border-2">
          <div className="flex flex-col md:flex-row justify-between items-center my-5 ">
            <h6 className="text-lg font-semibold">Sales Data</h6>
            <select className="select-bordered select w-auto">
              <option disabled selected>
                Yearly
              </option>
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Today</option>
            </select>
          </div>
          <hr className="w-full my-5" />
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Profile;
