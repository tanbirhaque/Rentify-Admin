import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import SocialLogin from "../Social/SocialLogin";

const Register = () => {
  const { userRegister, userProfile } = useContext(AuthContext);
  // registration function
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(password);

    // regex for special character
    const special = /[!@#$%^&*()_+\-=[\]{};:',.<>?~]/g;
    if (password.length < 6) {
      toast.error("Password should be 6 characters long.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password should contain one Upper case character.");
      return;
    } else if (!special.test(password)) {
      toast.error("Password should contain one special character.");
      return;
    }

    userRegister(email, password)
      .then((response) => {
        // toast.success("User created successfully!!!");
        console.log(response.user);
        userProfile(name, image)
          .then((response) => {
            Swal.fire({
              title: "User created successfully!",
              timer: 2000,
              color: "#002172",
              showConfirmButton: false,
              icon: "success",
            });
          })
          .catch((error) => {
            toast.error(error.code);
          });
      })
      .catch((error) => {
        toast.error(error.code);
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
            <form onSubmit={handleRegister}>
              {/* username */}
              <div className="lg:flex 2xl:block gap-4">
                <div className="mb-3">
                  <label className="inline-block mb-2">Name</label>
                  <input
                    type="text"
                    className="border border-gray-300 text-gray-900 rounded focus:ring-[#002172] focus:border-[#002172] block w-full p-2 px-3 disabled:opacity-50 disabled:pointer-events-none"
                    name="name"
                    placeholder="Name"
                    required
                  />
                </div>
                {/* email */}
                <div className="mb-3">
                  <label className="inline-block mb-2">Email</label>
                  <input
                    type="email"
                    className="border border-gray-300 text-gray-900 rounded focus:ring-[#002172] focus:border-[#002172] block w-full p-2 px-3 disabled:opacity-50 disabled:pointer-events-none"
                    name="email"
                    placeholder="Email address here"
                    required
                  />
                </div>
              </div>
              {/* Image */}
              <div className="mb-3">
                <label className="inline-block mb-2">Image URL</label>
                <input
                  type="url"
                  className="border border-gray-300 text-gray-900 rounded focus:ring-[#002172] focus:border-[#002172] block w-full p-2 px-3 disabled:opacity-50 disabled:pointer-events-none"
                  name="image"
                  placeholder="Image URL here"
                  required
                />
              </div>
              {/* password */}
              <div className="mb-5">
                <label className="inline-block mb-2">Password</label>
                <input
                  type="password"
                  className="border border-gray-300 text-gray-900 rounded focus:ring-[#002172] focus:border-[#002172] block w-full p-2 px-3 disabled:opacity-50 disabled:pointer-events-none"
                  name="password"
                  placeholder="**************"
                  required
                />
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
              <SocialLogin />
            </form>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Register;
