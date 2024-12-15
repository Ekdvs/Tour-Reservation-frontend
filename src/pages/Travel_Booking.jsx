import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Travel_Booking() {
    const navigate = useNavigate();

  const handleBooking = (e) => {
    e.preventDefault();
    navigate("/Cardpayment");
  };

  return (
    <div>
      
    </div>
  )
}
