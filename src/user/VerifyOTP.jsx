import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function VerifyOTP() {
    const [otp, setOtp] = useState('');
    const [email] = useState(localStorage.getItem('userEmail') || ''); // Fetch stored email
    const [message, setMessage] = useState(null); // For success/error messages
    const navigate = useNavigate();

    const handleOtpSubmit = async (e) => {
        e.preventDefault();

        
        if (!email.trim()) {
            setMessage({ text: 'Email is missing. Please try again.', className: 'alert alert-danger' });
            return;
        }
        if (!otp.trim()) {
            setMessage({ text: 'OTP cannot be empty.', className: 'alert alert-warning' });
            return;
        }

        try {
           
            const response = await axios.post(
                `http://localhost:8080/user/verify-code?userEmail=${encodeURIComponent(email)}&recoveryCode=${encodeURIComponent(otp)}`
            );

            // Check backend response
            if (response.status === 200 && response.data.success) {
                setMessage({
                    text: 'OTP verified successfully! Redirecting...',
                    className: 'alert alert-success',
                });

                
                setTimeout(() => navigate('/PasswordChange'), 2000);
            } else {
                setMessage({
                    text: response.data.message || 'Invalid OTP. Please try again.',
                    className: 'alert alert-danger',
                });
            }
        } catch (error) {
            
            const errorMessage =
                error.response?.data?.message ||
                'An error occurred. Please try again.'; 

            setMessage({
                text: errorMessage,
                className: 'alert alert-danger',
            });
        }
    };

    return (
      
      <div className="bg-light py-3 py-md-5">
      <div className="container">
      <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
              <h3 className="text-white display-3 mb-4">Password Reset</h3>
              <ol className="breadcrumb justify-content-center mb-0">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li className="breadcrumb-item"><a href="/Contact">Pages</a></li>
                  <li className="breadcrumb-item active text-white">Password Reset</li>  {/* This can be changed if needed */}
                  <li className="breadcrumb-item active text-white">Verify OTP</li> {/* Added this item */}
              </ol>
          </div>
          <div className="row justify-content-md-center">
              <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
                  <div className="bg-white p-4 p-md-5 rounded shadow-sm">
                      <h3>Enter OTP</h3>
  
                      {message && (
                          <div className={message.className} role="alert">
                              {message.text}
                          </div>
                      )}
                      <form onSubmit={handleOtpSubmit}>
                          <div className="mb-3">
                              <label htmlFor="otp" className="form-label">
                                  OTP <span className="text-danger">*</span>
                              </label>
                              <input
                                  type="text"
                                  className="form-control"
                                  id="otp"
                                  value={otp}
                                  onChange={(e) => setOtp(e.target.value)}
                                  placeholder="Enter OTP"
                                  required
                              />
                          </div>
                          <div className="d-grid">
                              <button className="btn btn-lg btn-primary" type="submit">
                                  Verify OTP
                              </button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
  
    );
}
