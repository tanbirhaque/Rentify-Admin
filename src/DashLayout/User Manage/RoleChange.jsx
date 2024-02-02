import useGetUsers from "../../Hooks/useGetUsers";
import RoleChangeTable from "./RoleChangeTable";

const RoleChange = () => {
  const [users] = useGetUsers();
  console.log(users);
  return (
    <>
      {/* <div>
      <h1 className="text-center text-3xl mb-4">Total users: {users.length}</h1>
      <table className="overflow-x-auto table table-zebra-zebra w-full">
        <thead className="bg-red-300">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Change Roles</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <RoleChangeTable key={user._id} user={user} />
          ))}
        </tbody>
      </table>
    </div> */}
      <>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead className="font-semibold text-lg text-[#002172]">
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                {/* <th>Status</th> */}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <RoleChangeTable key={user._id} user={user} />
              ))}
            </tbody>
          </table>
        </div>
      </>
    </>
  );
};

export default RoleChange;
