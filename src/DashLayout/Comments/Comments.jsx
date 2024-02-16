//component added by "Fahima"

import useComments from "../../Hooks/useComments";
import CommentsTable from "./CommentsTable";

const Comments = () => {
  //fetch comments
  const [comments, refetch] = useComments();

  return (
    <>
      <h1 className="text-center font-bold text-3xl my-3">
        Comments from Users
      </h1>
      <table className="table">
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
    </>
  );
};

export default Comments;
