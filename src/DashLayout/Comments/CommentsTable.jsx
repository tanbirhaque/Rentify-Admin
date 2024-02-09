//component added by "Fahima"

import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const CommentsTable = ({ comment, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const { _id, name, email, img, message, date } = comment || {};
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
  const smallId = _id.slice(0, 6);
  return (
    <>
      <tr className="flex flex-col md:flex-row justify-between">
        <td>
          <div className="w-[270px] flex items-center gap-5">
            <div className="avatar">
              <div className="w-20 rounded-xl">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-[#3B4CB8] text-xs">#{smallId}</p>
              <p className="font-semibold text-base">{name}</p>
              <p className="text-[#7E7E7E] text-xs">{date}</p>
            </div>
          </div>
        </td>
        <td>
          <p className="text-left">{message}</p>
        </td>
        {/* <td>
          <p>{email}</p>
        </td> */}
        <td>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-outline text-red-600 font-medium hover:bg-red-600 hover:text-white hover:border-none rounded-lg"
          >
            Delete
          </button>

        </td>
      </tr>
    </>
  );
};

export default CommentsTable;
