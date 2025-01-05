import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';  

import Topbar from '../compodent/Topbar';
import Navbar from '../compodent/Navbar';
import Footer from '../compodent/Footer';

export default function Register() {
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const [showRepeatPassword, setShowRepeatPassword] = useState(false); 
  const navigate = useNavigate();

 
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;


  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;


  const nameRegex = /^[a-zA-Z]+$/;

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !userEmail || !password || !repeatPassword) {
      toast.error('All fields are required. Please fill them out.');
      return;
    }


    if (!nameRegex.test(firstName)) {
      toast.error('First name should only contain alphabetic characters.');
      return;
    }


    if (!nameRegex.test(lastName)) {
      toast.error('Last name should only contain alphabetic characters.');
      return;
    }


    if (!emailRegex.test(userEmail)) {
      toast.error('Please enter a valid email address.');
      return;
    }


    if (!passwordRegex.test(password)) {
      toast.error('Password must be at least 8 characters long, contain at least one uppercase letter and one number.');
      return;
    }


    if (password !== repeatPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/user/register', {
        firstName,
        lastName,
        userEmail,
        password,
      });

      if (response.data === 'User already registered as a user') {
        toast.error(response.data);
      } else {
        toast.success('Registration successful!');
        setTimeout(() => navigate('/login'), 2000);
      }
    } catch (error) {
      toast.error('Error occurred, registration failed.');
    }
  };

  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h3 className="text-white display-3 mb-4">Register</h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><a href="/Contact">Pages</a></li>
            <li className="breadcrumb-item active text-white">Register</li>
          </ol>
        </div>
      </div>

      <div className="container my-5">
        <div className="card mx-auto" style={{ maxWidth: '500px' }}>
          <div className="card-body">
            <h5 className="card-title text-center">Sign Up</h5>
            <form onSubmit={handleRegister}>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your first name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter your last name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="userEmail" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="userEmail"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
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
              <div className="mb-3">
                <label htmlFor="repeatPassword" className="form-label">Re-enter Password</label>
                <div className="input-group">
                  <input
                    type={showRepeatPassword ? 'text' : 'password'}
                    className="form-control"
                    id="repeatPassword"
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    placeholder="Re-enter your password"
                  />
                  <button
                    type="button"
                    className="input-group-text"
                    onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                  >
                    {showRepeatPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              <button type="submit" className="btn btn-primary w-100">Sign Up</button>
            </form>
            <div className="text-center mt-3">
              <a href="/login">Already a Member?</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      
      {/* ToastContainer for toasts */}
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
    </>
  );
}
