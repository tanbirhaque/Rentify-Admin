//component added by "Fahima"

import useReviews from "../../../Hooks/useReviews";
import Header from "../../DashShared/Header/Header";
import ReviewsTable from "./ReviewsTable";

const Reviews = () => {
  //fetch reviews
  const [reviews, refetch] = useReviews();
  // console.log(reviews);
  return (
    <div className="pt-5 md:p-5 bg-[#f5f5f5] min-h-screen space-y-5">
      <Header heading={"Reviews from Users"} title={"Reviews"} />
      <div className="shadow-lg rounded-lg">
        <div className="px-3 md:p-10 md:bg-[#FFFFFF] space-y-5 rounded-md">
          {reviews.map((review) => (
            <ReviewsTable key={review._id} review={review} refetch={refetch} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
