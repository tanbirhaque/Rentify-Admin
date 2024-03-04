//component added by "Fahima"

import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Rating } from "react-simple-star-rating";
import { MdOutlineDeleteOutline } from "react-icons/md";

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
  // const smallId = propertyId.slice(0, 6);

  return (
    <>
      <div className="flex justify-between border-2 p-5 bg-[#FFFFFF] rounded-lg ">
        <div>
          <div className="flex justify-between">
            {/* reviewer details */}
            <div className="flex gap-2">
              <img
                src={reviewerImage}
                alt={`image of ${reviewerName}`}
                className="rounded-full w-10 h-10"
              />
              <div>
                <h3 className="text-sm font-bold">{reviewerName}</h3>
                <p className="text-xs text-gray-400">{date}</p>
              </div>
            </div>
            {/* rating */}
            {/* <Rating start={5} /> */}
          </div>
          {/* review details */}
          <div className="my-3">
            <p className="text-xs text-sky-500">#{propertyTitle} </p>
            <p className="text-gray-600 text-sm">{reviewText} </p>
          </div>
        </div>
        <button
          onClick={() => handleDelete(_id)}
          className="text-red-600 font-medium text-4xl border-l-2"
          // className="btn btn-outline text-red-600 font-medium hover:bg-red-600 hover:text-white hover:border-none rounded-lg text-lg"
        >
          {/* Delete */}
          <MdOutlineDeleteOutline />
        </button>
      </div>
    </>
  );
};

export default ReviewsTable;
