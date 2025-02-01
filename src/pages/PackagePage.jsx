import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Packageview = () => {
  const { id } = useParams(); // Get ID from URL
  const [packageDetails, setPackageDetails] = useState(null);

  useEffect(() => {
    const packageId = id || localStorage.getItem("selectedPackageId");
    console.log("Package ID: ", packageId); // Debugging

    if (!packageId) {
      console.error("No package ID found.");
      return;
    }

    const fetchPackageDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/packages/getPackageById/${packageId}`
        );
        setPackageDetails(response.data);
      } catch (error) {
        console.error("Error fetching package details:", error);
      }
    };

    fetchPackageDetails();
  }, [id]);

  return (
    <div>
      <h1>Package ID: {id}</h1>
      {packageDetails ? (
        <div>
          <h2>{packageDetails.packageName}</h2>
          <p>{packageDetails.description}</p>
        </div>
      ) : (
        <p>Loading package details...</p>
      )}
    </div>
  );
};

export default Packageview;
