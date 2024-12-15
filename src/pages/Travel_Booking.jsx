import React from 'react'
import { useNavigate } from "react-router-dom";
import Topbar from '../compodent/Topbar';
import Navbar from '../compodent/Navbar';
import Footer from '../compodent/Footer';

export default function Travel_Booking() {
    const navigate = useNavigate();

  const handleBooking = (e) => {
    e.preventDefault();
    navigate("/Cardpayment");
  };

  return (
    <div>
        <Topbar/>
        <Navbar/>

        <Footer/>
      
    </div>
  )
}
