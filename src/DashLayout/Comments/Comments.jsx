//component added by "Fahima"

import useComments from "../../Hooks/useComments";
import CommentsTable from "./CommentsTable";

const Comments = () => {
  //fetch reviews
  const [comments, refetch] = useComments();

  return (
    <>
      <h1 className="text-center font-bold text-3xl my-3">
        Comments from Users
      </h1>
      {/* <div className="overflow-x-auto"> */}
      <table className="table">
        {/* head */}
        {/* <thead className="font-semibold text-lg text-[#002172]">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Comments</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead> */}
        <tbody>
          {comments.map((comment) => (
            <CommentsTable
              key={comment._id}
              comment={comment}
              refetch={refetch}
            />
          ))}
        </tbody>
      </table>
      {/* </div> */}
    </>
  );
};

export default Comments;
