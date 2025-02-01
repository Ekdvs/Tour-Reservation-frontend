import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export default function LogOut() {
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      try {
        // Retrieve the token from localStorage
        const token = localStorage.getItem("userToken");

        if (!token) {
          toast.error("No active session found.");
          navigate("/login");
          return;
        }

        // Call the logout API and pass the token in the Authorization header
        const response = await axios.post(
          "http://localhost:8080/logout",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Check if the response status is 200 (successful logout)
        if (response.status === 200) {
          // Clear localStorage
          localStorage.removeItem("userToken");
          localStorage.removeItem("userEmail");
          localStorage.removeItem("userRole");

          // Show success message
          toast.success("Logged out successfully!");

          // Redirect to login page after a short delay
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          // Handle unexpected response
          throw new Error("Unexpected response from server.");
        }
      } catch (error) {
        console.error("Logout error:", error.message);
        toast.error("Logout failed. Please try again.");
      }
    };

    performLogout();
  }, [navigate]);

  return (
    <div
      className="logout-container"
      style={{ textAlign: "center", marginTop: "50px", fontSize: "50px" }}
    >
      <h2>Logging out...</h2>
      <p>You are being logged out. Please wait.</p>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
