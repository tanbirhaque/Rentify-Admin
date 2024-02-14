import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const BlogTable = ({ blog, refetch }) => {
  const { _id, img, title, date, details } = blog || {};
  const smallId = _id.slice(0, 6);
  const axiosSecure = useAxiosSecure();
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
        axiosSecure.delete(`/blogs/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              position: "top",
              icon: "success",
              title: `Blog deleted successfully!!`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      } else if (result.isDenied) {
        Swal.fire(`Blog is not deleted.`, "", "info");
      }
    });
  };

  return (
    <>
      <tr className="flex flex-col md:flex-row justify-between gap-10">
        <td>
          <div className="w-60 flex items-center gap-5">
            <div className="avatar">
              <div className="w-20 rounded-xl">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-[#3B4CB8] text-xs">#{smallId}</p>
              <p className="font-semibold text-base">{title}</p>
              <p className="text-[#7E7E7E] text-xs">{date}</p>
            </div>
          </div>
        </td>
        <td>
          <p>{details}</p>
        </td>
        {/* <td>
          <p>{email}</p>
        </td> */}
        <td>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-outline text-red-600 text-lg font-medium hover:bg-red-600 hover:text-white hover:border-none rounded-lg"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default BlogTable;
