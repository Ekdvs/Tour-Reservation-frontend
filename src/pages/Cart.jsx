
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
  return (
    <div>
      
    </div>
  )
}
