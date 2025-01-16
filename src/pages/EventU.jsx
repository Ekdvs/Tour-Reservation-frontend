import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EventShowPage.css"; // Custom CSS file for styling
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";


const EventShowPage = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const API_BASE_URL = "http://localhost:8080/event";

  // Fetch all events
  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/getAllEvents`);
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
      const response = await axios.get(`${API_BASE_URL}/searchEvents`, {
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

  return (
    <div>
      <Topbar />
      <Navbar />

      {/* Header Section */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
          <h3 className="text-white display-3 mb-4">Upcoming Events</h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/Contact">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">Upcoming Events</li>
          </ol>
        </div>
      </div>

      {/* Carousel Section */}
      {events.length > 0 && (
        <div id="eventCarousel" className="carousel slide mt-5" data-bs-ride="carousel">
          <div className="carousel-inner">
            {events.map((event, index) => (
              <div key={event.eventId} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img
                  src={`data:${event.contentType};base64,${event.imageData}`}
                  className="d-block w-100"
                  alt={event.eventName}
                  style={{ height: "500px", objectFit: "cover" }}
                />
                <div className="bg-dark text-white p-2 rounded" style={{ position: "absolute", bottom: "10px", left: "10px", zIndex: "1" }}>
                  <h5>{event.eventName}</h5>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#eventCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#eventCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      )}

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
        <div className="row">
          {events.length > 0 ? (
            events.map((event) => (
              <div key={event.eventId} className="col-md-4 mb-4">
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
                  <div className="card-body">
                    <h5 className="card-title event-title">{event.eventName}</h5>
                    <p className="card-text event-description">{event.description}</p>
                    <p>
                      <strong>Date:</strong> {event.eventDate} <br />
                      <strong>Time:</strong> {event.eventTime} <br />
                      <strong>Venue:</strong> {event.eventVenue} <br />
                      <strong>Ticket Price:</strong> ${event.oneTicketPrice} <br />
                    </p>
                    <a href="/cart" className="btn btn-primary btn-lg w-100">
                      Book Tickets
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No events found.</p>
          )}
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default EventShowPage;
