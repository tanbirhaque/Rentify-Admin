import useBlogs from "../../../../Hooks/useBlogs";
import BlogTable from "./BlogTable";

const Blogs = () => {
  const [blogs, refetch] = useBlogs();
  return (
    <div className="p-5 bg-[#f5f5f5] h-screen space-y-5">
      <div className="shadow-lg bg-[#ffffff] rounded-lg p-5 space-y-2">
        <h1 className="font-bold text-xl text-[#002172]">Blogs from Users</h1>
        <p className="text-xs font-medium">
          Dashboard / <span className="text-[#ec3323]">Blogs</span>
        </p>
      </div>

      <table className="table">
        <tbody>
          {blogs.map((blog) => (
            <BlogTable blog={blog} key={blog._id} refetch={refetch} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Blogs;
