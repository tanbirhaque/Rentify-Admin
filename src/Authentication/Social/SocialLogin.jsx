import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const handleLogin = (data) => {
    data()
      .then((response) => {
        console.log(response.user);
        Swal.fire({
          title: "User logged in with Google successfully!!!",
          timer: 2000,
          color: "#002172",
          showConfirmButton: false,
          icon: "success",
        });
      })
      .catch(() => {});
  };
  return (
    <>
      {/* google button */}
      <button
        onClick={() => handleLogin(googleLogin)}
        className="btn bg-[#ec3323] text-white w-full hover:bg-[#002172]"
      >
        <div className="flex gap-3">
          <img
            className=" w-[29px] h-[29px] rounded-full"
            src="https://i.ibb.co/dMy26rb/g.png"
          />
          <p className="text-center mt-2">SignUp with Google</p>
        </div>
      </button>
    </>
  );
};

export default SocialLogin;
