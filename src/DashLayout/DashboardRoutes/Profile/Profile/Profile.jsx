//component added by "Fahima"

import useAuth from "../../../../Hooks/useAuth";
import { FaUsers } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { MdOutlineHomeWork } from "react-icons/md";
import { TbBolt, TbHomePlus } from "react-icons/tb";
import SplineChart from "./SplineChart";
import PieChart from "./PieChart";
import useProperties from "../../../../Hooks/useProperties";
import CountUp from "react-countup";
import useGetUsers from "../../../../Hooks/useGetUsers";

const Profile = () => {
  const { user } = useAuth();
  const [users] = useGetUsers();
  const [properties] = useProperties();

  const forRent = properties.filter(
    (item) => item?.property_info?.property_for === "rent"
  );
  const forSale = properties.filter(
    (item) => item?.property_info?.property_for === "sale"
  );

  const revenueProperties = properties.map(
    (item) => item?.property_info?.property_details?.property_price
  );

  // console.log(revenueProperties);

  //adding revenues
  let totalRevenue = 0;
  for (let i = 0; i < revenueProperties.length; i++) {
    totalRevenue += revenueProperties[i];
  }
  // console.log(totalRevenue);

  return (
    <div className="bg-[#f9fafb] p-5 space-y-5">
      <div>
        <h1 className="text-xl font-semibold">Hello, {user?.displayName}</h1>
        <p className="text-lg text-slate-400">Welcome Back</p>
      </div>
      {/* data cards */}
      {/* <div className="flex justify-between flex-col lg:flex-row gap-5"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
        {/* revenue */}
        <div className="flex justify-between bg-white gap-5  rounded-md p-5 border-2">
          <div className="flex flex-col">
            <p className="text-base text-slate-400">Total revenue</p>
            <p className="text-2xl font-medium">
              $<CountUp end={totalRevenue} duration={3} />
              {/* $<CountUp end={45890} duration={3} /> */}
            </p>
            {/* <p className=" text-2xl font-medium">$ 45,890</p> */}
          </div>
          <div className="bg-[#f8fafc] w-12 h-12 flex items-center justify-center text-[#16a34a] text-2xl rounded-lg">
            <FaDollarSign />
          </div>
        </div>
        {/*  visitor */}
        <div className="flex justify-between bg-white gap-5  rounded-md p-5 border-2">
          <div>
            <p className="text-base text-slate-400">Total Visitor</p>
            {/* <p className=" text-2xl  font-medium">45,890</p> */}
            <p className="text-2xl font-medium">
              <CountUp end={users.length} duration={3} />
              {/* <CountUp end={45890} duration={3} /> */}
            </p>
          </div>
          <div className="bg-[#f8fafc] w-12 h-12 flex items-center justify-center text-[#16a34a] text-2xl rounded-lg">
            <FaUsers />
          </div>
        </div>
        {/* total properties */}
        <div className="flex justify-between bg-white gap-5  rounded-md p-5 border-2">
          <div>
            <p className="text-base text-slate-400">Total Properties</p>
            {/* <p className=" text-2xl  font-medium">45,890</p> */}
            <p className="text-2xl font-medium">
              <CountUp end={properties.length} duration={3} />
            </p>
          </div>
          <div className="bg-[#f8fafc] w-12 h-12 flex items-center justify-center text-[#16a34a] text-2xl rounded-lg">
            <MdOutlineHomeWork />
          </div>
        </div>
        {/* sale  */}
        <div className="flex justify-between bg-white gap-5 rounded-md p-5 border-2">
          <div>
            <p className="text-base text-slate-400">Properties for sale</p>
            <p className="text-2xl font-medium">
              <CountUp end={forSale.length} duration={3} />
            </p>
            {/* <p className=" text-2xl  font-medium">45,890</p> */}
          </div>
          <div className="bg-[#f8fafc] w-12 h-12 flex items-center justify-center text-[#16a34a] text-2xl rounded-lg">
            <TbBolt />
          </div>
        </div>
        {/* rent */}
        <div className="flex justify-between bg-white gap-5  rounded-md p-5 border-2">
          <div>
            <p className="text-base text-slate-400">Properties for rent</p>
            <p className="text-2xl font-medium">
              <CountUp end={forRent.length} duration={3} />
            </p>
            {/* <p className=" text-2xl  font-medium">45,890</p> */}
          </div>
          <div className="bg-[#f8fafc] w-12 h-12 flex items-center justify-center text-[#16a34a] text-2xl rounded-lg">
            <TbHomePlus />
          </div>
        </div>
      </div>
      {/* chart */}
      <div className="flex flex-col lg:flex-row justify-between gap-5">
        {/* spline chart */}
        <div className="w-auto lg:w-3/5 p-5 rounded-lg bg-[#ffffff] border-2">
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
        <div className="w-auto lg:w-2/5 bg-[#ffffff] p-5 rounded-lg  border-2">
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
