//component added by "Fahima"

import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Rating } from "react-simple-star-rating";
import { MdOutlineDeleteOutline, MdDelete } from "react-icons/md";

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
      <div className="flex flex-col md:flex-row justify-between border-2  p-5 bg-[#FFFFFF] rounded-lg ">
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
                <div>
                  <h3 className="text-sm font-bold">{reviewerName}</h3>
                  <p className="text-xs text-gray-400">{date}</p>
                </div>
              
              </div>
            </div>
            {/* rating */}
            {/* <Rating start={5} /> */}
          </div>
          {/* review details */}
          <div className="my-3">
            <p className="text-xs text-cyan-500 font-bold"># {propertyTitle}</p>
            <p className="text-gray-600 text-sm md:pr-5">{reviewText} </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => handleDelete(_id)}
            className="text-red-600 font-medium text-4xl border-t-2 md:border-t-0 md:border-l-2 w-full flex justify-center md:inline-block pt-1.5"
          >
            <MdOutlineDeleteOutline />
          </button>
        </div>
      </div>
    </>
  );
};

export default ReviewsTable;
