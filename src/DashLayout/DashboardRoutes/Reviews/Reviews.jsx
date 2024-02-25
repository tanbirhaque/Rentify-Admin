//component added by "Fahima"


import useReviews from "../../../Hooks/useReviews";
import ReviewsTable from "./ReviewsTable";

const Reviews = () => {
  //fetch reviews
  const [reviews, refetch] = useReviews();
  console.log(reviews);
  return (
    <div className="p-5 bg-[#f5f5f5] min-h-[90vh] space-y-5">
      <div className="shadow-lg bg-[#ffffff] rounded-lg p-5 space-y-2">
        <h1 className="font-bold text-xl text-[#002172]">Reviews from Users</h1>
        <p className="text-xs font-medium">
          Dashboard / <span className="text-[#ec3323]">Reviews</span>
        </p>
      </div>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="table ">
          <tbody>
            {reviews.map((review) => (
              <ReviewsTable
                key={review._id}
                review={review}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reviews;
