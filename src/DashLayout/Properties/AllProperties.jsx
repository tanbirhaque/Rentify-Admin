//component added by "Fahima"

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useProperties from "../../Hooks/useProperties";
import Property from "./Property";
import { useState } from "react";
import "./tab.css";

const AllProperties = () => {
  //index for tab
  const [tabIndex, setTabIndex] = useState(0);

  //fetching all properties
  const [properties, refetch] = useProperties();

  //   filtering property according to verified status "true"
  const pendingProperties = properties.filter(
    (property) => property?.property_info?.verify_status === "pending"
  );

  //   filtering property according to verified status "true"
  const verifiedProperties = properties.filter(
    (property) => property?.property_info?.verify_status === "verified"
  );

  //   filtering property according to verified status "declined"
  const declinedProperties = properties.filter(
    (property) => property?.property_info?.verify_status === "declined"
  );

  return (
    <div className="p-5">
      <h1 className="text-center font-bold text-3xl my-3">Property Requests</h1>
      {/* tabs according to status */}
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Pending</Tab>
          <Tab>Verified</Tab>
          <Tab>Declined</Tab>
        </TabList>
        {/* tab for pending */}
        <TabPanel>
          <div className="">
            {pendingProperties.map((property, index) => (
              <div key={index}>
                <Property
                  property={property}
                  key={property._id}
                  refetch={refetch}
                />
              </div>
            ))}
          </div>
        </TabPanel>
        {/* tab for verified */}
        <TabPanel>
          <div className="">
            {verifiedProperties.map((property, index) => (
              <div key={index}>
                <Property
                  property={property}
                  key={property._id}
                  refetch={refetch}
                />
              </div>
            ))}
          </div>
        </TabPanel>
        {/* tab for declined*/}
        <TabPanel>
          <div className="">
            {declinedProperties.map((property, index) => (
              <div key={index}>
                <Property
                  property={property}
                  key={property._id}
                  refetch={refetch}
                />
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AllProperties;
