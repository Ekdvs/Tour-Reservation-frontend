import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const BuyTravelGuide = () => {
  const [guideList, setGuideList] = useState([]); // Store the list of travel guides
  const [purchaseStatus, setPurchaseStatus] = useState(null); // Store purchase status (success/failure)
  const navigate = useNavigate();
  const price = 1000; // Price of the travel guide

  useEffect(() => {
    // Fetch all travel guides
    const fetchAllGuides = async () => {
      try {
        const response = await axios.get("https://online-travel-planning-production.up.railway.app/user/travel-guides");
        setGuideList(response.data); // Assuming the API returns an array of guides
      } catch (error) {
        console.error("Error fetching travel guides:", error);
      }
    };

    fetchAllGuides();
  }, []);

  const handleBuyGuide = async (guide) => {
    const userId = guide.userId; // Assuming each guide has a `userId` attribute

    try {
      // Step 1: Purchase the guide
      const response = await axios.post("https://online-travel-planning-production.up.railway.app/guide/buy", {
        userId: userId, // Use the dynamic userId from the selected guide
        packageId: guide.id, // Pass the packageId for the selected guide
      });

      if (response.data.success) {
        // Step 2: Create a reservation
        const reservationData = {
          userEmail: "user@example.com", // Replace with actual user email
          packageId: guide.id,
          eventId: "someEventId", // If you have an event ID
          numOfPerson: 1, // Replace with the actual number of people
          totalCharge: price, // Total charge for the reservation
          travelGuideId: guide.id,
          perPersonCharge: price, // You can adjust this if needed
        };

        // Send the reservation data to the backend
        const reservationResponse = await axios.post("https://online-travel-planning-production.up.railway.app/reservation/create", reservationData);

        if (reservationResponse.data) {
          // Step 3: Store the total price in local storage
          localStorage.setItem("totalPrice", price);

          // Step 4: Navigate to the payment page
          navigate("/payment");
          setPurchaseStatus("success");
        }
      } else {
        setPurchaseStatus("failure");
      }
    } catch (error) {
      console.error("Error purchasing guide or creating reservation:", error);
      setPurchaseStatus("failure");
    }
  };

  const handleBackToPackages = () => {
    navigate("/packages"); // Navigate back to the packages page
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Buy Travel Guides</h1>

      {guideList.length > 0 ? (
        guideList.map((guide) => (
          <div key={guide.id} className="card shadow-lg mb-4">
            <div className="row g-0">
              {guide.imageData && (
                <div className="col-md-5">
                  <img
                    src={`data:${guide.contentType};base64,${guide.imageData}`}
                    className="img-fluid rounded-start"
                    alt={guide.packageName}
                  />
                </div>
              )}
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title mb-3">{guide.packageName}</h5>
                  <p className="card-text">{guide.description}</p>
                  <p><strong>Name:</strong> {guide.firstName}</p>
                  <p><strong>Duration:</strong> {guide.duration} Days</p>
                  <p><strong>Price:</strong> ${price}</p>

                  {/* Purchase Button */}
                  <div className="d-flex justify-content-between mt-4">
                    <button className="btn btn-primary" onClick={() => handleBuyGuide(guide)}>
                      Buy Travel Guide
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">Loading travel guides...</p>
      )}

      {/* Purchase Status */}
      {purchaseStatus && (
        <div className="alert alert-info mt-4" role="alert">
          {purchaseStatus === "success" ? (
            <div className="d-flex align-items-center">
              <FaCheckCircle className="me-2" /> Your travel guide purchase was successful!
            </div>
          ) : (
            <div className="d-flex align-items-center">
              <FaTimesCircle className="me-2" /> There was an error processing your purchase. Please try again.
            </div>
          )}
        </div>
      )}

      {/* Back to Packages Button */}
      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-secondary" onClick={handleBackToPackages}>
          Back to Packages
        </button>
      </div>
    </div>
  );
};

export default BuyTravelGuide;
