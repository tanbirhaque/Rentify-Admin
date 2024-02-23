import { FaBars } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const DashNav = ({ toggleSidebar }) => {
  const { user, logOut } = useAuth();
  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("logged out");
        // swal("Signout", "You are successfully signed out", "success");
        //sweet alert 2 added by Fahima
        Swal.fire({
          title: "You are successfully logged out",
          timer: 2000,
          color: "#002172",
          showConfirmButton: false,
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const defaultImg =
    "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1696786604~exp=1696787204~hmac=c10645727b8724eecda4984ef1d8fbfba92a9c9072a57b851c28c9b1d8d62b81";

  return (
    <div className="min-w-full h-14 bg-white shadow-md flex items-center justify-between px-3">
      <div>
        <button className="" onClick={toggleSidebar}>
          {/* {isSidebarOpen ? <FaTimes></FaTimes> : <FaBars></FaBars>} */}
          <FaBars></FaBars>
        </button>
      </div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              // src={user?.photoURL}
              src={`${user?.photoURL ? user?.photoURL : defaultImg}`}
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-5 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link to="/dashboard/profile" className="justify-between">
              Profile
             
            </Link>
          </li>
          <li>
            <Link>Settings</Link>
          </li>
          <li onClick={handleSignOut}>
            <Link>Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashNav;
