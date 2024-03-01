// Dashboard Layout created by Tanbir | Designed by 'Sadia Afrin'
// Design Improved and bug fixed by 'Tanbir'
import { useState } from "react";
import { Outlet } from "react-router-dom";
import DashNav from "./DashShared/DashNav/DashNav";
import './DashShared/SideBar/SideBar.css'
import SideBar from "./DashShared/SideBar/SideBar";


const DashLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    // console.log(isSidebarOpen);
  };
  return (
    <>
      <div className="flex">
        {/* Sidebar of dashboard starts here */}
        <div
          className={`side_bar bg-[#0f172a] min-h-screen fixed w-64 xl:min-w-[300px] z-[99999] text-white transition-all duration-300 ${isSidebarOpen ? "-ml-64 lg:ml-0" : "lg:-ml-64 xl:-ml-[300px]"
            }`}
        >
          <SideBar></SideBar>
        </div>
        {/* Main content of Dashboard starts here */}
        <div className={`main_content w-svw transition-all duration-300 ${isSidebarOpen ? "lg:ml-64 xl:ml-[300px]" : ""}`}>
          <DashNav toggleSidebar={toggleSidebar} ></DashNav>
          <div className="flex-1">
            <Outlet></Outlet>
            {/* <div className="fixed z-[99999] right-8 bottom-12">
              <ToTop></ToTop>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashLayout;
