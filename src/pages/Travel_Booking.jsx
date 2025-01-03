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
            <div className="container-fluid bg-breadcrumb">
            <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
                <h3 className="text-white display-3 mb-4">Online Booking</h3>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href="/">Pages</a></li>
                    <li className="breadcrumb-item active text-white">Online Booking</li>
                </ol>
            </div>
            </div>
            
