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
  const API_BASE_URL = "https://online-travel-planning-production.up.railway.app/place";

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
    if (place && place.placeId) {
      localStorage.setItem("selectedPlaceId", place.placeId);
    }
  };

  return (
    <div>
      <Topbar />
      <Navbar />
      {/* Header Section */}
      <div className="container-fluid bg-breadcrumb">
        <div
          className="container text-center py-5"
          style={{ maxWidth: "900px" }}
        >
          <h3 className="text-white display-3 mb-4">Destinations</h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/Destinations">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">Destinations</li>
          </ol>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(19, 53, 123, .6), rgba(19, 53, 123, .6)), url(../img/R.jpeg)`,
          backgroundSize: "cover",
          background_attachment: "fixed",
          borderRadius: "15px",
          borderTop: "2px solid #fff",
        }}
      >
        {/* Carousel Section */}
        <div className="container ">
          <h2 className="text-center mb-4">
            <br></br>Featured Destinations
          </h2>
          <Carousel>
            {places.slice(0, 10).map((place) => (
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
                  <h3 className="bg-dark text-white p-2 rounded">
                    {place.placeName}
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Content Section */}
        <div className="container mt-5">
          <h2 className="text-center mb-4">Explore Destinations</h2>

          {/* Search Bar */}
          <div className="container mt-4">
            <div className="row justify-content-center mb-4">
              <div className="col-md-8">
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
          </div>

          {/* List of Places */}
          <div className="place-grid ">
            {places.map((place) => (
              <div key={place.placeId} className="place-card">
                <img
                  src={`data:${place.contentType};base64,${place.imageData}`}
                  alt={place.placeName}
                  className="place-img"
                />
                <div className="place-info" style={{ textAlign: "center" }}>
                  <h5>{place.placeName}</h5>
                </div>
                <div className="place-info">
                  <p>
                    <strong>Location:</strong> {place.location} <br />
                    <strong>Category:</strong> {place.category}
                  </p>
                  <p>
                    {place.description.length > 100
                      ? `${place.description.substring(0, 100)}...`
                      : place.description}
                  </p>
                  {/* Use saveToLocalStorage to store place data */}
                  <Link
                    to="/place-detail"
                    className="text-primary text-decoration-underline"
                    onClick={() => saveToLocalStorage(place)}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Destination;
