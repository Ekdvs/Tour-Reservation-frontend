import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EventShowPage.css"; // Custom CSS file for styling
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";
import { Link, useNavigate } from "react-router-dom";
import { Carousel } from "react-bootstrap";

const EventShowPage = () => {
  const [events, setEvents] = useState([]);
  const [places, setPlaces] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const API_BASE_URL = "http://localhost:8080";
  const navigate = useNavigate();

  // Fetch all events
  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/event/getAllEvents`);
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  // Search events by name
  const searchEvents = async () => {
    try {
      if (searchTerm.trim() === "") {
        fetchEvents(); // If search term is empty, fetch all events
        return;
      }
      const response = await axios.get(`${API_BASE_URL}/event/searchEvents`, {
        params: { name: searchTerm },
      });
      setEvents(response.data);
    } catch (error) {
      console.error("Error searching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Save event to local storage
  const saveToLocalStorage = (event) => {
    if (event && event.eventId) {
      localStorage.setItem("selectedEventId", event.eventId);
      setTimeout(() => {
        navigate("/cart");
      }, 3000);
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
          <h3 className="text-white display-3 mb-4">Upcoming Events</h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/Contact">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">
              Upcoming Events
            </li>
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
            <br></br>Featured Events
          </h2>
          <Carousel>
            {events.slice(0, 20).map((event) => (
              <Carousel.Item key={event.eventId}>
                <img
                  src={`data:${event.contentType};base64,${event.imageData}`}
                  alt={event.eventName}
                  className="d-block w-100"
                  style={{
                    height: "600px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
                <Carousel.Caption>
                  <h3 className="bg-dark text-white p-2 rounded">
                    {event.eventName}
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        {/* Search Bar */}
        <div className="container mt-4">
          <div className="row justify-content-center mb-4">
            <div className="col-md-8">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search events by name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn btn-primary" onClick={searchEvents}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Events Section */}
        <div className="container mt-5">
          <h2 className="text-center mb-4">Upcoming Events</h2>
          <div className="row ">
            {events.length > 0 ? (
              events.map((event) => (
                <div key={event.eventId} className="col-md-6 col-lg-4 mb-4">
                  <div className="card shadow-lg rounded-lg event-card">
                    <img
                      src={`data:${event.contentType};base64,${event.imageData}`}
                      alt="event"
                      className="card-img-top"
                      style={{
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "10px 10px 0 0",
                      }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title event-title">
                        {event.eventName}
                      </h5>
                      <p className="card-text event-description">
                        {event.description.length > 100
                          ? `${event.description.substring(0, 100)}...`
                          : event.description}
                      </p>
                      {/* Read More Link */}
                      <Link
                        to="/cart"
                        className="text-primary text-decoration-underline"
                        onClick={() => saveToLocalStorage(event)}
                      >
                        Read More
                      </Link>
                      <p className="mt-3">
                        <strong>Date:</strong> {event.eventDate} <br />
                        <strong>Time:</strong> {event.eventTime} <br />
                        <strong>Venue:</strong> {event.eventVenue} <br />
                        <strong>Ticket Price:</strong> ${event.oneTicketPrice}{" "}
                        <br />
                      </p>
                      {/* Book Tickets Button */}
                      <button
                        onClick={() => saveToLocalStorage(event)}
                        className="btn btn-primary btn-lg w-100"
                      >
                        Book Tickets
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No events found.</p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventShowPage;
