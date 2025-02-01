import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../compodent/Footer";
import Topbar from "../compodent/Topbar";
import Nav from "../admin/Nav";
import Navbar from "../compodent/Navbar";

export default function CardPayment() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState({ month: "", year: "" });
  const [cvc, setCvc] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const validateCardNumber = (number) => {
    const visaRegex = /^4\d{12}(\d{3})?$/;
    const masterCardRegex = /^(5[1-5]\d{14}|2[2-7]\d{14})$/;
    return visaRegex.test(number) || masterCardRegex.test(number);
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
    const newErrors = {};

    if (!validateCardNumber(cardNumber)) {
      newErrors.cardNumber = "Invalid Visa or MasterCard number.";
    }

    if (!validateExpiry(expiry)) {
      newErrors.expiry = "Invalid expiry date.";
    }

    if (!validateCVC(cvc)) {
      newErrors.cvc = "CVC must be 3 digits.";
    }

    if (!validateCardHolder(cardHolder)) {
      newErrors.cardHolder = "Cardholder name is required.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsProcessing(true);
    try {
      const response = await axios.post("http://localhost:8080/payments/process", {
        cardNumber,
        expiry,
        cvc,
        cardHolder,
      });

      if (response.status === 201) {
        setTimeout(() => {
          navigate("/");
        }, 2000); // Redirect after 2 seconds
      }
    } catch (error) {
      setErrors({ payment: "Payment failed. Please try again." });
      setIsProcessing(false);
    }
  };

  return (
    <div>
      <Topbar/>
      <Navbar/>
    <div className="container mt-5 p-4 shadow rounded bg-light" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-4">Secure Payment</h2>
      {errors.payment && <div className="alert alert-danger">{errors.payment}</div>}
      <form onSubmit={handlePayment}>
        <div className="mb-3">
          <label className="form-label">Card Number</label>
          <input
            type="text"
            className="form-control"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Enter Visa/MasterCard number"
          />
          {errors.cardNumber && <small className="text-danger">{errors.cardNumber}</small>}
        </div>

        <div className="mb-3 d-flex">
          <div className="me-2">
            <label className="form-label">Expiry Month</label>
            <input
              type="text"
              className="form-control"
              value={expiry.month}
              onChange={(e) => setExpiry({ ...expiry, month: e.target.value })}
              placeholder="MM"
            />
          </div>
          <div>
            <label className="form-label">Expiry Year</label>
            <input
              type="text"
              className="form-control"
              value={expiry.year}
              onChange={(e) => setExpiry({ ...expiry, year: e.target.value })}
              placeholder="YY"
            />
          </div>
        </div>
        {errors.expiry && <small className="text-danger d-block">{errors.expiry}</small>}

        <div className="mb-3">
          <label className="form-label">CVC</label>
          <input
            type="text"
            className="form-control"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            placeholder="3-digit CVC"
          />
          {errors.cvc && <small className="text-danger">{errors.cvc}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">Cardholder Name</label>
          <input
            type="text"
            className="form-control"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            placeholder="Enter cardholder name"
          />
          {errors.cardHolder && <small className="text-danger">{errors.cardHolder}</small>}
        </div>

        <button type="submit" className="btn btn-primary w-100" disabled={isProcessing}>
          {isProcessing ? "Processing..." : "Pay Now"}
        </button>
      </form>
    </div>
    <Footer/>
    </div>
  );
}
