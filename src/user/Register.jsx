import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from '../compodent/Topbar';
import Navbar from '../compodent/Navbar';
import Footer from '../compodent/Footer';

export default function Register() {
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Email validation 
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // Password validation (at least 8 characters, 1 uppercase, 1 number)
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

  // Name validation regex 
  const nameRegex = /^[a-zA-Z]+$/;

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !userEmail || !password || !repeatPassword) {
      setMessage({ text: 'All fields are required. Please fill them out.', className: 'alert alert-danger' });
      return;
    }

    // Validate first name (only alphabetic characters)
    if (!nameRegex.test(firstName)) {
      setMessage({ text: 'First name should only contain alphabetic characters.', className: 'alert alert-danger' });
      return;
    }

    // Validate last name (only alphabetic characters)
    if (!nameRegex.test(lastName)) {
      setMessage({ text: 'Last name should only contain alphabetic characters.', className: 'alert alert-danger' });
      return;
    }

    // Validate email format
    if (!emailRegex.test(userEmail)) {
      setMessage({ text: 'Please enter a valid email address.', className: 'alert alert-danger' });
      return;
    }

    // Validate password strength
    if (!passwordRegex.test(password)) {
      setMessage({
        text: 'Password must be at least 8 characters long, contain at least one uppercase letter and one number.',
        className: 'alert alert-danger',
      });
      return;
    }

    // Validate if passwords match
    if (password !== repeatPassword) {
      setMessage({ text: 'Passwords do not match!', className: 'alert alert-danger' });
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
        setMessage({ text: response.data, className: 'alert alert-danger' });
      } else {
        setMessage({ text: 'Registration successful!', className: 'alert alert-success' });
        setTimeout(() => navigate('/login'), 2000);
      }
    } catch (error) {
      setMessage({ text: 'Error occurred, registration failed.', className: 'alert alert-danger' });
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
            {message && <div className={message.className}>{message.text}</div>}
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
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="repeatPassword" className="form-label">Re-enter Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="repeatPassword"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  placeholder="Re-enter your password"
                />
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
    </>
  );
}
