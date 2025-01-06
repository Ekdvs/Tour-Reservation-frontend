import React from "react";
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";
import { useState } from 'react';

// ...existing code...

export default function CardPayment() {
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvc, setCvc] = useState("");
    const [cardHolder, setCardHolder] = useState("");
    const handlePayment = (e) => {
        e.preventDefault();
        alert("Payment Successful!");
    };
    return (
        <div>
            <Topbar/>
            <Navbar/>
            <div classNameName="container-fluid bg-breadcrumb">
            <div classNameName="container text-center py-5" style={{ maxWidth: "900px" }}>
                <h3 classNameName="text-white display-3 mb-4">Online Payment</h3>
                <ol classNameName="breadcrumb justify-content-center mb-0">
                <li classNameName="breadcrumb-item"><a href="/">Home</a></li>
                <li classNameName="breadcrumb-item"><a href="/Travel_Booking">Pages</a></li>
                <li classNameName="breadcrumb-item active text-white">Online Booking</li>
                </ol>
            </div>
            </div>
            <div classNameName="padding" >
            <div classNameName="row">
    
        <div classNameName="container-fluid d-flex justify-content-center">
            <div classNameName="col-sm-8 col-md-6">
            <div classNameName="card">
            <div classNameName="bg">
                
            <div classNameName="card-header">
            <div classNameName="row">
                    

                    <div classNameName="col-md-6">
                    <span>CREDIT/DEBIT CARD PAYMENT</span>
                    </div>
                    <div classNameName="col-md-6 text-right" style={{ marginTop: "-5px" }}>
                    <img
                    src="https://img.icons8.com/color/36/000000/visa.png"
                    alt="Visa"
                    />
                    <img
                    src="https://img.icons8.com/color/36/000000/mastercard.png"
                    alt="Mastercard"
                    />
                    <img
                    src="https://img.icons8.com/color/36/000000/amex.png"
                    alt="Amex"
                    />
                    </div>
                </div>
                </div>
                <div classNameName="card-body" style={{ height: "350px" }}>
                <div classNameName="form-group">
                    <label htmlFor="cc-number" classNameName="control-label">
                    CARD NUMBER
                    </label>
                    <input
                    id="cc-number"
                    type="tel"
                    classNameName="input-lg form-control cc-number"
                    autoComplete="cc-number"
                    placeholder="xxxx xxxx xxxx xxxx"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                    />
                </div>
                <div classNameName="row">
                <div classNameName="col-md-6">
                    <div classNameName="form-group">
                    <label htmlFor="cc-exp" classNameName="control-label">
                        CARD EXPIRY
                    </label>
                    <div classNameName="form-group">
                    <label htmlFor="cc-exp" classNameName="control-label">
                        
                    </label>
                    <div classNameName="d-flex">
                        {/* Month Dropdown */}
                        <select
                        id="cc-exp-month"
                        classNameName="form-control"
                        style={{ marginRight: "10px" }}
                        value={expiry.month}
                        onChange={(e) => setExpiry({ ...expiry, month: e.target.value })}
                        required
                        >
                        <option value="" disabled>
                            Month
                        </option>
                        {Array.from({ length: 12 }, (_, i) => (
                            <option key={i + 1} value={String(i + 1).padStart(2, "0")}>
                            {String(i + 1).padStart(2, "0")}
                            </option>
                        ))}
                        </select>
                        {/* Year Dropdown */}
                        <select
                        id="cc-exp-year"
                        classNameName="form-control"
                        value={expiry.year}
                        onChange={(e) => setExpiry({ ...expiry, year: e.target.value })}
                        required
                        >
                            <option value="" disabled>
                            Year
                            </option>
                            {Array.from({ length: 10 }, (_, i) => (
                            <option key={i} value={new Date().getFullYear() + i}>
                            {new Date().getFullYear() + i}
                            </option>
                        ))}
                        </select>
                    </div>
                    </div>

                    </div>
                </div>
                <div classNameName="col-md-6">
                    <div classNameName="form-group">
                        <label htmlFor="cc-cvc" classNameName="control-label">
                        CARD / CVC
                        </label>
                        <input
                        id="cc-cvc"
                        type="tel"
                        classNameName="input-lg form-control cc-cvc"
                        autoComplete="off"
                        placeholder="xxx"
                        value={cvc}
                        onChange={(e) => setCvc(e.target.value)}
                        required
                        />
                    </div>
                    </div>
                </div>
                <div classNameName="form-group">
                    <label htmlFor="card-holder" classNameName="control-label">
                    CARD HOLDER NAME
                    </label>
                    <input
                    id="card-holder"
                    type="text"
                    classNameName="input-lg form-control"
                    value={cardHolder}
                    onChange={(e) => setCardHolder(e.target.value)}
                    />
                    </div><br></br>
                <div classNameName="form-control">
                    <input
                    value="MAKE PAYMENT"
                    type="button"
                    classNameName="btnpayment"
                    style={{ fontSize: ".8rem" }}
                    onClick={handlePayment}
                    />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    <Footer/>
    </div>
    );
}



