import React, { useState } from 'react';
import axios from 'axios';
import Topbar from '../compodent/Topbar'
import Navbar from '../compodent/Navbar'
import Footer from '../compodent/Footer'
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!userEmail || !password) {
      setMessage({ text: 'Please fill in all fields.', className: 'alert alert-warning' });
      return;
    }
    try {
        const response = await axios.post('http://localhost:8080/user/login', {
          userEmail,
          password,
        });
  
        if (response.data === 'Login successful') {
          setMessage({ text: 'Login successful!', className: 'alert alert-success' });
          localStorage.setItem('userEmail', userEmail);
          setTimeout(() => navigate('/My_Profile'),2000);
        } else {
          setMessage({ text: response.data, className: 'alert alert-danger' });
        }
      } catch (error) {
        setMessage({ text: 'Login failed. Please try again.', className: 'alert alert-danger' });
      }

    
  };

  return (
    <div>
      <Topbar/>
      <Navbar/>
      <div classNameName="container-fluid bg-primary text-white text-center py-5">
        <h3 classNameName="display-3 mb-4">Login</h3>
        <ol classNameName="breadcrumb justify-content-center">
          <li classNameName="breadcrumb-item">
            <a href="/" classNameName="text-white">Home</a>
          </li>
          <li classNameName="breadcrumb-item">
            <a href="/Contact" classNameName="text-white">Pages</a>
          </li>
          <li classNameName="breadcrumb-item active">Login</li>
        </ol>
      </div>

      <div classNameName="container my-5">
        {message && <div classNameName={message.className}>{message.text}</div>}
        <div classNameName="card mx-auto" style={{ maxWidth: '500px' }}>
          <div classNameName="card-body">
            <h5 classNameName="card-title text-center">Sign IN</h5>
            <form onSubmit={handleSignIn}>
            <div classNameName="form-group mb-3">
                <label htmlFor="email" classNameName="form-label">Email</label>
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
                <label htmlFor="password" classNameName="form-label">Password</label>
                <input
                  type="password"
                  classNameName="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div classNameName="d-grid">
                <button type="submit" classNameName="btn btn-primary rounded-pill">
                  Sign In
                </button>
              </div>
            </form>
            <div classNameName="text-center mt-3">
              <a href="/ForgotPassword" classNameName="text-decoration-none">Forgot Password?</a>
            </div>
            <div classNameName="text-center mt-3">
              <span>Don't have an account? </span>
              <a href="/register" classNameName="text-decoration-none">Sign Up</a>
            </div>
          </div>
        </div>
      </div>


      <Footer/>
    </div>
  )
}
