
import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Cart() {
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [numOfTickets, setNumOfTickets] = useState(1);

    // Handle event selection
  const handleEventSelect = (eventId) => {
    axios
    .get(`http://localhost:8080/event/getEventById/${eventId}`)
    .then((res) => setSelectedEvent(res.data))
    .catch((err) => console.error(err));
   
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
    <div>
        <div className="container mt-5">
        <h1 className="text-center mb-4">Event Booking</h1>
        {!selectedEvent ? (
        <div>
          <h3>Select an Event</h3>
          <div className="row">
            {events.map((event) => (
              <div className="col-md-4 mb-4" key={event.eventId}>
                <div className="card">
                <img
                    src={`http://localhost:8080${event.eventImagePath}`}
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
              {/* Event Details and Booking */}
              <h3>Event Details</h3>
              <div className="card mb-4">
                <img
                  src={`http://localhost:8080${selectedEvent.eventImagePath}`}
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
              
      
    </div>
  )
}
