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
          "https://online-travel-planning-production.up.railway.app/user/logout",
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
        console.error("Logout error:", error);
        toast.error("Logout failed. Please try again.");
        
        // Still redirect to login after error, but with a different message
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    };

    performLogout();
  }, [navigate]);

  return (
    <div className="logout-container" style={{ 
      textAlign: "center", 
      marginTop: "50px", 
      padding: "20px",
      maxWidth: "500px",
      margin: "50px auto",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
      backgroundColor: "#fff"
    }}>
      <h2 style={{ color: "#333", marginBottom: "20px" }}>Logging Out...</h2>
      <p style={{ fontSize: "18px", color: "#666" }}>You are being logged out. Please wait.</p>
      <div className="spinner" style={{
        margin: "30px auto",
        width: "40px",
        height: "40px",
        border: "4px solid rgba(0, 0, 0, 0.1)",
        borderLeftColor: "#09f",
        borderRadius: "50%",
        animation: "spin 1s linear infinite"
      }}></div>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default LogOut;