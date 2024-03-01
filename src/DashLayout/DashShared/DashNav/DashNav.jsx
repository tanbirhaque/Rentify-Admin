import { FaBars } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { MdOutlineAdminPanelSettings, MdOutlineEmail } from "react-icons/md";
import { HiOutlineHome } from "react-icons/hi2";
import { TbLogout } from "react-icons/tb";

const DashNav = ({ toggleSidebar }) => {
  const { userSignOut, user, setUser } = useContext(AuthContext);
  const handleLogOut = () => {
    userSignOut()
      .then(() => {
        console.log("logged out");
        // swal("Signout", "You are successfully signed out", "success");
        //sweet alert 2 added by Fahima
        Swal.fire({
          title: "You are successfully signed out",
          timer: 2000,
          color: "#002172",
          showConfirmButton: false,
          icon: "success",
        });
        setUser(null);

        setTimeout(() => {
          Navigate("/");
        }, 500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const defaultImg = "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1696786604~exp=1696787204~hmac=c10645727b8724eecda4984ef1d8fbfba92a9c9072a57b851c28c9b1d8d62b81";

  return (
    <div className="min-w-full bg-white shadow-md flex items-center justify-end gap-6 lg:justify-between pl-3 pr-7 pt-3 pb-3">
      <div className="hidden lg:flex">
        <button className="" onClick={toggleSidebar}>
          {/* {isSidebarOpen ? <FaTimes></FaTimes> : <FaBars></FaBars>} */}
          <FaBars></FaBars>
        </button>
      </div>
      <div className="dropdown dropdown-end">
        <div className="flex items-center">
          <div className="flex flex-col items-end mr-4 h-full">
            <h3 className="capitalize poppins-font text-[16px] font-semibold">{user?.displayName}</h3>
            <p className="capitalize poppins-font text-[12px] text-[#464a53]">Admin</p>
          </div>
          <details className="dropdown dropdown-end">
            <summary tabIndex={0} className="btn min-h-[30px] max-h-[40px] navMarker px-0 py-0 flex items-center">
              <div>
                {/* <img
                  className="rounded-lg min-w-[48px] max-h-[48]"
                  src={`${user?.photoURL ? user?.photoURL : defaultImg}`}
                /> */}
              </div>
            </summary>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] py-2 px-0 shadow  rounded-lg bg-[#ffffff] "
            >
              <li className="hover:bg-[#002172] transition-all ease-out duration-300 hover:text-white">
                <p className="text-[17px]"><span><MdOutlineEmail className=""></MdOutlineEmail></span>{user?.email}</p>
              </li>
              <li className="hover:bg-[#002172] transition-all ease-out duration-300 hover:text-white">
                <Link to="/dashboard/userProfile" className="text-[17px]"><span><HiOutlineHome></HiOutlineHome></span>Home</Link>
              </li>
              <li className="hover:bg-[#002172] transition-all ease-out duration-300 hover:text-white">
                <a href="http://localhost:5174/" target="blank" className="text-[17px]"><span><MdOutlineAdminPanelSettings></MdOutlineAdminPanelSettings></span>Admin Panel</a>
              </li>
              <li className="hover:bg-[#002172] transition-all ease-out duration-300 hover:text-white">
                <Link onClick={handleLogOut} className="text-[17px]"><span><TbLogout className="text-[#e33226]"></TbLogout></span>Logout</Link>
              </li>
            </ul>
          </details>
        </div>
      </div>
      <div className="flex lg:hidden">
        <button className="" onClick={toggleSidebar}>
          {/* {isSidebarOpen ? <FaTimes></FaTimes> : <FaBars></FaBars>} */}
          <FaBars></FaBars>
        </button>
      </div>
    </div>
  );
};

export default DashNav;
