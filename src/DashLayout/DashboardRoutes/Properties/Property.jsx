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
      <tr className="text-base min-w-full">
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-20 h-20">
                <img src={property_img} alt="property-image" />
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
              className={`dropdown-content menu menu-sm -left-12 py-0   px-0 w-32  rounded-lg bg-[#ffffff]  text-center  ${
                dropdownVisible ? "show" : ""
              }`}
            >
              {/* Dropdown options */}
              <div className="dropdown">
                <button onClick={toggleDropdown} className="dropbtn">
                  <HiOutlineDotsHorizontal />
                </button>
                {/* Dropdown content */}
                <div
                  className={`dropdown-content menu menu-sm -left-12 py-0   px-0 w-32  rounded-lg bg-[#ffffff]  text-center  ${
                    dropdownVisible ? "show" : ""
                  }`}
                >
                  {/* Dropdown options */}
                  <ul>
                    <li className="hover:bg-[#002172] hover:rounded-t-md transition-all ease-out duration-300 hover:text-white">
                      <button
                        onClick={() => handlePatch(accept)}
                        disabled={buttonDisabled}
                      >
                        Accept
                      </button>
                    </li>
                    <li className="hover:bg-[#002172] hover:rounded-b-md transition-all ease-out duration-300 hover:text-white">
                      <button
                        onClick={() => handlePatch(decline)}
                        disabled={buttonDisabled}
                      >
                        Decline
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Property;
