import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // To access URL parameters

const PlaceDetail = () => {
  const { placeId } = useParams(); // Get placeId from the URL
  const [place, setPlace] = useState(null);
  const API_BASE_URL = "http://localhost:8080/place";

  useEffect(() => {
    const fetchPlaceDetails = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/${placeId}`);
        setPlace(response.data);
      } catch (error) {
        console.error("Error fetching place details:", error);
      }
    };

    fetchPlaceDetails();
  }, [placeId]);

  if (!place) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">{place.placeName}</h2>
      <div className="row">
        <div className="col-md-6">
          <img
            src={`data:${place.contentType};base64,${place.imageData}`}
            alt={place.placeName}
            className="d-block w-100"
            style={{
              height: "400px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>
        <div className="col-md-6">
          <p>{place.description}</p>
          <p>
            <strong>Location:</strong> {place.location} <br />
            <strong>Category:</strong> {place.category} <br />
            <strong>Price:</strong> {place.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetail;
