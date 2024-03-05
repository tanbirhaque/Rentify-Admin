import useBlogs from "../../../../Hooks/useBlogs";
import Header from "../../../DashShared/Header/Header";
import BlogTable from "./BlogTable";

const Blogs = () => {
  const [blogs, refetch] = useBlogs();
  return (
    <div className="p-5 bg-[#f5f5f5] min-h-[90vh] space-y-5">
      <Header heading={"Blogs From Users"} title={"Blogs"} />
      <div className=" shadow-lg rounded-lg">
         <div className="border-2 p-5 bg-[#FFFFFF] space-y-5 rounded-md">
          {blogs.map((blog) => (
            <BlogTable blog={blog} key={blog._id} refetch={refetch} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;


