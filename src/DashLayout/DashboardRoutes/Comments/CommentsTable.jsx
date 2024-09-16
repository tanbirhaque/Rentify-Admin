//component added by "Fahima"

import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";

const CommentsTable = ({ comment, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const { _id, name, email, img, message, date, blogName } = comment || {};

  const handleDelete = (id) => {
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
      <div className="max-w-full grid grid-cols-1 lg:grid-cols-4 border-2 p-5 bg-[#FFFFFF] rounded-lg gap-2 lg:gap-3">
        <div className="max-w-full">
          <div className="min-w-full flex items-center gap-5">
            <div className="avatar">
              <div className="w-16 rounded-xl">
                <img src={img} alt="image of the blog" />
              </div>
            </div>
            <div className="w-full flex flex-col">
              <div className="flex justify-between">
                <p className="text-cyan-700 text-xs">#{smallId}</p>
                <MdDelete
                  onClick={() => handleDelete(_id)}
                  className="text-red-600 text-xl ml-10 sm:hidden"
                />
              </div>
              <p className="font-semibold text-sm md:text-base">{name}</p>
              <p className="text-[#7E7E7E] text-xs">{date}</p>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <p className="text-sm md:text-base mt-1.5 lg:mt-0 text-cyan-600">
            <span className="font-bold">Blog Name:</span> {blogName}
          </p>
          <p className="text-sm md:text-base mt-1.5 lg:mt-0">{message}</p>
        </div>
        <div className="hidden sm:flex justify-center items-center sm:justify-end">
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-outline text-red-600 text-sm font-medium hover:bg-red-600 hover:text-white hover:border-none rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default CommentsTable;
