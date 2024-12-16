import React, { useState } from 'react';
import axios from 'axios';
import Topbar from '../compodent/Topbar';
import Navbar from '../compodent/Navbar';
import Footer from '../compodent/Footer';
import { useNavigate } from 'react-router-dom';

export default function ChangePassword() {
  const [Password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChangePassword = async (e) => {
    e.preventDefault();

    // Validate password fields
    if (!Password || !confirmPassword) {
      setMessage({ text: 'Please fill in all fields.', className: 'alert alert-warning' });
      return;
    }

    if (Password !== confirmPassword) {
      setMessage({ text: 'Passwords do not match.', className: 'alert alert-danger' });
      return;
    }

    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) {
      setMessage({ text: 'User email not found. Please log in again.', className: 'alert alert-danger' });
      return;
    }

    try {
      
      const response = await axios.post(`http://localhost:8080/user/update-password/${userEmail}`, {
        Password, 
      });

      // Check response from backend
      if (response.data === "Password updated successfully.") {
        setMessage({ text: 'Password changed successfully!', className: 'alert alert-success' });
        setTimeout(() => navigate('/Login'), 2000); 
      } else {
        setMessage({ text: response.data || 'Failed to update password. Please try again.', className: 'alert alert-danger' });
      }
    } catch (error) {
      setMessage({ text: 'An error occurred. Please try again.', className: 'alert alert-danger' });
    }
  };

  return (
    <div>
      <Topbar />
      <Navbar />
      <div class="container-fluid bg-breadcrumb">
            <div class="container text-center py-5" style={{maxWidth:"900px"}}>
                <h3 class="text-white display-3 mb-4">Change Password</h3>
                <ol class="breadcrumb justify-content-center mb-0">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item"><a href="/My_Profile">Profile</a></li>
                    <li class="breadcrumb-item active text-white">Change Password</li>
                </ol>    
            </div>
        </div>
      

      <div className="container my-5">
        <div className="card mx-auto" style={{ maxWidth: '500px' }}>
          <div className="card-body">
            <h5 className="card-title text-center">Change Password</h5>
            {message && <div className={message.className}>{message.text}</div>}
            <form onSubmit={handleChangePassword}>
              <div className="form-group mb-3">
                <label htmlFor="newPassword" className="form-label">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter new password"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  required
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary rounded-pill">Update Password</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
