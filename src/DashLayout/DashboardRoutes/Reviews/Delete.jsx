import { MdOutlineDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Delete = (id, refetch) => {
  const axiosSecure = useAxiosSecure();
  //delete function
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: `Do you want to delete the Review?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */

      if (result.isConfirmed) {
        axiosSecure.delete(`/reviews/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              position: "top",
              icon: "success",
              title: `Review deleted successfully!!`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      } else if (result.isDenied) {
        Swal.fire(`Review is not deleted.`, "", "info");
      }
    });
  };
  return (
    <>
      <button
        onClick={() => handleDelete(_id)}
        className="text-red-600 font-medium text-4xl border-l-2"
        // className="btn btn-outline text-red-600 font-medium hover:bg-red-600 hover:text-white hover:border-none rounded-lg text-lg"
      >
        {/* Delete */}
        <MdOutlineDeleteOutline />
      </button>
    </>
  );
};

export default Delete;
