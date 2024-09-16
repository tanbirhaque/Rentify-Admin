//component added by "Fahima"

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useForm } from "react-hook-form";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  //for password visibility
  const [passwordVisible, setPasswordVisible] = useState(true);

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  //login function
  //form data
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    loginUser(data.email, data.password)
      .then((res) => {
        // console.log(res.user);
        Swal.fire({
          title: "Login successful!!!",
          timer: 2000,
          color: "#002172",
          showConfirmButton: false,
          icon: "success",
        });
        // window.location.href = "/dashboard/profile";
        navigate("/");
      })
      .catch((err) => {
        // console.log(err.message);
        Swal.fire({
          title: err.code,
          timer: 2000,
          color: "#002172",
          showConfirmButton: false,
          icon: "error",
        });
      });
  };
  //
  return (
    <div className="max-w-2xl mx-auto">
      {/*  */}
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
              <p className="mb-6">Please enter your information.</p>
            </div>
            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* username */}
              <div className="mb-3">
                <label className="inline-block mb-2">Email</label>
                <input
                  type="email"
                  className="border border-gray-300 text-gray-900 rounded focus:ring-[#002172] focus:border-[#002172] block w-full p-2 px-3 disabled:opacity-50 disabled:pointer-events-none"
                  name="email"
                  placeholder="Email address here"
                  {...register("email", { required: true })}
                  required
                />
              </div>
              {/* password */}
              <div className="mb-5">
                <label className="inline-block mb-2">Password</label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  className="border border-gray-300 text-gray-900 rounded focus:ring-[#002172] focus:border-[#002172] w-full p-2 px-3 disabled:opacity-50 disabled:pointer-events-none relative"
                  name="password"
                  placeholder="**************"
                  {...register("password", { required: true })}
                  required
                />
                <span
                  className="cursor-pointer text-xl absolute -ml-8 mt-2"
                  onClick={handleTogglePassword}
                >
                  {passwordVisible ? <IoMdEye /> : <IoMdEyeOff />}
                </span>
              </div>
              {/* checkbox */}
              <div className="lg:flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#002172] bg-white border-gray-300 rounded focus:ring-[#002172] focus:outline-none focus:ring-2"
                    id="remember-me"
                  />
                  <label className="inline-block ms-2">Remember me</label>
                </div>
              </div>
              <div>
                {/* button */}
                <div className="grid">
                  <button
                    type="submit"
                    className="btn bg-[#002172] text-white border-indigo-600 hover:bg-[#ec3323] hover:border-[#ec3323] active:bg-[#ec3323] active:border-[#ec3323] focus:outline-none focus:ring-4 focus:ring-indigo-300"
                  >
                    Sign in
                  </button>
                </div>
                <div className="flex justify-between mt-4">
                  <div className="mb-2">
                    <Link
                      to="/register"
                      className="text-[#002172] hover:text-[#ec3323]"
                    >
                      Create An Account
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/reset"
                      className="text-[#002172] hover:text-[#ec3323]"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
