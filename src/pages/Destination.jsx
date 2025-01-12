import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DestinationShowPage.css";
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
      {/* Header Section */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h3 className="text-white display-3 mb-4">Event Booking</h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/events">Events</a>
            </li>
            <li className="breadcrumb-item active text-white">Event Booking</li>
          </ol>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Explore Destinations</h2>

        {/* Search Bar */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-6">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-primary" onClick={searchPlaces}>
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Single Column of Places */}
        <div className="row g-4">
          {places.map((place) => (
            <div key={place.placeId} className="col-12">
              <div className="card h-100 shadow-sm mb-4">
                <img
                  src={`data:${place.contentType};base64,${place.imageData}`}
                  alt={place.placeName}
                  className="card-img-top"
                  style={{ height: "100%" ,width:"100%", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{place.placeName}</h5>
                  <p className="card-text">{place.description}</p>
                  <p className="mt-auto">
                    <strong>Location:</strong> {place.location} <br />
                    <strong>Category:</strong> {place.category}
                  </p>
                  <a href="/book" className="btn btn-primary w-100 mt-3">
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