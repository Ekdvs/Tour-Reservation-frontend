import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";
import { FaArrowLeft } from "react-icons/fa";

const PlaceDetail = () => {
  const { id } = useParams(); // Get place ID from URL
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const placeId = localStorage.getItem("selectedPlaceId");


  useEffect(() => {
    // Fetch place details from the backend
    const fetchPlaceDetails = async () => {
      try {
        const response = await fetch(`https://online-travel-planning-production.up.railway.app/place/getPlaceById/${placeId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch place details");
        }
        const data = await response.json();
        setPlace(data);
      } catch (error) {
        console.error("Error fetching place details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaceDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="container text-center mt-5">
        <p className="text-muted">Loading place details...</p>
      </div>
    );
  }

  if (!place) {
    return (
      <div className="container text-center mt-5">
        <p className="text-muted">No place details available. Please try again.</p>
      </div>
    );
  }

  const handleBackToPlaces = () => {
    navigate("/Destination");
  };

  return (
    <div>
      <Topbar />
      <Navbar />

      {/* Breadcrumb */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
          <h3 className="text-white display-3 mb-4">Destinations</h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><a href="/Destinations">Destinations</a></li>
            <li className="breadcrumb-item active text-white">{place.placeName}</li>
          </ol>
        </div>
      </div>

      {/* Place Details */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(19, 53, 123, 0.6), rgba(19, 53, 123, 0.6)), url("data:${place.contentType};base64,${place.imageData}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "20px 0",
        }}
      >
        <div className="container mt-5 mb-5">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-primary text-white text-center py-4">
              <h2 className="mb-0">{place.placeName || "Place Name"}</h2>
            </div>
            <div className="card-body">
              <div className="row">
                {/* Image Section */}
                <div className="col-md-6 mb-4">
                  {place.imageData ? (
                    <img
                      src={`data:${place.contentType};base64,${place.imageData}`}
                      alt={place.placeName || "Place Image"}
                      className="d-block w-100 rounded shadow"
                      style={{ height: "400px", objectFit: "cover" }}
                    />
                  ) : (
                    <div
                      className="d-flex align-items-center justify-content-center bg-light rounded shadow"
                      style={{ height: "400px", fontSize: "1.5rem", color: "#ccc" }}
                    >
                      No Image Available
                    </div>
                  )}
                </div>

                {/* Details Section */}
                <div className="col-md-6 mb-4">
                  <h4 className="text-primary">Details</h4>
                  <ul className="list-group list-group-flush mb-4">
                    <li className="list-group-item">
                      <strong>Location:</strong> {place.location || "N/A"}
                    </li>
                    <li className="list-group-item">
                      <strong>Category:</strong> {place.category || "N/A"}
                    </li>
                  </ul>
                </div>
              </div>

              {/* Description Section */}
              <div className="mt-4">
                <h4 className="text-primary">Description</h4>
                <p className="text-muted">{place.description || "Description not provided."}</p>
              </div>

              {/* Back Button */}
              <button className="btn btn-primary btn-lg w-100" onClick={handleBackToPlaces}>
                Back to Destination
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PlaceDetail;
