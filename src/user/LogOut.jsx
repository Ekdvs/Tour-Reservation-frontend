import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      try {
        // Call the logout API to destroy the session in the backend
        await axios.post(
          "https://online-travel-planning-production.up.railway.app/user/logout", // Corrected endpoint
          {},
          { withCredentials: true } // Ensures session cookies are included
        );

        // Clear local storage after API response
        localStorage.clear();

        // Show success message
        toast.success("Logged out successfully!");

        // Redirect to login page after a delay
        setTimeout(() => {
          navigate("/login"); // React Router navigation
        }, 3000);
      } catch (error) {
        console.error("Logout error:", error.message);
        toast.error("Logout failed. Please try again.");
      }
    };

    performLogout();
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontSize: "30px" }}>
      <h2>Logging Out...</h2>
      <p>You are being logged out. Please wait.</p>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default LogOut;
