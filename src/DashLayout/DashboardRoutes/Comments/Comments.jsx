//component added by "Fahima"

import useComments from "../../../Hooks/useComments";
import Header from "../../DashShared/Header/Header";
import CommentsTable from "./CommentsTable";

const Comments = () => {
  //fetch comments
  const [comments, refetch] = useComments();

  return (
    <div className="p-5 bg-[#f5f5f5] min-h-[90vh] space-y-5">
      <Header heading={"Comments From blogs"} title={"Comments"} />

      <div className="shadow-lg rounded-lg">
        <div className="border-2 p-5 bg-[#FFFFFF] space-y-5 rounded-md">
          {comments.map((comment) => (
            <CommentsTable
              key={comment._id}
              comment={comment}
              refetch={refetch}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
