//component added by "Fahima"

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useProperties from "../../../Hooks/useProperties";
import Property from "./Property";
import { useState } from "react";
import "./tab.css";
import Header from "../../DashShared/Header/Header";

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
    <div className="p-5 bg-[#f5f5f5] min-h-[90vh] space-y-5">
      <Header
        heading={"Property Verification"}
        title={"Property Verification"}
      />
      {/* tabs according to status */}
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Pending</Tab>
          <Tab>Verified</Tab>
          <Tab>Declined</Tab>
        </TabList>

        {/*  */}
        <div className="bg-[#ffffff] rounded-lg shadow-lg p-5 mt-10 mx-auto mb-20">
          <table className="table overflow-scroll">
            {/* head */}
            <thead className="font-semibold text-lg text-[#002172]">
              <tr>
                <th>Property Info</th>
                <th>Location</th>
                <th>Owner Info</th>
                <th>Price</th>
                <th>Type</th>
                <th>Action</th>
              </tr>
            </thead>
          </table>
          {/*  */}

          {/* tab for pending */}
          <TabPanel>
            {pendingProperties.map((property, index) => (
              <tbody key={index}>
                <Property
                  property={property}
                  key={property._id}
                  refetch={refetch}
                />
              </tbody>
            ))}
          </TabPanel>
          {/* tab for verified */}
          <TabPanel>
            {verifiedProperties.map((property, index) => (
              <tbody key={index}>
                <Property
                  property={property}
                  key={property._id}
                  refetch={refetch}
                />
              </tbody>
            ))}
          </TabPanel>
          {/* tab for declined*/}
          <TabPanel>
            {declinedProperties.map((property, index) => (
              <tbody key={index}>
                <Property
                  property={property}
                  key={property._id}
                  refetch={refetch}
                />
              </tbody>
            ))}
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default AllProperties;
