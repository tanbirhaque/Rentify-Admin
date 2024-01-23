import { useState } from "react";
import SideBar from "./Shared/SideBar/SideBar";
import DashNav from "./Shared/DashNav/DashNav";


const AdminDash = () => {

    const [isSidebarOpen, setSidebarOpen] = useState(true)

    const handleOpenSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
        console.log(isSidebarOpen);
    }

    return (
        <div className="flex">
            <div className={`transition-all duration-300 ${isSidebarOpen? "" : "-ml-64"}`}>
                <SideBar></SideBar>
            </div>
            <div className="w-full">
                <DashNav handleOpenSidebar={handleOpenSidebar}></DashNav>
                <h1>main content</h1>
            </div>
        </div>
    );
};

export default AdminDash;