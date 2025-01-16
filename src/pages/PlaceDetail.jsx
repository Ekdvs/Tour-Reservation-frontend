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
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">{place.placeName}</h2>
      <div className="row justify-content-center">
        <div className="col-md-6 mb-4">
          <img
            src={`data:${place.contentType};base64,${place.imageData}`}
            alt={place.placeName}
            className="d-block w-100 rounded shadow-lg"
            style={{
              height: "400px",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <p className="card-text">{place.description}</p>
              <div className="card-text">
                <p>
                  <strong>Location:</strong> {place.location}
                </p>
                <p>
                  <strong>Category:</strong> {place.category}
                </p>
                <p>
                  <strong>Price:</strong> {place.price}
                </p>
              </div>
              <button className="btn btn-primary mt-3">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetail;
