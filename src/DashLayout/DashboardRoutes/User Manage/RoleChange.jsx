//component added by "Fahima"

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../Properties/tab.css";
import useOwners from "../../../Hooks/useOwners";
import RoleChangeTable from "./RoleChangeTable";
import { useState } from "react";

const RoleChange = () => {
  //index for tab
  const [tabIndex, setTabIndex] = useState(0);

  const [owners, refetch] = useOwners();

  //   filtering data according to status false
  const pending = owners.filter((owner) => owner?.ownerStatus === false);

  //   filtering data according to status true
  const approved = owners.filter((owner) => owner?.ownerStatus === true);
  console.log(approved);

  return (
    <div className="p-5 bg-[#f5f5f5] min-h-[90vh] space-y-5">
      <div className="shadow-lg bg-[#ffffff] rounded-lg p-5 space-y-2">
        <h1 className="font-bold text-xl text-[#002172]">Requests for Owner</h1>
        <p className="text-xs font-medium">
          Dashboard / <span className="text-[#ec3323]">All Owners</span>
        </p>
      </div>
      {/* tabs according to status */}
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Owners</Tab>
          <Tab>Owner Requests</Tab>
        </TabList>
        {/* for approved */}
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5">
            {approved.map((owner) => (
              <RoleChangeTable
                key={owner._id}
                owner={owner}
                refetch={refetch}
              />
            ))}
          </div>
        </TabPanel>
        {/* for pending */}
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5">
            {pending.map((owner) => (
              <RoleChangeTable
                key={owner._id}
                owner={owner}
                refetch={refetch}
              />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default RoleChange;
