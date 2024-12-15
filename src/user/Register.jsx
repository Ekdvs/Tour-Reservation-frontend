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
        setMessage({ text: 'Passwords do not match!', class: 'alert alert-danger' });
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
          setMessage({ text: response.data, class: 'alert alert-danger' });
        } else {
          setMessage({ text: 'Registration successful!', class: 'alert alert-success' });
          setTimeout(() => navigate('/login'), 2000);
        }
      } catch (error) {
        setMessage({ text: 'Error occurred, registration failed.', class: 'alert alert-danger' });
      }
    } else {
      setMessage({ text: 'All fields are required. Please fill them out.', class: 'alert alert-warning' });
    }
  };

  return (
    <>
      <Topbar/>
      <Navbar/>
      
      <div className="container-fluid bg-primary text-white text-center py-5">
        <h3 className="display-3 mb-4">Register</h3>
        <ol className="breadcrumb justify-content-center">
          <li className="breadcrumb-item">
            <a href="/" className="text-white">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/Contact" className="text-white">Pages</a>
          </li>
          <li className="breadcrumb-item active">Register</li>
        </ol>
      </div>

      <div className="container my-5">
        {message && <div className={message.class}>{message.text}</div>}
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
    </>
  );
}
