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
    <div className="p-5 bg-[#f5f5f5] h-screen space-y-5">
      <div className="shadow-lg bg-[#ffffff] rounded-lg p-5 space-y-2">
        <h1 className="font-bold text-xl text-[#002172]">Property Verification</h1>
        <p className="text-xs font-medium">
          Dashboard / <span className="text-[#ec3323]">Property Verification</span>
        </p>
      </div>

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
