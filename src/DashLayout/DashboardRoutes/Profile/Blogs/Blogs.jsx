import useBlogs from "../../../../Hooks/useBlogs";
import Header from "../../../DashShared/Header/Header";
import BlogTable from "./BlogTable";

const Blogs = () => {
  const [blogs, refetch] = useBlogs();
  return (
    <div className="p-5 bg-[#f5f5f5] min-h-[90vh] space-y-5">
      <Header heading={"Blogs from Users"} title={"Blogs"} />
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="table">
          <tbody>
            {blogs.map((blog) => (
              <BlogTable blog={blog} key={blog._id} refetch={refetch} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Blogs;
