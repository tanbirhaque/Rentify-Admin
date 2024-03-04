//component added by "Fahima"

import useComments from "../../../Hooks/useComments";
import Header from "../../DashShared/Header/Header";
import CommentsTable from "./CommentsTable";

const Comments = () => {
  //fetch comments
  const [comments, refetch] = useComments();

  return (
    <div className="p-5 bg-[#f5f5f5] min-h-[90vh] space-y-5">
      <Header heading={"Comments From Users"} title={"Comments"} />
      {/* <div className="overflow-x-auto shadow-lg rounded-lg"> */}
      <div className="shadow-lg rounded-lg">
        {/* <table className="table"> */}
        {/* <tbody> */}
        <div>
          {comments.map((comment) => (
            <CommentsTable
              key={comment._id}
              comment={comment}
              refetch={refetch}
            />
          ))}
        </div>
        {/* </tbody> */}
        {/* </table> */}
      </div>
    </div>
  );
};

export default Comments;
