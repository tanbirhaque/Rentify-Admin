//component added by "Fahima"

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../Properties/tab.css";
import useOwners from "../../../Hooks/useOwners";
import OwnerRequestTable from "./OwnerRequestTable";
import { useState } from "react";
import Header from "../../DashShared/Header/Header";


const OwnerRequest = () => {
    //index for tab
  const [tabIndex, setTabIndex] = useState(0);

  const [owners, refetch] = useOwners();

  //   filtering data according to status false
  const pending = owners.filter((owner) => owner?.ownerStatus === false);

  //   filtering data according to status true
  const approved = owners.filter((owner) => owner?.ownerStatus === true);
  // console.log(approved);

  return (
    <div className="p-5 bg-[#f5f5f5] min-h-[90vh] space-y-5">
      <Header heading={"Requests for Owner"} title={"All Owners"} />
      {/* tabs according to status */}
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Owners</Tab>
          <Tab>Owner Requests</Tab>
        </TabList>
        {/* for approved */}
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:p-0">
            {approved.map((owner) => (
              <OwnerRequestTable
                key={owner._id}
                owner={owner}
                refetch={refetch}
              />
            ))}
          </div>
        </TabPanel>
        {/* for pending */}
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:p-0">
            {pending.map((owner) => (
              <OwnerRequestTable
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

export default OwnerRequest;