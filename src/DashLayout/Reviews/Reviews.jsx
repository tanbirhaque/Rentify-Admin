//component added by "Fahima"

import useReviews from "../../Hooks/useReviews";
import ReviewsTable from "./ReviewsTable";

const Reviews = () => {
  //fetch reviews
  const [reviews, refetch] = useReviews();
  console.log(reviews);
  return (
    <>
      <h1 className="text-center font-bold text-3xl my-3">
        Reviews from Users
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
         
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
    </>
  );
};

export default Reviews;
