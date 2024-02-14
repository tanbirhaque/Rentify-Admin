//component added by "Fahima"

import useAuth from "../../../../Hooks/useAuth";
import { FaUsers } from "react-icons/fa";
import { TbBolt, TbHomePlus } from "react-icons/tb";
import { mdiHomeCityOutline, mdiCurrencyUsd } from "@mdi/js";
import Icon from "@mdi/react";
import SplineChart from "./SplineChart";
import PieChart from "./PieChart";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="p-10 space-y-5 bg-[#F9FAFB]">
      <div>
        <h1 className="text-xl font-semibold">Hello, {user?.displayName}</h1>
        <p className="text-lg text-slate-400">Welcome Back</p>
      </div>
      {/* data cards */}
      <div className="flex justify-between flex-col md:flex-row">
        {/* revenue */}
        <div className="max-w-60 flex justify-between bg-white items-center p-4">
          <div>
            <p className="text-base text-slate-400">Total revenue</p>
            <p className=" text-2xl font-medium">$ 45,890</p>
          </div>
          <div>
            <Icon
              className="text-[#16a34a] text-2xl bg-[#f8fafc]"
              path={mdiCurrencyUsd}
              size={1}
            />
          </div>
        </div>
        {/*  visitor */}
        <div className="max-w-60 flex justify-between items-center bg-white p-5">
          <div>
            <p className="text-base text-slate-400">Total Visitor</p>
            <p className=" text-2xl  font-medium">45,890</p>
          </div>
          <div>
            <FaUsers className="text-[#16a34a] text-2xl bg-[#f8fafc]" />
          </div>
        </div>
        {/* total */}
        <div className="max-w-60 flex justify-between items-center bg-white p-5">
          <div>
            <p className="text-base text-slate-400">Total Properties</p>
            <p className=" text-2xl  font-medium">45,890</p>
          </div>
          <div className="w-12 p-5">
            <Icon
              path={mdiHomeCityOutline}
              size={1}
              className="text-[#16a34a] bg-[#f8fafc]"
            />
          </div>
        </div>
        {/* sell  */}
        <div className="max-w-60 flex justify-between items-center bg-white p-5">
          <div>
            <p className="text-base text-slate-400">Properties for sell</p>
            <p className=" text-2xl  font-medium">45,890</p>
          </div>
          <TbBolt className="text-[#16a34a] w-7 h-6 bg-[#f8fafc]" />
        </div>
        {/* rent */}
        <div className="max-w-60 flex justify-between items-center bg-white p-5">
          <div>
            <p className="text-base text-slate-400">Properties for rent</p>
            <p className=" text-2xl  font-medium">45,890</p>
          </div>
          <div className="p-2 w-12">
            <TbHomePlus className="text-[#16a34a] w-7 h-6 bg-[#f8fafc]" />
          </div>
        </div>
      </div>
      {/* chart */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        {/* spline chart */}
        <div className="w-auto md:w-3/5 bg-white p-5 rounded-lg shadow-md">
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
        <div className="w-auto md:w-2/5 bg-white p-5 rounded-lg shadow-md">
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
