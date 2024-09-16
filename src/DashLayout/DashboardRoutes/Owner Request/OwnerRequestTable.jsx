//component added by "Fahima"

import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const OwnerRequestTable = ({ item, owner, refetch }) => {
  const {
    _id,
    firstName,
    lastName,
    number,
    ownerEmail,
    ownerImg,
    profession,
    description,
    address,
    ownerStatus,
  } = owner || {};

  const axiosSecure = useAxiosSecure();

  const handlePatch = (info) => {
    const patchInfo = {
      status: `${info.ownerStatus === false ? "owner" : "user"}`,
      email: info.ownerEmail,
    };

    // console.log(patchInfo);
    Swal.fire({
      title: `${
        ownerStatus === true
          ? `Do you want to remove ${firstName} ${lastName} from owner ?`
          : `Do you want to make ${firstName} ${lastName} an owner ?`
      }`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/roleChange`, patchInfo)
          .then((res) => {
            refetch();
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                position: "top",
                icon: "success",
                title: `${firstName} ${lastName} is now an ${
                  ownerStatus === true ? "owner" : "user"
                }`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => {
            // Handle error if PATCH request fails
            console.error("Error updating user data:", error);
          });
      } else if (result.isDenied) {
        Swal.fire(
          `${firstName} ${lastName} is not an ${
            ownerStatus === true ? "owner" : "user"
          }`,
          "",
          "info"
        );
      }
    });
  };

  return (
    <>
      {/* card format */}
      <div className="md:max-w-[360px] h-auto p-6 bg-white shadow-lg rounded-xl space-y-3">
        <div className="flex gap-5">
          <div className="avatar bg-white shadow-lg rounded-lg">
            <div className="w-16">
              <img src={ownerImg} className="p-1 rounded-xl" />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-1">
            <p className="text-sm font-bold text-[#000000]">{`${firstName} ${lastName}`}</p>
            <p className="text-[#3b4cb8] text-xs">{profession}</p>
          </div>
        </div>
        <p className="text-xs text-[#7e7e7e]">{description}</p>
        <div className="text-xs space-y-3 text-left text-[#000000] mt-3">
          <p>
            <span className="text-[#7e7e7e]">Email:</span> {ownerEmail}
          </p>
          <hr />
          <p>
            <span className="text-[#7e7e7e]">Phone:</span> {number}
          </p>
          <hr />
          <p>
            <span className="text-[#7e7e7e]">Location:</span> {address}
          </p>
        </div>
        {ownerStatus === true ? (
          <button
            onClick={() => handlePatch(owner)}
            className="btn btn-sm rounded-lg font-normal bg-[#ff6746] text-white text-xs hover:bg-white hover:text-[#ff6746] hover:border-[#ff6746]"
            style={{ padding: "5.5px 14px" }}
          >
            Remove from Owner
          </button>
        ) : (
          <button
            onClick={() => handlePatch(owner)}
            className="btn btn-sm rounded-lg font-normal bg-[#4ba7dc] text-white text-xs hover:bg-white hover:text-[#4ba7dc] hover:border-[#4ba7dc]"
            style={{ padding: "5.5px 14px" }}
          >
            Make Owner
          </button>
        )}
      </div>
    </>
  );
};

export default OwnerRequestTable;
