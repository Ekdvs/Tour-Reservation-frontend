import React, { useState } from 'react';
import Topbar from '../compodent/Topbar';
import Navbar from '../compodent/Navbar';
import Footer from '../compodent/Footer';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios

export default function ChangePassword() {
  const [Password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  // Password validation function
  const validatePassword = (password) => {
    // Password must be at least 8 characters, include at least one uppercase letter, one digit, and one special character
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };

  // Handle password change
  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (!Password || !confirmPassword) {
      toast.warning('Please fill in all fields.');
      return;
    }

    if (Password !== confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }

    if (!validatePassword(Password)) {
      toast.warning(
        'Password must be at least 8 characters long and include uppercase letters, numbers, and special characters.'
      );
      return;
    }

    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) {
      toast.error('User email not found. Please log in again.');
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:8080/user/update-password/${userEmail}`,
        { Password }
      );

      if (response.data === 'Password updated successfully.') {
        toast.success('Password changed successfully! Redirecting...');
        setTimeout(() => navigate('/Login'), 2000); // Redirect after success
      } else {
        toast.error(response.data || 'Failed to update password. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h3 className="text-white display-3 mb-4">Password Reset</h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/Contact">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">Password Change</li>
          </ol>
        </div>
      </div>
      <div className="container my-5">
        <div className="card mx-auto" style={{ maxWidth: '500px' }}>
          <div className="card-body">
            <h5 className="card-title text-center">Change Password</h5>
            <form onSubmit={handleChangePassword}>
              <div className="form-group mb-3">
                <label htmlFor="Password" className="form-label">
                  New Password
                </label>
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
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
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
                <button type="submit" className="btn btn-primary rounded-pill">
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
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
