//component added by "Fahima"

import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Rating from "react-rating";

const ReviewsTable = ({ review, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const {
    _id,
    propertyId,
    reviewerEmail,
    reviewerName,
    reviewerImage,
    reviewText,
    reviewImage,
    reviewRating,
    propertyTitle,
    date,
  } = review || {};
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
  const smallId = propertyId.slice(0, 6);

  return (
    <>
      <tr className="flex flex-col md:flex-row justify-between">
        <td>
          <div className="w-52 flex items-center gap-5">
            <div className="avatar">
              <div className="w-20 rounded-xl">
                <img src={reviewerImage} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-[#3B4CB8] text-xs">#{smallId}</p>
              <p className="font-semibold text-base">{reviewerName}</p>
              <p className="text-[#7E7E7E] text-xs">{date}</p>
            </div>
          </div>
        </td>
        <td>
          <div className="flex flex-col text-lg">
            <p className=" font-bold text-xl">
              Property Title:{" "}
              <span className="text-teal-600">{propertyTitle}</span>
            </p>
            <p className="text-left">
              <span className="font-bold">Review:</span> {reviewText}
            </p>
          </div>
        </td>
        <td>
          <Rating
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
            initialRating={reviewRating}
          />
        </td>
        <td>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-outline text-red-600 font-medium hover:bg-red-600 hover:text-white hover:border-none rounded-lg text-lg"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default ReviewsTable;
