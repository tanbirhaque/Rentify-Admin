//component added by "Fahima"

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Reset = () => {
  const { resetPass } = useContext(AuthContext);
  const handleResetPass = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    resetPass(email)
      .then((response) => {
        Swal.fire({
          title: "Reset email sent successfully!",
          timer: 2000,
          color: "#002172",
          showConfirmButton: false,
          icon: "success",
        });
        // console.log(response.user);
      })
      .catch((error) => {
        // console.log(error.code);
      });
  };
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-col items-center justify-center g-0 h-screen px-4">
        {/* card */}
        <div className="justify-center items-center w-full bg-white rounded-md shadow lg:flex md:mt-0 max-w-md xl:p-0">
          {/* card body */}
          <div className="p-6 w-full sm:p-8 lg:p-8">
            <div className="mb-4">
              {/* logo */}
              <div className="flex items-center">
                <img src="https://i.ibb.co/GsQpf2D/logo.png" />
                <h4 className="font-bold poppins-font text-2xl lg:text-[38px] ml-2">
                  Renti<span className="text-[#ec3323]">fy</span>
                </h4>
              </div>
              {/* logo */}
              <p className="mb-6">
                Don&#39;t worry, we will send you an email to reset your
                password.
              </p>
            </div>
            {/* form */}
            <form onSubmit={handleResetPass}>
              {/* email */}
              <div className="mb-3">
                <label className="inline-block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="border border-gray-300 text-gray-900 rounded focus:ring-[#002172] focus:border-[#002172] block w-full p-2 px-3 disabled:opacity-50 disabled:pointer-events-none"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              {/* button */}
              <div className="mb-3 grid">
                <button
                  type="submit"
                  className="btn bg-[#002172] text-white border-[#002172] hover:bg-[#ec3323] hover:border-[#ec3323] active:bg-[#ec3323] active:border-[#ec3323] focus:outline-none focus:ring-4 focus:ring-[#002172]"
                >
                  Reset Password
                </button>
              </div>
              <span>
                Don&#39;t have an account?
                <Link
                  to="/register"
                  className="text-[#002172] hover:text-[#ec3323]"
                >
                  Register
                </Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reset;
