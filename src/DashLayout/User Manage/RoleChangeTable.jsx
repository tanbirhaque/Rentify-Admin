//component added by "Fahima"

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const RoleChangeTable = ({ item, refetch }) => {
  const { _id, name, email, image, role } = item || {};
  const axiosSecure = useAxiosSecure();
  const handleMakeOwner = (id) => {
    // console.log(id);
    Swal.fire({
      title: `Do you want to make ${name} an owner?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Make an Owner",
      denyButtonText: `Don't make an Owner`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/${id}`)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                position: "top",
                icon: "success",
                title: `${name} is now an owner`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => {
            // Handle error if PATCH request fails
            console.error("Error updating user data:", error);
          });
        // axiosSecure.patch(`/ownerRequest/${id}`).then();
      } else if (result.isDenied) {
        Swal.fire(`${name} is not an owner.`, "", "info");
      }
    });
  };
  const handleMakeUser = (id) => {
    Swal.fire({
      position: "top",
      icon: "success",
      title: `Haven't added functionality yet!`,
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <>
      {/* card format */}
      {/* <div className="bg-[#f5f5f5] p-10 grid grid-rows-3"> */}
      <div className="max-w-[360px] h-auto p-6 bg-white shadow-lg rounded-xl space-y-3">
        <div className="flex gap-5">
          <div className="avatar bg-white shadow-lg rounded-lg">
            <div className="w-16">
              <img src={image} className="p-1 rounded-xl" />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-1">
            <p className="text-sm font-bold text-[#000000]">{name}</p>
            <p className="text-[#3b4cb8] text-xs">Developer</p>
          </div>
        </div>
        <p className="text-xs text-[#7e7e7e]">
          Answering guest inquiries, directing phone calls, coordinating travel
          plans, and more.
        </p>
        <div className="text-xs space-y-3 text-left text-[#000000] mt-3">
          <p>
            <span className="text-[#7e7e7e]">Email:</span> {email}
          </p>
          <hr />
          <p>
            <span className="text-[#7e7e7e]">Phone:</span> 1238545644
          </p>
          <hr />
          <p>
            <span className="text-[#7e7e7e]">Location:</span> Indonesia
          </p>
        </div>
        {role === "Owner" ? (
          <button
            onClick={() => handleMakeUser(_id)}
            className="btn btn-sm rounded-lg font-normal bg-[#ff6746] text-white text-xs hover:bg-white hover:text-[#ff6746] hover:border-[#ff6746]"
            style={{ padding: "5.5px 14px" }}
          >
            Remove from Owner
          </button>
        ) : (
          <button
            onClick={() => handleMakeOwner(_id)}
            className="btn btn-sm rounded-lg font-normal bg-[#4ba7dc] text-white text-xs hover:bg-white hover:text-[#4ba7dc] hover:border-[#4ba7dc]"
            style={{ padding: "5.5px 14px" }}
          >
            Make Owner
          </button>
        )}
      </div>
      {/* </div> */}
    </>
  );
};

export default RoleChangeTable;
