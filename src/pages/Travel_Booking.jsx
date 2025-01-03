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
            <div class="container-fluid booking py-5">
            <div class="container py-5">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6">
                        <h5 class="section-booking-title pe-3">Booking</h5>
                        <h1 class="text-white mb-4">Online Booking</h1>
                        <p class="text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime ullam esse fuga blanditiis accusantium pariatur quis sapiente, veniam doloribus praesentium? Repudiandae iste voluptatem fugiat doloribus quasi quo iure officia.
                        </p>
                        <p class="text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime ullam esse fuga blanditiis accusantium pariatur quis sapiente, veniam doloribus praesentium? Repudiandae iste voluptatem fugiat doloribus quasi quo iure officia.
                        </p>
                        <a href="/" class="btn btn-light text-primary rounded-pill py-3 px-5 mt-2">Read More</a>
                    </div>
