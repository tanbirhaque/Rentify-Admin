//component added by "Fahima"

import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const Property = ({ property, refetch }) => {
  const { _id, property_info } = property || {};
  const {
    owner_details,
    property_img,
    property_title,
    property_details,
    verify_status,
    property_location,
    property_category,
  } = property_info || {};
  const smallId = _id.slice(0, 6);

  const axiosSecure = useAxiosSecure();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible((prevState) => !prevState);
  };

  const setAccept = (id) => {
    axiosSecure
      .put(`/accept/${id}`)
      .then((res) => {
        console.log("hi", res);
        refetch();
        setButtonDisabled(true);
      })
      .catch((error) =>
        console.error("Error updating verification status:", error)
      );
  };

  const setReject = (id) => {
    axiosSecure
      .put(`/reject/${id}`)
      .then((res) => {
        console.log(res);
        refetch();
        setButtonDisabled(true);
      })
      .catch((error) =>
        console.error("Error updating verification status:", error)
      );
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
              // console.log(res.data);
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
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div>
              <img
                className="w-[100px] h-[75px] rounded"
                src={property_img}
                alt="property-image"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{property_title}</div>
          </div>
        </div>
      </td>
      <td>{property_location.address.street}</td>
      <td>{owner_details.owner_name}</td>
      <td>$ {property_details.property_price}</td>
      <td>{property_category}</td>
      <td>
        {/* Dropdown button */}
        <div className="dropdown">
          <button onClick={toggleDropdown} className="dropbtn">
            <HiOutlineDotsHorizontal />
          </button>
          {/* Dropdown content */}
          <div
            className={`dropdown-content menu menu-sm -left-12 py-0   px-0 w-32  rounded-lg bg-[#ffffff] shadow-md text-center  ${
              dropdownVisible ? "show" : ""
            }`}
          >
            {/* Dropdown options */}
            <ul>
              <li className="hover:bg-[#002172] hover:rounded-t-md transition-all ease-out duration-300 hover:text-white">
                <button
                  onClick={() => setAccept(_id)}
                  disabled={buttonDisabled}
                >
                  Accept
                </button>
              </li>
              <li className="hover:bg-[#002172] hover:rounded-b-md transition-all ease-out duration-300 hover:text-white">
                <button
                  onClick={() => setReject(_id)}
                  disabled={buttonDisabled}
                >
                  Reject
                </button>
              </li>
            </ul>
          </div>
        </div>
      </td>
    </>
  );
};

export default Property;
