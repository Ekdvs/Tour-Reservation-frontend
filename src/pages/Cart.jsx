import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";

const Cart = () => {
  const userEmail = localStorage.getItem("userEmail");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [numOfTickets, setNumOfTickets] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve selected event from localStorage
    const eventData = JSON.parse(localStorage.getItem("selectedEvent"));
    if (eventData) {
      setSelectedEvent(eventData);
      setLoading(false);
    } else {
      setLoading(false);
      setError("No event selected. Please go back to the events page.");
    }
  }, []);

  const handleTicketChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value, 10) || 1);
    setNumOfTickets(value);
  };

  const incrementTickets = () => {
    setNumOfTickets((prevTickets) => prevTickets + 1);
  };

  const decrementTickets = () => {
    setNumOfTickets((prevTickets) => Math.max(1, prevTickets - 1)); // Ensure ticket count doesn't go below 1
  };

  const calculateTotalPrice = () => {
    return selectedEvent ? numOfTickets * selectedEvent.oneTicketPrice : 0;
  };

  const handlePayment = () => {
    // Check if the user is logged in by checking for a token in localStorage (or any other storage mechanism you're using)
    const userToken = localStorage.getItem("userToken"); // Replace with your actual authentication method

    if (!userEmail) {
      // If not logged in, redirect to login page
      toast.error("Please log in to proceed with the payment.");
      setTimeout(() => {
        navigate("/login"); // Redirect to login page
      }, 2000);
    } else {
      // If logged in, proceed with payment
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
      }, 2000); // Simulate a delay before navigating to the payment page
    }
  };

  // Navigate back to the events page after 2000ms delay
  const handleBackToEvents = () => {
    setTimeout(() => {
      navigate("/EventShowPage");
      localStorage.removeItem("selectedEvent");
    }, 2000);
  };

  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="container-fluid bg-breadcrumb">
        <div
          className="container text-center py-5"
          style={{ maxWidth: "900px" }}
        >
          <h3 className="text-white display-3 mb-4">Event Booking</h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/events">Events</a>
            </li>
            <li className="breadcrumb-item active text-white">
              <a href="/EventShowPage">Event Booking</a>
            </li>
          </ol>
        </div>
      </div>
      <div style={{
         backgroundImage: `linear-gradient(rgba(28, 86, 202, 0.6), rgba(19, 53, 123, 0.6)), url("data:${selectedEvent.contentType};base64,${selectedEvent.imageData}")`,

          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
      <div className="container ">
        <h1 className="text-center mb-4"><br></br>Event Booking</h1>
        <ToastContainer />

        {loading ? (
          <p className="text-center">Loading event details...</p>
        ) : error ? (
          <p className="text-center text-danger">{error}</p>
        ) : (
          <div>
            <h3>Event Details</h3>
            <div className="card  shadow-lg">
              <img
                src={`data:${selectedEvent.contentType};base64,${selectedEvent.imageData}`}
                className="card-img-top img-fluid w-100"
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
                <div className="d-flex justify-content-center mt-4">
                  <button
                    className="btn btn-success me-3"
                    onClick={handlePayment}
                  >
                    Proceed to Payment
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={handleBackToEvents}
                  >
                    Back to Events
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
