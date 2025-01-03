import React from "react";
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";
import {useNavigate} from 'react-router-dom';

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
