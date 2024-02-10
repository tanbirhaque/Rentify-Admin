//component added by "Fahima"

import useGetUsers from "../../Hooks/useGetUsers";
import useOwners from "../../Hooks/useOwners";
import RoleChangeTable from "./RoleChangeTable";

const RoleChange = () => {
  const [users, refetch] = useGetUsers();
  const [owners] = useOwners();

  const commonUsers = users.filter((user) =>
    owners.some((owner) => owner.ownerEmail === user.email)
  );

  return (
    <div className="bg-[#f5f5f5] p-5">
      <h1 className="text-center font-bold text-3xl my-3">Role change Table</h1>
      <div className="grid grid-cols-3 gap-5 p-5">
        {commonUsers.map((item) => (
          <RoleChangeTable key={item._id} item={item} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default RoleChange;
