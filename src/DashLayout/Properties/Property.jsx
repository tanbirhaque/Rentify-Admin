import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Property = ({ property, refetch }) => {
  const { _id, property_info } = property || {};
  const { owner_details, property_img, property_title, verify_status } =
    property_info || {};
  const smallId = _id.slice(0, 6);

  const axiosSecure = useAxiosSecure();

  const accept = {
    id: _id,
    propertyStatus: `verified`,
  };

  const decline = {
    id: _id,
    propertyStatus: `declined`,
  };

  const handlePatch = (patchObject) => {
    // console.log(patchObject);

    Swal.fire({
      title: "Do you want to accept the property request?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/verification`, patchObject)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              console.log(res.data);
              refetch();
              {
                patchObject?.propertyStatus === "verified"
                  ? Swal.fire({
                      position: "top",
                      icon: "success",
                      title: "Property request verified!!",
                      showConfirmButton: false,
                      timer: 1500,
                    })
                  : Swal.fire({
                      position: "top",
                      icon: "success",
                      title: "Property request declined!!",
                      showConfirmButton: false,
                      timer: 1500,
                    });
              }
            }
          })
          .catch((error) => {
            // Handle error if PATCH request fails
            console.error(error);
          });
        // axiosSecure.patch(`/ownerRequest/${id}`).then();
      } else if (result.isDenied) {
        Swal.fire(`Property Request not accepted`, "", "info");
      }
    });
  };

  return (
    <>
      <tr className="flex flex-col md:flex-row justify-between gap-10">
        <td className="my-5">
          <div className="w-60 flex items-center gap-5">
            <div className="avatar">
              <div className="w-20 rounded-xl">
                <img src={property_img} alt="image of the property" />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-[#3B4CB8] text-xs">#{smallId}</p>
              <p className="font-semibold text-base">{property_title}</p>
            </div>
          </div>
        </td>
        {/* owner details */}
        <div className="w-60 flex items-center gap-5">
          <div className="flex flex-col">
            <p className="text-[#3B4CB8] text-sm">
              {owner_details?.owner_name}
            </p>
            <p className="font-semibold text-base">
              {owner_details?.owner_email}
            </p>
          </div>
        </div>
        <td>
          {verify_status === "pending" && (
            <>
              <div className="flex gap-2">
                {/* button to accept */}
                <button
                  onClick={() => handlePatch(accept)}
                  className="btn btn-outline text-green-600 text-lg font-medium hover:bg-green-600 hover:text-white hover:border-none rounded-lg"
                >
                  Accept
                </button>
                {/* button to decline */}
                <button
                  onClick={() => handlePatch(decline)}
                  className="btn btn-outline text-red-600 text-lg font-medium hover:bg-red-600 hover:text-white hover:border-none rounded-lg"
                >
                  Decline
                </button>
              </div>
            </>
          )}
        </td>
        {verify_status === "verified" && (
          <td>
            <p className="text-green-800 font-semibold text-lg text-center">
              Verified
            </p>
          </td>
        )}
        {verify_status === "declined" && (
          <td>
            <p className="text-red-700 font-semibold text-lg text-center">
              Declined
            </p>
          </td>
        )}
      </tr>
    </>
  );
};

export default Property;
