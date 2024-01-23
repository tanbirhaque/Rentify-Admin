import { FaBars } from "react-icons/fa6";

const DashNav = ({handleOpenSidebar}) => {
    return (
        <div className="h-14 bg-white min-w-full shadow-md">
            <div className="flex h-full items-center">
                <FaBars className="ml-5 text-[22px]" onClick={handleOpenSidebar}></FaBars>
            </div>
        </div>
    );
};

export default DashNav;