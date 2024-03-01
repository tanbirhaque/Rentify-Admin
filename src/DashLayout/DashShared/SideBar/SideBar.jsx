import "./SideBar.css";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle, FaUserEdit, FaRegCommentDots } from "react-icons/fa";
import { ImBlog } from "react-icons/im";
import {
  MdOutlineDashboardCustomize,
  MdOutlineRateReview,MdDomainVerification
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
          to="/dashboard/owners"
          className="dashNav flex items-center gap-2"
        >
          <FaUserEdit className="dashIcon text-[#64707d]" />
          All Owners
        </NavLink>
        <NavLink
          to="/dashboard/reviews"
          className="dashNav flex items-center gap-2"
        >
          <MdOutlineRateReview className="dashIcon text-[#64707d]" />
          Reviews
        </NavLink>
        <NavLink
          to="/dashboard/blogs"
          className="dashNav flex items-center gap-2"
        >
          <ImBlog className="dashIcon text-[#64707d]" />
          Blogs
        </NavLink>
        <NavLink
          to="/dashboard/comments"
          className="dashNav flex items-center gap-2"
        >
          <FaRegCommentDots className="dashIcon text-[#64707d]" />
          Comments
        </NavLink>
        <NavLink
          to="/dashboard/property-verification"
          className="dashNav flex items-center gap-2"
        >
          <MdDomainVerification className="dashIcon text-[#64707d]" />
          Property Verification
        </NavLink>
      </li>
    </>
  );


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

      
        </div>
      </div>
    </div>
  );
};

export default SideBar;
