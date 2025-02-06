import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../compodent/Footer";
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CardPayment() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState({ month: "", year: "" });
  const [cvc, setCvc] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [userId, setUserId] = useState("");
  const [reservationId, setReservationId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const amount = localStorage.getItem("totalPrice");
    const user = localStorage.getItem("userEmail");
    const reservation = localStorage.getItem("reservationId");

    if (amount) {
      setTotalPrice(parseFloat(amount));
    }
    if (user) {
      setUserId(user);
    }
    if (reservation !== null) {
      setReservationId(reservation);
    } else {
      toast.error("Reservation ID not found.");
    }
  }, []);

  // Function to validate Visa or MasterCard card number
  const getPaymentMethod = (number) => {
    const visaRegex = /^4\d{12}(\d{3})?$/; // Visa card pattern
    const masterCardRegex = /^(5[1-5]\d{14}|2[2-7]\d{14})$/; // MasterCard pattern
    if (visaRegex.test(number)) return "Visa";
    if (masterCardRegex.test(number)) return "MasterCard";
    return null; // Return null if card is not valid
  };

  const validateCardNumber = (number) => {
    return getPaymentMethod(number) !== null;
  };

  const validateExpiry = ({ month, year }) => {
    if (!month || !year) return false;
    const currentDate = new Date();
    const inputDate = new Date(`${year}-${month}-01`);
    return inputDate > currentDate;
  };

  const validateCVC = (cvc) => /^[0-9]{3}$/.test(cvc);
  const validateCardHolder = (name) => name.trim().length > 0;

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!validateCardNumber(cardNumber)) {
      toast.error("Invalid Visa or MasterCard number.");
      return;
    }
    if (!validateExpiry(expiry)) {
      toast.error("Invalid expiry date.");
      return;
    }
    if (!validateCVC(cvc)) {
      toast.error("CVC must be 3 digits.");
      return;
    }
    if (!validateCardHolder(cardHolder)) {
      toast.error("Cardholder name is required.");
      return;
    }

    const paymentMethod = getPaymentMethod(cardNumber); // Get the payment method (Visa/MasterCard)

    setIsProcessing(true);
    try {
      const response = await axios.post("https://online-travel-planning-production.up.railway.app/payment/create", {
        userEmail: userId, // Send user email from state
        reservationId,
        amount: totalPrice,
        paymentMethod, // Send Visa/MasterCard as payment method
      });

      if (response.status === 200) {
        toast.success(`Payment of $${totalPrice} Successful!`);

        // Clear localStorage after successful payment
        localStorage.removeItem("userEmail");
        localStorage.removeItem("reservationId");
        localStorage.removeItem("totalPrice");

        // Show total price message before navigating
        setTimeout(() => {
          toast.info(`You have successfully paid $${totalPrice}. Navigating to home page...`);
          navigate("/");  // Redirect to home page after 2 seconds
        }, 2000);
      }
    } catch (error) {
      toast.error("Payment failed. Please try again.");
      setIsProcessing(false);
    }
  };

  return (
    <div>
      <Topbar />
      <Navbar />
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
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <div className="container mt-5 p-4 shadow rounded bg-light" style={{ maxWidth: "500px" }}>
        <h2 className="text-center mb-4">Secure Payment</h2>
        <form onSubmit={handlePayment}>
          <div className="mb-3">
            <label className="form-label" style={{ color: 'blue', fontSize: '16px' }}>Card Number</label>
            <input
              type="text"
              className="form-control"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Enter Visa/MasterCard number"
              maxLength="16"
            />
          </div>
          <div className="mb-3 d-flex">
            <div className="me-2">
              <label className="form-label" style={{ color: 'blue', fontSize: '16px' }}>Expiry Month</label>
              <select
                className="form-control"
                value={expiry.month}
                onChange={(e) => setExpiry({ ...expiry, month: e.target.value })}
                style={{ color: 'blue', fontSize: '16px' }}
              >
                <option value="">MM</option>
                {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                  <option key={month} value={month < 10 ? `0${month}` : month}>
                    {month < 10 ? `0${month}` : month}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="form-label" style={{ color: 'blue', fontSize: '16px' }}>Expiry Year</label>
              <select
                className="form-control"
                value={expiry.year}
                onChange={(e) => setExpiry({ ...expiry, year: e.target.value })}
                style={{ color: 'blue', fontSize: '16px' }}
              >
                <option value="">YY</option>
                {Array.from({ length: 10 }, (_, i) => 2025 + i).map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ color: 'blue', fontSize: '16px' }}>CVC</label>
            <input
              type="text"
              className="form-control"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              placeholder="3-digit CVC"
              maxLength="3"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ color: 'blue', fontSize: '16px' }}>Cardholder Name</label>
            <input
              type="text"
              className="form-control"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
              placeholder="Enter cardholder name"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 mt-4"
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Pay Now'}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
