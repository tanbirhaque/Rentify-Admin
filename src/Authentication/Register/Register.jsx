//component added by "Fahima"

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useState } from "react";

const Register = () => {
  const { userRegister, userProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  //for password visibility
  const [passwordVisible, setPasswordVisible] = useState(true);

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  // registration function
  //images hosting to imgbb
  const image_hosting_api =
    "https://api.imgbb.com/1/upload?key=bd58c2cacfaf8bbacf4ee63a9bafe25c";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    //image upload and getting url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    // console.log(data);
    userRegister(data.email, data.password)
      .then((response) => {
        // console.log(response.user);
        const imageUrl = res.data.data.display_url;
        userProfile(data.name, imageUrl)
          .then(() => {
            Swal.fire({
              title: "Admin Logged In Successfully!",
              timer: 2000,
              color: "#002172",
              showConfirmButton: false,
              icon: "success",
            });
            // window.location.href = "/dashboard/profile";
            navigate("/");
          })
          .catch();
      })
      .catch((err) => {
        Swal.fire({
          title: err.code,
          timer: 2000,
          color: "#002172",
          showConfirmButton: false,
          icon: "error",
        });
      });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-col items-center justify-center h-screen px-4">
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
              <div className="lg:flex 2xl:block gap-4">
                <div className="mb-3">
                  <label className="inline-block mb-2">Name</label>
                  <input
                    required
                    type="text"
                    className="border border-gray-300 text-gray-900 rounded focus:ring-[#002172] focus:border-[#002172] block w-full p-2 px-3 disabled:opacity-50 disabled:pointer-events-none"
                    name="name"
                    placeholder="Name"
                    {...register("name")}
                  />
                </div>
                {/* email */}
                <div className="mb-3">
                  <label className="inline-block mb-2">Email</label>
                  <input
                    required
                    type="email"
                    className="border border-gray-300 text-gray-900 rounded focus:ring-[#002172] focus:border-[#002172] block w-full p-2 px-3 disabled:opacity-50 disabled:pointer-events-none"
                    name="email"
                    placeholder="Email address here"
                    {...register("email")}
                  />
                </div>
              </div>
              {/* Image */}
              <div className="mb-3">
                <label className="inline-block mb-2">Image URL</label>
                {/*  */}
                <input
                  {...register("image", { required: true })}
                  type="file"
                  className="border border-gray-300 text-gray-900 rounded focus:ring-[#002172] focus:border-[#002172] block w-full p-2 px-3 disabled:opacity-50 disabled:pointer-events-none"
                />
                {/*  */}
              </div>
              {/* password */}
              <div className="mb-5">
                <label className="inline-block mb-2">Password</label>
                <input
                  required
                  type={passwordVisible ? "text" : "password"}
                  className="border border-gray-300 text-gray-900 rounded focus:ring-[#002172] focus:border-[#002172] w-full p-2 px-3 disabled:opacity-50 disabled:pointer-events-none relative"
                  name="password"
                  placeholder="**************"
                  {...register("password", {
                    minLength: 6,
                    pattern: /^(?=.*[A-Z]).{6,}$/i,
                  })}
                />
                <span
                  className="cursor-pointer text-xl absolute -ml-8 mt-2"
                  onClick={handleTogglePassword}
                >
                  {passwordVisible ? <IoMdEye /> : <IoMdEyeOff />}
                </span>
                {errors.password?.type === "minLength" && (
                  <span className="text-red-700">
                    Password length should be 6 characters.
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className=" text-red-700">
                    Password should contain at least one Capital letter.
                  </span>
                )}
              </div>
              <div>
                {/* button */}
                <div className="grid">
                  <button
                    type="submit"
                    className="btn bg-[#002172] text-white border-[#002172] hover:bg-[#ec3323] hover:border-[#ec3323] active:bg-[#002172] active:border-[#002172] focus:outline-none focus:ring-4 focus:ring-indigo-300"
                  >
                    Create Admin Account
                  </button>
                </div>
                <div className="md:flex md:justify-between mt-4">
                  <div className="mb-2 mb-md-0">
                    Already member?
                    <Link
                      to="/login"
                      className="text-[#002172] hover:text-[#ec3323]"
                    >
                      Login
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
      {/*  */}
    </div>
  );
};

export default Register;
