import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";

export default function SignIn() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!userEmail || !password) {
      toast.error("All fields are required. Please fill them out.");
      return;
    }

    if (!emailRegex.test(userEmail)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/user/login", {
        userEmail,
        password,
      });

      const { message, role } = response.data;

      if (message === "Login successful") {
        localStorage.setItem("userEmail", userEmail);
        localStorage.setItem("userRole", role);

        toast.success("Login successful!");

        // Redirect based on role
        if (role === "user") {
          setTimeout(() => navigate("/Profile"), 2000);
        } else if (role === "admin") {
          setTimeout(() => navigate("/Dashboard"), 2000);
        } else if (role === "travelGuide") {
          setTimeout(() => navigate("/GuideDashboard"), 2000);
        }
      }
    } catch (error) {
      console.error("Login failed. Please try again.", error);
      toast.error("Invalid email or password.");
    }
  };

  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
          <h3 className="text-white display-3 mb-4">Login</h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/Contact">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">Login</li>
          </ol>
        </div>
      </div>

      <div
  style={{
    backgroundImage: "url('../img/R.jpeg')",
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
        <div className="card mx-auto" style={{ maxWidth: "500px" }}>
          <div className="card-body">
            <h5 className="card-title text-center">Sign In</h5>
            <form onSubmit={handleSignIn}>
              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    className="input-group-text"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary rounded-pill">
                  Sign In
                </button>
              </div>
            </form>

            <div className="text-center mt-3">
              <a href="/ForgotPassword" className="text-decoration-none">
                Forgot Password?
              </a>
            </div>
            <div className="text-center mt-3">
              <span>Don't have an account? </span>
              <a href="/register" className="text-decoration-none">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
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
