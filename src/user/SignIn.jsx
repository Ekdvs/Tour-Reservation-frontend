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
        } else if (role === "travelguide") {
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
      <div classNameName="container-fluid bg-breadcrumb">
        <div classNameName="container text-center py-5" style={{ maxWidth: "900px" }}>
          <h3 classNameName="text-white display-3 mb-4">Login</h3>
          <ol classNameName="breadcrumb justify-content-center mb-0">
            <li classNameName="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li classNameName="breadcrumb-item">
              <a href="/Contact">Pages</a>
            </li>
            <li classNameName="breadcrumb-item active text-white">Login</li>
          </ol>
        </div>
      </div>

      <div classNameName="container my-5">
        <div classNameName="card mx-auto" style={{ maxWidth: "500px" }}>
          <div classNameName="card-body">
            <h5 classNameName="card-title text-center">Sign In</h5>
            <form onSubmit={handleSignIn}>
              <div classNameName="form-group mb-3">
                <label htmlFor="email" classNameName="form-label">
                  Email
                </label>
                <input
                  type="email"
                  classNameName="form-control"
                  id="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div classNameName="form-group mb-3">
                <label htmlFor="password" classNameName="form-label">
                  Password
                </label>
                <div classNameName="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    classNameName="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    classNameName="input-group-text"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <div classNameName="d-grid">
                <button type="submit" classNameName="btn btn-primary rounded-pill">
                  Sign In
                </button>
              </div>
            </form>

            <div classNameName="text-center mt-3">
              <a href="/ForgotPassword" classNameName="text-decoration-none">
                Forgot Password?
              </a>
            </div>
            <div classNameName="text-center mt-3">
              <span>Don't have an account? </span>
              <a href="/register" classNameName="text-decoration-none">
                Sign Up
              </a>
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
