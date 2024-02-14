//component added by "Fahima"

import useProperties from "../../Hooks/useProperties";
import Approved from "./Approved";
import Declined from "./Declined";
import Property from "./Property";

const AllProperties = () => {
  //fetching all properties
  const [properties, refetch] = useProperties();

  //   filtering property according to verified status "true"
  const approvedProperties = properties.filter(
    (property) => property?.property_info?.verify_status === "verified"
  );

  //   filtering property according to verified status "declined"

  const declinedProperties = properties.filter(
    (property) => property?.property_info?.verify_status === "declined"
  );

  return (
    <div>
      <h1 className="text-center font-bold text-3xl my-3">Property Requests</h1>
      <table className="table">
        <tbody>
          {properties.map((property) => (
            <Property
              property={property}
              key={property._id}
              refetch={refetch}
            />
          ))}
        </tbody>
        <tbody>
          {approvedProperties.map((property) => (
            <Approved property={property} key={property._id} />
          ))}
        </tbody>
        <tbody>
          {declinedProperties.map((property) => (
            <Declined property={property} key={property._id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProperties;
