//component added by "Fahima"

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5 mt-20">
      <img src="https://i.ibb.co/DVpjDHx/404.png" alt="error-page" />
      <h1 className="text-4xl font-semibold">Oops! Page Not Found</h1>
      <p className="text-[#666666] text-base text-center">
        The page you are looking for might have been removed had its name <br />
        changed or is temporarily unavailable.
      </p>
      <Link to="/dashboard">
        <button className="btn bg-[#002172] py-4 px-9 text-white hover:bg-[#ec3323]">
          Back To Dashboard
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
