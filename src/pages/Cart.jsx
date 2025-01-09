import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";


const Cart = () => {
  const { eventId } = useParams(); // Get eventId from the URL
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [numOfTickets, setNumOfTickets] = useState(1);
  const navigate = useNavigate();
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

  const incrementTickets = () => {
    setNumOfTickets(prevTickets => prevTickets + 1);
  };

  const decrementTickets = () => {
    setNumOfTickets(prevTickets => Math.max(1, prevTickets - 1)); // Ensure ticket count doesn't go below 1
  };

  const calculateTotalPrice = () => {
    return selectedEvent ? numOfTickets * selectedEvent.oneTicketPrice : 0;
  };

  const handlePayment = () => {
    toast.success("Proceeding to payment...");
    setTimeout(() => {
      navigate("/payment", {
        state: {
          eventId: selectedEvent.eventId,
          eventName: selectedEvent.eventName,
          totalPrice: calculateTotalPrice(),
          numOfTickets,
        },
      });
    }, 2000); // Add a delay to simulate payment preparation
  };

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
      <h1 className="text-center mb-4">Event Booking</h1>
      <ToastContainer />
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
                <div className="d-flex align-items-center">
                  <button 
                    className="btn btn-outline-primary me-2"
                    onClick={decrementTickets}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="form-control text-center"
                    value={numOfTickets}
                    onChange={handleTicketChange}
                    min="1"
                    style={{ width: "80px" }}
                  />
                  <button 
                    className="btn btn-outline-primary ms-2"
                    onClick={incrementTickets}
                  >
                    +
                  </button>
                </div>
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
    <Footer/>
    </div>
  );
};

export default Cart;
