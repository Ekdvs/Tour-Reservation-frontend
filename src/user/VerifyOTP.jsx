import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";
import { FaCheckCircle, FaTimesCircle, FaArrowLeft, FaCalendarAlt, FaMoneyBillWave, FaUser, FaClock } from "react-icons/fa";
export default function VerifyOTP() {
  const [otp, setOtp] = useState(""); // Stores the OTP entered by the user
  const [email] = useState(localStorage.getItem("userEmail") || ""); // Fetch the email from localStorage
  const [countdown, setCountdown] = useState(180); // 3-minute countdown for OTP expiration
  const navigate = useNavigate();

  // Validate if the OTP entered is a 6-digit number
  const isValidOtp = (otp) => /^[0-9]{6}$/.test(otp);

  // Handle OTP form submission
  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Email is missing. Please try again.");
      return;
    }

    if (!otp.trim()) {
      toast.warning("OTP cannot be empty.");
      return;
    }

    if (!isValidOtp(otp)) {
      toast.error("Invalid OTP. Please enter a 6-digit OTP.");
      return;
    }

    try {
      const response = await axios.post(
        `https://online-travel-planning-production.up.railway.app/user/verify-code`,
        {
          userEmail: email,
          recoveryCode: otp,
        }
      );

      if (response.status === 200 && response.data.success) {
        toast.success("OTP verified successfully! Redirecting...");
        setTimeout(() => navigate("/PasswordChange"), 2000); // Redirect to password change page
      } else {
        toast.error(response.data.message || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An error occurred. Please try again.";
      toast.error(errorMessage);
    }
  };

  // Countdown timer logic for OTP expiration
  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => clearInterval(timer); // Cleanup interval on unmount
    } else {
      toast.error("OTP expired. Please request a new one.");
      setTimeout(() => navigate("/ForgotPassword"), 2000); // Redirect to forgot password page
    }
  }, [countdown, navigate]);

  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="container-fluid bg-breadcrumb">
        <div
          className="container text-center py-5"
          style={{ maxWidth: "900px" }}
        >
          <h3 className="text-white display-3 mb-4">Password Reset</h3>
           <a href="/" className="text-white"><button className="btn btn-outline-light btn-lg" >
                            <FaArrowLeft className="me-2" /> Password Reset
                          </button></a>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `linear-gradient(rgba(19, 53, 123, .6), rgba(19, 53, 123, .6)), url(../img/R.jpeg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="bg-white p-4 p-md-5 rounded shadow-sm border">
                <h4 className="text-center mb-4">Enter OTP</h4>
                <form onSubmit={handleOtpSubmit}>
                  <div className="mb-3">
                    <p className="text-dark">
                      Enter the 6-digit OTP sent to your email.
                    </p>
                    {countdown > 0 && (
                      <p className="text-danger">
                        Time remaining: {Math.floor(countdown / 60)}:
                        {countdown % 60}
                      </p>
                    )}
                    <input
                      type="text"
                      className="form-control"
                      id="otp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="Enter OTP"
                      maxLength={6}
                      required
                    />
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-lg btn-success" type="submit">
                      Verify OTP
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}
