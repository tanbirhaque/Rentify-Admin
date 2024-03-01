//component added by "Fahima"

import useReviews from "../../../Hooks/useReviews";
import Header from "../../DashShared/Header/Header";
import ReviewsTable from "./ReviewsTable";

const Reviews = () => {
  //fetch reviews
  const [reviews, refetch] = useReviews();
  console.log(reviews);
  return (
    <div className="p-5 bg-[#f5f5f5] min-h-[90vh] space-y-5">
      <Header heading={"Reviews from Users"} title={"Reviews"} />
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
