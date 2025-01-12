import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
 // Custom CSS file for additional styling
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";

const Destination = () => {
  const [places, setPlaces] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const API_BASE_URL = "http://localhost:8080/place";

  // Fetch all places
  const fetchPlaces = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/allplaces`);
      setPlaces(response.data);
    } catch (error) {
      console.error("Error fetching places:", error);
    }
  };

  // Search places by name
  const searchPlaces = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/searchPlace`, {
        params: { name: searchTerm },
      });
      setPlaces(response.data);
    } catch (error) {
      console.error("Error searching places:", error);
    }
  };

  useEffect(() => {
    fetchPlaces();
  }, []);

  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
          <h3 className="text-white display-3 mb-4">Travel Destinations</h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="/" className="text-white">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/Contact" className="text-white">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">Travel Destinations</li>
          </ol>
        </div>
      </div>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Explore Destinations</h2>

        {/* Search Bar */}
        <div className="row justify-content-center mb-4">
          <div className="col-md-6">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search places by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="btn btn-primary"
                onClick={searchPlaces}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Places List */}
        <div className="row">
          {places.map((place) => (
            <div key={place.placeId} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card shadow-lg h-100">
                <img
                  src={`data:${place.contentType};base64,${place.imageData}`}
                  alt={place.placeName}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{place.placeName}</h5>
                  <p className="card-text">{place.description}</p>
                  <p className="mb-2">
                    <strong>Location:</strong> {place.location} <br />
                    <strong>Category:</strong> {place.category} <br />
                  </p>
                  <a
                    href="/book"
                    className="btn btn-primary btn-lg w-100"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Destination;
