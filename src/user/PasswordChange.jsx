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
        setTimeout(() => navigate('/My_Profile'), 2000); 
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
      <div className="container-fluid bg-primary text-white text-center py-5">
        <h3 className="display-3 mb-4">Change Password</h3>
        <ol className="breadcrumb justify-content-center">
          <li className="breadcrumb-item">
            <a href="/" className="text-white">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/My_Profile" className="text-white">Profile</a>
          </li>
          <li className="breadcrumb-item active">Change Password</li>
        </ol>
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
