import React, { useEffect, useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import Topbar from "../compodent/Topbar"; // Corrected the spelling of 'components'
import Navbar from "../compodent/Navbar"; // Corrected the spelling of 'components'
import Footer from "../compodent/Footer"; // Corrected the spelling of 'components'
import axios from "axios";
import "./Gallery.css";

export default function Our_Gallery() {
  const [places, setPlaces] = useState([]);

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

  useEffect(() => {
    fetchPlaces();
  }, []);

  return (
    <div>
      <Topbar />
      <div className="navbar-container">
        <Navbar />
      </div>

      {/* Breadcrumb Section */}
      <div className="container-fluid bg-breadcrumb">
        <div
          className="container text-center py-5"
          style={{ maxWidth: "900px" }}
        >
          <h3 className="text-white display-3 mb-4">Travel Gallery</h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="/Home">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">Gallery</li>
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
            <br></br>Our Gallery
          </h2>
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
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Grid of Images */}
        <div className="container mt-5">
          <h2 className="text-center mb-4">Explore More</h2>
          <div className="row g-4">
            {places.map((place) => (
              <div className="col-lg-4 col-md-10 col-sm-6" key={place.placeId}>
                <div className="card border-0 shadow">
                  <div className="zoom-container">
                    <img
                      src={`data:${place.contentType};base64,${place.imageData}`}
                      alt={place.placeName}
                      className="card-img-top"
                    />
                  </div>
                  <div className="card-body text-center">
                    <h6 className="card-title">{place.placeName}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
