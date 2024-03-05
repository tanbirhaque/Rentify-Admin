import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useProperties from "../../../Hooks/useProperties";
import Property from "./Property";
import { useState } from "react";
import "./tab.css";
import Header from "../../DashShared/Header/Header";

const PropertyManagement = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [properties, refetch] = useProperties();

  const pendingProperties = properties.filter(
    (property) => property?.property_info?.verify_status === "pending"
  );

  const verifiedProperties = properties.filter(
    (property) => property?.property_info?.verify_status === "verified"
  );

  const declinedProperties = properties.filter(
    (property) => property?.property_info?.verify_status === "declined"
  );

  return (
    <div className="p-5 bg-[#f5f5f5] min-h-[90vh] space-y-5">
      <Header heading={"Property Verification"} title={"Property Verification"} />
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Pending</Tab>
          <Tab>Verified</Tab>
          <Tab>Declined</Tab>
        </TabList>

        <TabPanel>
          <div className="bg-[#ffffff] rounded-lg shadow-lg p-5 mt-10 mx-auto mb-20">
            <table className="table overflow-scroll">
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
              <tbody>
                {pendingProperties.map((property) => (
                  <tr key={property._id}>
                    <Property property={property} refetch={refetch} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="bg-[#ffffff] rounded-lg shadow-lg p-5 mt-10 mx-auto mb-20">
            <table className="table overflow-scroll">
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
              <tbody>
                {verifiedProperties.map((property) => (
                  <tr key={property._id}>
                    <Property property={property} refetch={refetch} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="bg-[#ffffff] rounded-lg shadow-lg p-5 mt-10 mx-auto mb-20">
            <table className="table overflow-scroll">
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
              <tbody>
                {declinedProperties.map((property) => (
                  <tr key={property._id}>
                    <Property property={property} refetch={refetch} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default PropertyManagement;
