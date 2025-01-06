import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import Topbar from '../compodent/Topbar';
import Navbar from '../compodent/Navbar';
import Footer from '../compodent/Footer';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 

export default function ChangePassword() {
  const [Password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); 
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };

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
        setTimeout(() => navigate('/Login'), 2000); 
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
      <div classNameName="container-fluid bg-breadcrumb">
        <div classNameName="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h3 classNameName="text-white display-3 mb-4">Password Reset</h3>
          <ol classNameName="breadcrumb justify-content-center mb-0">
            <li classNameName="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li classNameName="breadcrumb-item">
              <a href="/Contact">Pages</a>
            </li>
            <li classNameName="breadcrumb-item active text-white">Password Change</li>
          </ol>
        </div>
      </div>
      <div classNameName="container my-5">
        <div classNameName="card mx-auto" style={{ maxWidth: '500px' }}>
          <div classNameName="card-body">
            <h5 classNameName="card-title text-center">Change Password</h5>
            <form onSubmit={handleChangePassword}>
              <div classNameName="form-group mb-3">
                <label htmlFor="Password" classNameName="form-label">
                  New Password
                </label>
                <div classNameName="input-group">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    classNameName="form-control"
                    id="Password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter new password"
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
              <div classNameName="form-group mb-3">
                <label htmlFor="confirmPassword" classNameName="form-label">
                  Confirm Password
                </label>
                <div classNameName="input-group">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    classNameName="form-control"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                    required
                  />
                  <button
                    type="button"
                    classNameName="input-group-text"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              <div classNameName="d-grid">
                <button type="submit" classNameName="btn btn-primary rounded-pill">
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
