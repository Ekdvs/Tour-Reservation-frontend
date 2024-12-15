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
      <div class="container-fluid bg-breadcrumb">
            <div class="container text-center py-5" style={{maxWidth:"900px"}}>
                <h3 class="text-white display-3 mb-4">Login</h3>
                <ol class="breadcrumb justify-content-center mb-0">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item"><a href="/Contact">Pages</a></li>
                    <li class="breadcrumb-item active text-white">Login</li>
                </ol>    
            </div>
        </div>
      

      <div className="container my-5">
        
        <div className="card mx-auto" style={{ maxWidth: '500px' }}>
          <div className="card-body">
            <h5 className="card-title text-center">Sign IN</h5>
            {message && <div className={message.className}>{message.text}</div>}
            <form onSubmit={handleSignIn}>
            <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">Email</label>
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
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary rounded-pill">
                  Sign In
                </button>
              </div>
            </form>
            <div className="text-center mt-3">
              <a href="/ForgotPassword" className="text-decoration-none">Forgot Password?</a>
            </div>
            <div className="text-center mt-3">
              <span>Don't have an account? </span>
              <a href="/register" className="text-decoration-none">Sign Up</a>
            </div>
          </div>
        </div>
      </div>


      <Footer/>
    </div>
  )
}
