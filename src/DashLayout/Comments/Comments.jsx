//component added by "Fahima"

import useComments from "../../Hooks/useComments";
import CommentsTable from "./CommentsTable";

const Comments = () => {
  //fetch comments
  const [comments, refetch] = useComments();

  return (
    <div className="p-5 bg-[#f5f5f5] h-screen space-y-5">
      <div className="shadow-lg bg-[#ffffff] rounded-lg p-5 space-y-2">
        <h1 className="font-bold text-xl text-[#002172]">
          Comments from Users
        </h1>
        <p className="text-xs font-medium">
          Dashboard / <span className="text-[#ec3323]">Comments</span>
        </p>
      </div>

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
    </div>
  );
};

export default Comments;
