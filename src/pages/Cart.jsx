import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = () => {
  const { eventId } = useParams(); // Get eventId from the URL
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [numOfTickets, setNumOfTickets] = useState(1);
  const API_BASE_URL = "http://localhost:8080/event";

  // Fetch selected event by ID
  const fetchEventById = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/getEventById/${eventId}`);
      setSelectedEvent(response.data);
    } catch (error) {
      console.error("Error fetching event details:", error);
    }
  };

  useEffect(() => {
    fetchEventById();
  }, [eventId]);

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
      {selectedEvent ? (
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
            </div>
          </div>
        </div>
      ) : (
        <p>Loading event details...</p>
      )}
    </div>
  );
};

export default Cart;
