import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [numOfTickets, setNumOfTickets] = useState(1);
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

  // Handle event selection
  const handleEventSelect = async (eventId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/getEventById/${eventId}`);
      setSelectedEvent(response.data);
    } catch (error) {
      console.error("Error fetching event details:", error);
    }
  };

  const handleTicketChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value, 10) || 1);
    setNumOfTickets(value);
  };

  const calculateTotalPrice = () => {
    return selectedEvent ? numOfTickets * selectedEvent.oneTicketPrice : 0;
  };

  const handlePayment = () => {
    alert("Proceeding to payment...");
    // Integrate payment gateway here
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Event Booking</h1>
      {!selectedEvent ? (
        <div>
          <h3>Select an Event</h3>
          <div className="row">
            {events.map((event) => (
              <div className="col-md-4 mb-4" key={event.eventId}>
                <div className="card shadow-lg rounded-lg">
                  <img
                    src={`data:${event.contentType};base64,${event.imageData}`}
                    className="card-img-top"
                    alt={event.eventName}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{event.eventName}</h5>
                    <p className="card-text">
                      {event.description.substring(0, 100)}...
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEventSelect(event.eventId)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h3>Event Details</h3>
          <div className="card mb-4 shadow-lg">
            <img
              src={`data:${selectedEvent.contentType};base64,${selectedEvent.imageData}`}
              className="card-img-top"
              alt={selectedEvent.eventName}
            />
            <div className="card-body">
              <h5 className="card-title">{selectedEvent.eventName}</h5>
              <p className="card-text">{selectedEvent.description}</p>
              <p>
                <strong>Date:</strong> {selectedEvent.eventDate} <br />
                <strong>Time:</strong> {selectedEvent.eventTime} <br />
                <strong>Venue:</strong> {selectedEvent.eventVenue}
              </p>
              <p>
                <strong>Ticket Price:</strong> ${selectedEvent.oneTicketPrice}
              </p>
              <div className="mb-3">
                <label className="form-label">Number of Tickets:</label>
                <input
                  type="number"
                  className="form-control"
                  value={numOfTickets}
                  onChange={handleTicketChange}
                  min="1"
                />
              </div>
              <h5>Total Price: ${calculateTotalPrice()}</h5>
              <button className="btn btn-success" onClick={handlePayment}>
                Proceed to Payment
              </button>
              <button
                className="btn btn-secondary ms-2"
                onClick={() => setSelectedEvent(null)}
              >
                Back to Events
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
