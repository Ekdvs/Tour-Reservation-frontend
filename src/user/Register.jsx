import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from '../compodent/Topbar';
import Navbar from '../compodent/Navbar';

export default function Register() {
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (firstName && lastName && userEmail && password && repeatPassword) {
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
    } else {
      setMessage({ text: 'All fields are required. Please fill them out.', className: 'alert alert-warning' });
    }
  };

  return (
    <>
      <Topbar/>
      <Navbar/>
      
      <div classNameName="container-fluid bg-primary text-white text-center py-5">
        <h3 classNameName="display-3 mb-4">Register</h3>
        <ol classNameName="breadcrumb justify-content-center">
          <li classNameName="breadcrumb-item">
            <a href="/" classNameName="text-white">Home</a>
          </li>
          <li classNameName="breadcrumb-item">
            <a href="/Contact" classNameName="text-white">Pages</a>
          </li>
          <li classNameName="breadcrumb-item active">Register</li>
        </ol>
      </div>

      <div classNameName="container my-5">
        {message && <div classNameName={message.className}>{message.text}</div>}
        <div classNameName="card mx-auto" style={{ maxWidth: '500px' }}>
          <div classNameName="card-body">
            <h5 classNameName="card-title text-center">Sign Up</h5>
            <form onSubmit={handleRegister}>
              <div classNameName="mb-3">
                <label htmlFor="firstName" classNameName="form-label">First Name</label>
                <input
                  type="text"
                  classNameName="form-control"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your first name"
                />
              </div>
              <div classNameName="mb-3">
                <label htmlFor="lastName" classNameName="form-label">Last Name</label>
                <input
                  type="text"
                  classNameName="form-control"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter your last name"
                />
              </div>
              <div classNameName="mb-3">
                <label htmlFor="userEmail" classNameName="form-label">Email</label>
                <input
                  type="email"
                  classNameName="form-control"
                  id="userEmail"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              <div classNameName="mb-3">
                <label htmlFor="password" classNameName="form-label">Password</label>
                <input
                  type="password"
                  classNameName="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>
              <div classNameName="mb-3">
                <label htmlFor="repeatPassword" classNameName="form-label">Re-enter Password</label>
                <input
                  type="password"
                  classNameName="form-control"
                  id="repeatPassword"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  placeholder="Re-enter your password"
                />
              </div>
              <button type="submit" classNameName="btn btn-primary w-100">Sign Up</button>
            </form>
            <div classNameName="text-center mt-3">
              <a href="/login">Already a Member?</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
