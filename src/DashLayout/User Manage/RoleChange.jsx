//component added by "Fahima"

import useGetUsers from "../../Hooks/useGetUsers";
import useOwners from "../../Hooks/useOwners";
import RoleChangeTable from "./RoleChangeTable";

const RoleChange = () => {
  const [users] = useGetUsers();
  const [owners, refetch] = useOwners();

  // const commonUsers = users.filter((user) =>
  //   owners.some((owner) => owner.ownerEmail === user.email)
  // );

  const commonOwners = owners.filter((owner) =>
    users.some((user) => user.email === owner.ownerEmail)
  );
  // console.log(commonOwners);

  return (
    <div className="bg-[#f5f5f5] p-5">
      <h1 className="text-center font-bold text-3xl my-3">Role change Table</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5">
        {/* {commonUsers.map((item) => (
          <RoleChangeTable key={item._id} item={item} refetch={refetch} />
        ))} */}
        {commonOwners.map((owner) => (
          <RoleChangeTable
            key={owner._id}
            owner={owner}
            users={users}
            refetch={refetch}
          />
        ))}
      </div>
    </div>
  );
};

export default RoleChange;
