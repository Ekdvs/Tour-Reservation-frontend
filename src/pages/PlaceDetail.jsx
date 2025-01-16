import React, { useEffect, useState } from "react";

const PlaceDetail = () => {
  const [place, setPlace] = useState(null);

  useEffect(() => {
    const storedPlace = localStorage.getItem("selectedPlace");
    if (storedPlace) {
      setPlace(JSON.parse(storedPlace));
    }
  }, []);

  if (!place) {
    return (
      <div className="container text-center mt-5">
        <p className="text-muted">No place details available. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">{place.placeName || "Place Name"}</h2>
      <div className="row justify-content-center">
        <div className="col-md-6 mb-4">
          {place.imageData ? (
            <img
              src={`data:${place.contentType};base64,${place.imageData}`}
              alt={place.placeName || "Place Image"}
              className="d-block w-100 rounded shadow-lg"
              style={{
                height: "400px",
                objectFit: "cover",
              }}
            />
          ) : (
            <div
              className="d-flex align-items-center justify-content-center bg-light rounded shadow-lg"
              style={{
                height: "400px",
                fontSize: "1.5rem",
                color: "#ccc",
              }}
            >
              No Image Available
            </div>
          )}
        </div>
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">

              <div className="card-text">
                <p>
                  <strong>Location:</strong> {place.location || "N/A"}
                </p>
                <p>
                  <strong>Category:</strong> {place.category || "N/A"}
                </p>
                <p>
                  <strong>Price:</strong> {place.price ? `$${place.price}` : "N/A"}
                </p>
              </div>
              <button
              className="btn btn-primary mt-3"
              onClick={() => {
                if (place.website) {
                  window.open(place.website, "_blank", "noreferrer");
                }
              }}
              disabled={!place.placeId}
            >
              Back to Destination
            </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body">
              <p className="card-text">{place.description || "Description not provided."}</p>
              </div>
              
    </div>
  );
};

export default PlaceDetail;
