import useGetUsers from "../../Hooks/useGetUsers";
import useOwners from "../../Hooks/useOwners";
import RoleChangeTable from "./RoleChangeTable";

const RoleChange = () => {
  const [users] = useGetUsers();
  const [owners] = useOwners();

  const commonEmails = users.filter((user) =>
    owners.some((owner) => owner.ownerEmail === user.email)
  );
  console.log(commonEmails);

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
            {commonEmails.map((item) => (
              <RoleChangeTable key={item._id} item={item} />
            ))}
            {/* {users.map((user) => (
              <RoleChangeTable key={user._id} user={user} owner={owners} />
            ))} */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RoleChange;
