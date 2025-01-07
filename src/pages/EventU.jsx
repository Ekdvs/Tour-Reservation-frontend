import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EventShowPage.css"; // Custom CSS file for styling
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";

const EventShowPage = () => {
  const [events, setEvents] = useState([]);
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

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
        <Topbar/>
        <Navbar/>
        <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
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
    <div className="container mt-5">
      <h2 className="text-center mb-4">Upcoming Events</h2>
      <div className="row">
        {events.map((event) => (
          <div key={event.eventId} className="col-md-4 mb-4">
            <div className="card shadow-lg rounded-lg event-card">
              {/* Correct way to display the base64 image */}
              <img 
                src={`data:${event.contentType};base64,${event.imageData}`} 
                alt="event" 
                className="card-img-top" 
              />
              <div className="card-body">
                <h5 className="card-title event-title">{event.eventName}</h5>
                <p className="card-text event-description">
                  {event.description}
                </p>
                <p>
                  <strong>Date:</strong> {event.eventDate} <br />
                  <strong>Time:</strong> {event.eventTime} <br />
                  <strong>Venue:</strong> {event.eventVenue} <br />
                  <strong>Ticket Price:</strong> ${event.oneTicketPrice} <br />
                </p>
                <a
                  href={`/book/${event.eventId}`}
                  className="btn btn-primary btn-lg w-100"
                >
                  Book Tickets
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default EventShowPage;