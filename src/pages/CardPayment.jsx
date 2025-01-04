import React from "react";
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";

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
            <div className="container-fluid bg-breadcrumb">
            <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
                <h3 className="text-white display-3 mb-4">Online Payment</h3>
                <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item"><a href="/Travel_Booking">Pages</a></li>
                <li className="breadcrumb-item active text-white">Online Booking</li>
                </ol>
            </div>
            </div>
            <div className="padding" >
            <div className="row">
    
        <div className="container-fluid d-flex justify-content-center">
            <div className="col-sm-8 col-md-6">
            <div className="card">
            <div className="bg">
                
            <div className="card-header">
            <div className="row">
                    

                    <div className="col-md-6">
                    <span>CREDIT/DEBIT CARD PAYMENT</span>
                    </div>
                    <div className="col-md-6 text-right" style={{ marginTop: "-5px" }}>
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
                <div className="card-body" style={{ height: "350px" }}>
                <div className="form-group">
                    <label htmlFor="cc-number" className="control-label">
                    CARD NUMBER
                    </label>
                    <input
                    id="cc-number"
                    type="tel"
                    className="input-lg form-control cc-number"
                    autoComplete="cc-number"
                    placeholder="xxxx xxxx xxxx xxxx"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                    />
                </div>
                <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                    <label htmlFor="cc-exp" className="control-label">
                        CARD EXPIRY
                    </label>
                    <div className="form-group">
                    <label htmlFor="cc-exp" className="control-label">
                        
                    </label>
                    <div className="d-flex">
                        {/* Month Dropdown */}
                        <select
                        id="cc-exp-month"
                        className="form-control"
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
                        className="form-control"
                        value={expiry.year}
                        onChange={(e) => setExpiry({ ...expiry, year: e.target.value })}
                        required
                        >
                            <option value="" disabled>
                            Year
                            </option>
                        </select>
                        



