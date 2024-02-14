import useBlogs from "../../../../Hooks/useBlogs";
import BlogTable from "./BlogTable";

const Blogs = () => {
  const [blogs,refetch] = useBlogs();
  return (
    <div>
      <h1 className="text-center font-bold text-3xl my-3">Blogs from Users</h1>
      <table className="table">
        <tbody>
          {blogs.map((blog) => (
            <BlogTable blog={blog} key={blog._id} refetch={refetch}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Blogs;
