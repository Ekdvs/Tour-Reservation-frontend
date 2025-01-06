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
        <div classNameName="container-fluid bg-breadcrumb">
        <div classNameName="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h3 classNameName="text-white display-3 mb-4">Upcoming Events</h3>
          <ol classNameName="breadcrumb justify-content-center mb-0">
            <li classNameName="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li classNameName="breadcrumb-item">
              <a href="/Contact">Pages</a>
            </li>
            <li classNameName="breadcrumb-item active text-white">Upcoming Events</li>
          </ol>
        </div>
      </div>
    <div classNameName="container mt-5">
      <h2 classNameName="text-center mb-4">Upcoming Events</h2>
      <div classNameName="row">
        {events.map((event) => (
          <div key={event.eventId} classNameName="col-md-4 mb-4">
            <div classNameName="card shadow-lg rounded-lg event-card">
              {/* Correct way to display the base64 image */}
              <img 
                src={`data:${event.contentType};base64,${event.imageData}`} 
                alt="event" 
                classNameName="card-img-top" 
              />
              <div classNameName="card-body">
                <h5 classNameName="card-title event-title">{event.eventName}</h5>
                <p classNameName="card-text event-description">
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
                  classNameName="btn btn-primary btn-lg w-100"
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
