import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DestinationShowPage.css";
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link

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

  // Save place data to localStorage
  const saveToLocalStorage = (place) => {
    localStorage.setItem("selectedPlace", JSON.stringify(place));
  };

  return (
    <div>
      <Topbar />
      <Navbar />
      {/* Header Section */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
          <h3 className="text-white display-3 mb-4">Destinations</h3>
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

      {/* Carousel Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Featured Destinations</h2>
        <Carousel>
          {places.slice(0, 20).map((place) => (
            <Carousel.Item key={place.placeId}>
              <img
                src={`data:${place.contentType};base64,${place.imageData}`}
                alt={place.placeName}
                className="d-block w-100"
                style={{
                  height: "600px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <Carousel.Caption>
                <h3 className="bg-dark text-white p-2 rounded">{place.placeName}</h3>
              
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
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

        {/* List of Places */}
        <div className="place-grid">
          {places.map((place) => (
            <div key={place.placeId} className="place-card">
              <img
                src={`data:${place.contentType};base64,${place.imageData}`}
                alt={place.placeName}
                className="place-img"
              />
              <div className="place-info">
                <h5>{place.placeName}</h5>
                <p>{place.description}</p>
                <p>
                  <strong>Location:</strong> {place.location} <br />
                  <strong>Category:</strong> {place.category}
                </p>
                {/* Use saveToLocalStorage to store place data */}
                <Link
                  to="/place-detail"
                  className="btn btn-primary w-100"
                  onClick={() => saveToLocalStorage(place)}
                >
                  Read More
                </Link>
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
