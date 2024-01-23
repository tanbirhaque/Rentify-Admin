const Register = () => {
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
              <p className="mb-6">Please enter your user information.</p>
            </div>
            {/* form */}
            <form>
              {/* username */}
              <div className="lg:flex 2xl:block gap-4">
                <div className="mb-3">
                  <label htmlFor="username" className="inline-block mb-2">
                    User Name
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="border border-gray-300 text-gray-900 rounded focus:ring-[#002172] focus:border-[#002172] block w-full p-2 px-3 disabled:opacity-50 disabled:pointer-events-none"
                    name="username"
                    placeholder="User Name"
                    required
                  />
                </div>
                {/* email */}
                <div className="mb-3">
                  <label htmlFor="email" className="inline-block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border border-gray-300 text-gray-900 rounded focus:ring-[#002172] focus:border-[#002172] block w-full p-2 px-3 disabled:opacity-50 disabled:pointer-events-none"
                    name="email"
                    placeholder="Email address here"
                    required
                  />
                </div>
              </div>
              {/* password */}
              <div className="mb-3">
                <label htmlFor="password" className="inline-block mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="border border-gray-300 text-gray-900 rounded focus:ring-[#002172] focus:border-[#002172] block w-full p-2 px-3 disabled:opacity-50 disabled:pointer-events-none"
                  name="password"
                  placeholder="**************"
                  required
                />
              </div>
              {/* password */}
              <div className="mb-5">
                <label htmlFor="confirm-password" className="inline-block mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  className="border border-gray-300 text-gray-900 rounded focus:ring-[#002172] focus:border-[#002172] block w-full p-2 px-3 disabled:opacity-50 disabled:pointer-events-none"
                  name="password"
                  placeholder="**************"
                  required
                />
              </div>
              {/* checkbox */}
              <div className="mb-5">
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    className="mr-1 mt-1 w-4 h-4 text-[#002172] bg-white border-gray-300 rounded focus:ring-[#002172] focus:outline-none focus:ring-2"
                    id="agreeCheck"
                  />
                  <label className="inline-block" htmlFor="agreeCheck">
                    <span>
                      I agree to the
                      <a
                        href="#!"
                        className="text-[#002172] hover:text-[#002172]"
                      >
                        Terms of Service
                      </a>
                      and
                      <a
                        href="#!"
                        className="text-[#002172] hover:text-[#002172]"
                      >
                        Privacy Policy.
                      </a>
                    </span>
                  </label>
                </div>
              </div>
              <div>
                {/* button */}
                <div className="grid">
                  <button
                    type="submit"
                    className="btn bg-[#002172] text-white border-[#002172] hover:bg-[#002172] hover:border-[#002172] active:bg-[#002172] active:border-[#002172] focus:outline-none focus:ring-4 focus:ring-indigo-300"
                  >
                    Create Free Account
                  </button>
                </div>
                <div className="md:flex md:justify-between mt-4">
                  <div className="mb-2 mb-md-0">
                    Already member?
                    <a
                      href="sign-in.html"
                      className="text-[#002172] hover:text-[#002172]"
                    >
                      Login
                    </a>
                  </div>
                  <div>
                    <a
                      href="forget-password.html"
                      className="text-[#002172] hover:text-[#002172]"
                    >
                      Forgot your password?
                    </a>
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
