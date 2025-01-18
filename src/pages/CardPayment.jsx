import React, { useState } from "react";
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CardPayment() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState({ month: "", year: "" });
  const [cvc, setCvc] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  // Validate Visa and MasterCard number
  const validateCardNumber = (number) => {
    const visaRegex = /^4\d{12}(\d{3})?$/;
    const masterCardRegex = /^(5[1-5]\d{14}|222[1-9]\d{12}|22[3-9]\d{13}|23[0-9]\d{12}|24[0-9]\d{12}|25[0-9]\d{12}|26[0-9]\d{12}|27[0-9]\d{12}|2720\d{12})$/;
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
      newErrors.cardNumber = "Card number must be valid for Visa or MasterCard.";
    }
    if (!validateExpiry(expiry)) {
      newErrors.expiry = "Expiry date must be valid and in the future.";
    }
    if (!validateCVC(cvc)) {
      newErrors.cvc = "CVC must be 3 digits.";
    }
    if (!validateCardHolder(cardHolder)) {
      newErrors.cardHolder = "Cardholder name is required.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsProcessing(true);
      try {
        const paymentData = {
          cardNumber,
          expiry,
          cvc,
          cardHolder,
          amount: 100, // Example amount, you can set it dynamically
        };

        console.log("Sending payment data:", paymentData); // Debugging

        // Make an API request to process payment
        const response = await axios.post("http://localhost:8080/payment/process", paymentData);

        console.log("Payment response:", response); // Debugging

        if (response.data && response.data.success) {
          // Redirect to the success page or show success message
          alert("Payment Successful!");
          navigate("/payment/success"); // Replace with your success route
        } else {
          // Handle failure if the response is not as expected
          alert("Payment failed! Please try again.");
        }
      } catch (error) {
        console.error("Payment error:", error); // Log the error for debugging
        if (error.response) {
          // Handle errors from the backend
          alert(`Payment failed: ${error.response.data.message || "Please try again."}`);
        } else {
          // Handle other types of errors (e.g., network issues)
          alert("Payment failed due to a network error. Please try again.");
        }
      } finally {
        setIsProcessing(false);
      }
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
      <div className="padding">
        <div className="row">
          <div className="container-fluid d-flex justify-content-center">
            <div className="col-sm-8 col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="row">
                    <div className="col-md-6">
                      <span>CREDIT/DEBIT CARD PAYMENT</span>
                    </div>
                    <div className="col-md-5 text-right">
                      <img src="https://img.icons8.com/color/36/000000/visa.png" alt="Visa" />
                      <img src="https://img.icons8.com/color/36/000000/mastercard.png" alt="Mastercard" />
                      <img src="https://img.icons8.com/color/36/000000/amex.png" alt="Amex" />
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="cc-number" className="control-label">CARD NUMBER</label>
                    <input
                      id="cc-number"
                      type="tel"
                      className="input-lg form-control cc-number"
                      autoComplete="cc-number"
                      placeholder="xxxx xxxx xxxx xxxx"
                      maxLength={16}
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      required
                    />
                    {errors.cardNumber && <small className="text-danger">{errors.cardNumber}</small>}
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="cc-exp" className="control-label">CARD EXPIRY</label>
                        <div className="d-flex">
                          <select
                            id="cc-exp-month"
                            className="form-control"
                            style={{ marginRight: "10px" }}
                            value={expiry.month}
                            onChange={(e) => setExpiry({ ...expiry, month: e.target.value })}
                            required
                          >
                            <option value="" disabled>Month</option>
                            {Array.from({ length: 12 }, (_, i) => (
                              <option key={i + 1} value={String(i + 1).padStart(2, "0")}>
                                {String(i + 1).padStart(2, "0")}
                              </option>
                            ))}
                          </select>
                          <select
                            id="cc-exp-year"
                            className="form-control"
                            value={expiry.year}
                            onChange={(e) => setExpiry({ ...expiry, year: e.target.value })}
                            required
                          >
                            <option value="" disabled>Year</option>
                            {Array.from({ length: 10 }, (_, i) => (
                              <option key={i} value={new Date().getFullYear() + i}>
                                {new Date().getFullYear() + i}
                              </option>
                            ))}
                          </select>
                        </div>
                        {errors.expiry && <small className="text-danger">{errors.expiry}</small>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="cc-cvc" className="control-label">CARD / CVC</label>
                        <input
                          id="cc-cvc"
                          type="tel"
                          className="input-lg form-control cc-cvc"
                          autoComplete="off"
                          placeholder="xxx"
                          maxLength={3}
                          value={cvc}
                          onChange={(e) => setCvc(e.target.value)}
                          required
                        />
                        {errors.cvc && <small className="text-danger">{errors.cvc}</small>}
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="card-holder" className="control-label">CARD HOLDER NAME</label>
                    <input
                      id="card-holder"
                      type="text"
                      className="input-lg form-control"
                      value={cardHolder}
                      onChange={(e) => setCardHolder(e.target.value)}
                      required
                    />
                    {errors.cardHolder && <small className="text-danger">{errors.cardHolder}</small>}
                  </div>
                  <div className="form-control">
                    <button
                      type="button"
                      className="btnpayment"
                      style={{ fontSize: ".8rem" }}
                      onClick={handlePayment}
                      disabled={isProcessing}
                    >
                      {isProcessing ? "Processing..." : "MAKE PAYMENT"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
