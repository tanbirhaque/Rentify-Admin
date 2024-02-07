//component added by "Fahima"

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const RoleChangeTable = ({ item, user,refetch }) => {
  const { _id, name, email, image, role } = item || {};
  // const { _id, name, email, image, role } = user || {};
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
        axiosSecure.patch(`/users/${id}`).then((res) => {
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
        });
      } else if (result.isDenied) {
        Swal.fire(`${name} is not an owner.`, "", "info");
      }
    });
  };
  return (
    <>
      {/* row 1 */}
      {/* <tr className="space-y-5">
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
            </div>
          </div>
        </td>
        <td>{email}</td>
        <td>{role}</td>
        <th>
          {role === "owner" ? (
            <p className="text-green-700 text-xl">Owner</p>
          ) : (
            <button
              onClick={() => handleMakeOwner(_id)}
              className="btn btn-ghost bg-green-800 text-white btn-xs"
            >
              Make Owner
            </button>
          )}
        </th>
      </tr> */}
      {/* row-2  */}
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-20 h-20">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>{name} </td>
        <td>{email}</td>
        <td>{role}</td>
        {/* <td>Pending</td> */}
        <td>
          <th>
            {role === "owner" ? (
              <p className="text-green-700 text-xl">Owner</p>
            ) : (
              <button
                onClick={() => handleMakeOwner(_id)}
                className="btn btn-ghost bg-green-800 text-white btn-xs"
              >
                Make Owner
              </button>
            )}
          </th>
        </td>
      </tr>
    </>
  );
};

export default RoleChangeTable;
