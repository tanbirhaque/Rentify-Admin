//component added by "Fahima"

import useGetUsers from "../../Hooks/useGetUsers";
import useOwners from "../../Hooks/useOwners";
import RoleChangeTable from "./RoleChangeTable";

const RoleChange = () => {
  const [users, refetch] = useGetUsers();
  const [owners] = useOwners();

  const commonEmails = users.filter((user) =>
    owners.some((owner) => owner.ownerEmail === user.email)
  );
  // console.log(commonEmails);

  return (
    <>
      <h1 className="text-center font-bold text-3xl my-3">Role change Table</h1>
      <div className="overflow-x-auto">
        <table className="table">
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
              <RoleChangeTable key={item._id} item={item} refetch={refetch} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RoleChange;
