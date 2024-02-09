import "./SideBar.css";
import { Link, NavLink } from "react-router-dom";
import {
  FaBookmark,
  FaHome,
  FaUserCircle,
  FaRegClone,
  FaUserEdit,
  FaRegCommentDots,
} from "react-icons/fa";
import { IoAddCircleSharp, IoBookmarksSharp } from "react-icons/io5";
import {
  MdOutlinePendingActions,
  MdOutlineRemoveShoppingCart,
} from "react-icons/md";
import {
  MdOutlineDashboardCustomize,
  MdOutlineRateReview,
} from "react-icons/md";

const SideBar = () => {
  const sideLinks = (
    <>
      <li className="dashLi">
        <NavLink
          to="/dashboard/profile"
          className="dashNav flex items-center gap-2"
        >
          <FaUserCircle className="dashIcon text-[#64707d]" />
          Profile
        </NavLink>
        <NavLink
          to="/dashboard/user"
          className="dashNav flex items-center gap-2"
        >
          <FaUserEdit className="dashIcon text-[#64707d]" />
          Owner Requests
        </NavLink>
        <NavLink
          to="/dashboard/reviews"
          className="dashNav flex items-center gap-2"
        >
          <MdOutlineRateReview className="dashIcon text-[#64707d]" />
          Reviews
        </NavLink>
        <NavLink
          to="/dashboard/comments"
          className="dashNav flex items-center gap-2"
        >
          <FaRegCommentDots className="dashIcon text-[#64707d]" />
          Comments
        </NavLink>
      </li>
    </>
  );

  // const ownerRoutes = <>
  //     <li className="dashLi">
  //         <NavLink
  //             to="/dashboard/add"
  //             className="dashNav flex items-center gap-2"
  //         >
  //             <IoAddCircleSharp className="dashIcon text-[#64707d]"></IoAddCircleSharp >
  //             Add Properties
  //         </NavLink>
  //     </li>
  //     <li className="dashLi pt-2">
  //         <NavLink
  //             to="/dashboard/manage"
  //             className="dashNav flex items-center gap-2"
  //         >
  //             <MdManageHistory className="dashIcon text-[#64707d]"></MdManageHistory>
  //             Manage Properties
  //         </NavLink>
  //     </li>
  //     <li className="dashLi pt-2">
  //         <NavLink
  //             to="/dashboard/rentReq"
  //             className="dashNav flex items-center gap-2"
  //         >
  //             <HiCubeTransparent className="dashIcon text-[#64707d]"> </HiCubeTransparent>
  //             Rent Request
  //         </NavLink>
  //     </li>
  //     <li className="dashLi pt-2">
  //         <NavLink
  //             to="/dashboard/buyReq"
  //             className="dashNav flex items-center gap-2"
  //         >
  //             <CiShoppingTag className="dashIcon text-[#64707d]"></CiShoppingTag>
  //             Buy Request
  //         </NavLink>
  //     </li>
  //     <li className="dashLi pt-2">
  //         <NavLink
  //             to="/dashboard/soldProperties"
  //             className="dashNav flex items-center gap-2"
  //         >
  //             <MdOutlineRemoveShoppingCart className="dashIcon text-[#64707d]"></MdOutlineRemoveShoppingCart>
  //            Sold Out Properties
  //         </NavLink>
  //     </li>
  //     <li className="dashLi pt-2">
  //         <NavLink
  //             to="/dashboard/rentOutProperties"
  //             className="dashNav flex items-center gap-2"
  //         >
  //             <IoBookmarksSharp className="dashIcon text-[#64707d]"></IoBookmarksSharp>
  //             Rent Out Properties
  //         </NavLink>
  //     </li>
  // </>

  return (
    <div>
      <div className="w-64 min-h-screen">
        <div className="flex justify-center items-center my-6">
          <Link to="/">
            <div className="flex  items-center">
              <img
                className="max-w-[65px] md:w-full"
                src="https://i.ibb.co/3kqdMYy/logo-white.png"
              />
              <h4 className="font-bold poppins-font text-2xl lg:text-[34px] ml-2">
                Renti<span className="text-[#e33226]">fy</span>
              </h4>
            </div>
          </Link>
        </div>
        {/* Sidebar Contents (Routes of dashboard) starts here */}
        <div className="p-4">
          <span className="flex gap-2 items-center">
            {/* <NavLink to="/" className="flex items-center gap-2">
              <FaHome></FaHome>
              Home
            </NavLink>
            <h3>&gt;</h3>
            <h3 className="flex items-center gap-2">
              <MdOutlineDashboardCustomize />
              Dashboard
            </h3> */}
            <MdOutlineDashboardCustomize />
            Admin Dashboard
          </span>
          <hr className="mb-3" />
          <ul className="flex flex-col gap-2">{sideLinks}</ul>

          {/* <h3 className="poppins-font font-semibold text-xl mt-5 text-gray-400">
            Owner Routes
          </h3> */}
          {/* <hr className="mb-3" />
          <ul>{ownerRoutes}</ul> */}
          {/* drop-down -1*/}
          {/* <div className="collapse ">
            <input type="checkbox" />
            <div className="text-[919EAB] hover:text-white collapse-title font-medium flex gap-1.5 items-center">
              <FaRegClone />
              Drop-down 1
              <FaChevronDown />
            </div>
            <div className="collapse-content">
              <p>
                <Link>One</Link>
              </p>
              <p>
                <Link>Two</Link>
              </p>
              <p>
                <Link>Three</Link>
              </p>
              <p>
                <Link>Four</Link>
              </p>
            </div>
          </div> */}
          {/* drop-down -2*/}
          {/* <div className="collapse ">
            <input type="checkbox" />
            <div className="text-[919EAB] hover:text-white collapse-title font-medium flex gap-1.5 items-center">
              <FaRegClone />
              Drop-down 2
              <FaChevronDown />
            </div>
            <div className="collapse-content">
              <p>
                <Link>One</Link>
              </p>
              <p>
                <Link>Two</Link>
              </p>
              <p>
                <Link>Three</Link>
              </p>
              <p>
                <Link>Four</Link>
              </p>
            </div>
          </div> */}
          {/* drop-down*/}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
