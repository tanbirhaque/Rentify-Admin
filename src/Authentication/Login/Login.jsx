import { Link } from "react-router-dom";

const Login = () => {
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
            <form>
              {/* username */}
              <div className="mb-3">
                <label className="inline-block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="border border-gray-300 text-gray-900 rounded focus:ring-[#002172] focus:border-[#002172] block w-full p-2 px-3 disabled:opacity-50 disabled:pointer-events-none"
                  name="email"
                  placeholder="Email address here"
                  required
                />
              </div>
              {/* password */}
              <div className="mb-5">
                <label className="inline-block mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="border border-gray-300 text-gray-900 rounded focus:ring-[#002172] focus:border-[#002172] block w-full p-2 px-3 disabled:opacity-50 disabled:pointer-events-none"
                  name="password"
                  placeholder="**************"
                  required
                />
              </div>
              {/* checkbox */}
              <div className="lg:flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#002172] bg-white border-gray-300 rounded focus:ring-[#002172] focus:outline-none focus:ring-2"
                    id="rememberme"
                  />
                  <label className="inline-block ms-2" htmlFor="rememberme">
                    Remember me
                  </label>
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

      {/*  */}
    </div>
  );
};

export default Login;
