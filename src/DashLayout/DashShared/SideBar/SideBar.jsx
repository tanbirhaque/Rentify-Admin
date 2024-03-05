import "./SideBar.css";
import { Link, NavLink } from "react-router-dom";
import { FaUserEdit, FaRegCommentDots } from "react-icons/fa";
import { ImBlog } from "react-icons/im";
import { MdOutlineRateReview, MdDomainVerification } from "react-icons/md";
import { IoIosStats } from "react-icons/io";

const SideBar = () => {
  const sideLinks = (
    <>
      <li className="dashLi xl:text-[20px]">
        <NavLink to="/" className="dashNav flex items-center gap-2">
          <IoIosStats className="dashIcon text-[#64707d]"></IoIosStats>
          Dashboard
        </NavLink>
      </li>
      <li className="dashLi xl:text-[20px]">
        <NavLink to="/owners" className="dashNav flex items-center gap-2">
          <FaUserEdit className="dashIcon text-[#64707d]"></FaUserEdit>
          All Owners
        </NavLink>
      </li>
      <li className="dashLi xl:text-[20px]">
        <NavLink to="/reviews" className="dashNav flex items-center gap-2">
          <MdOutlineRateReview className="dashIcon text-[#64707d]"></MdOutlineRateReview>
          Reviews
        </NavLink>
      </li>
      <li className="dashLi xl:text-[20px]">
        <NavLink to="/blogs" className="dashNav flex items-center gap-2">
          <ImBlog className="dashIcon text-[#64707d]"></ImBlog>
          Blogs
        </NavLink>
      </li>
      <li className="dashLi xl:text-[20px]">
        <NavLink to="/comments" className="dashNav flex items-center gap-2">
          <FaRegCommentDots className="dashIcon text-[#64707d]"></FaRegCommentDots>
          Comments
        </NavLink>
      </li>
      <li className="dashLi xl:text-[20px]">
        <NavLink
          to="/property-verification"
          className="dashNav flex items-center gap-2"
        >
          <MdDomainVerification className="dashIcon text-[#64707d]"></MdDomainVerification>
          Property Verification
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="w-64 xl:min-w-[300px] min-h-screen">
        <div className="flex items-center my-6 ml-5">
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
          {/* <span className="flex gap-5">
            <NavLink to="/" className="flex items-center gap-2">
              <FaHome></FaHome>
              Home
            </NavLink>
            <h3>&gt;</h3>
            <h3 className="flex items-center gap-2">
              <MdOutlineDashboardCustomize />
              Dashboard
            </h3>
          </span> */}
          {/* <hr className="mb-3" /> */}
          {/* user routes */}
          <ul className="flex flex-col gap-2">{sideLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
