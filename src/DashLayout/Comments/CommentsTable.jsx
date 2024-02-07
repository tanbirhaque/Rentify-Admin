//component added by "Fahima"

import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const CommentsTable = ({ comment, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const { _id, name, email, img, message } = comment || {};
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: `Do you want to delete the Comments?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axiosSecure.delete(`/comments/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              position: "top",
              icon: "success",
              title: `Comment deleted successfully!!`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      } else if (result.isDenied) {
        Swal.fire(`Comment is not deleted.`, "", "info");
      }
    });
  };

  return (
    <>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-20 h-20">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>{name} </td>
        <td>{email}</td>
        <td>{message}</td>
        <td>
          <MdDelete
            className="text-4xl text-red-600"
            onClick={() => handleDelete(_id)}
          />
        </td>
      </tr>
    </>
  );
};

export default CommentsTable;
