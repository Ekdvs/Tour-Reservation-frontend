import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function VerifyOTP() {
    const [otp, setOtp] = useState('');
    const [email, setEmail] = useState(localStorage.getItem('userEmail') || ''); // Fetch stored email
    const [message, setMessage] = useState(null); // For success/error messages
    const navigate = useNavigate();

    const handleOtpSubmit = async (e) => {
        e.preventDefault();

        if (!otp.trim()) {
            setMessage({ text: 'OTP cannot be empty.', className: 'alert alert-warning' });
            return;
        }

        try {
            // Send OTP verification request to the backend
            const response = await axios.post('http://localhost:8080/user/verify-code', {
                userEmail: email,
                recoveryCode: otp,
            });

            if (response.status === 200 && response.data === true) {
                // OTP verified successfully
                setMessage({ text: 'OTP verified successfully! Redirecting...', className: 'alert alert-success' });

                // Redirect to the change password page after 2 seconds
                setTimeout(() => navigate('/PasswordChange'), 2000);
            } else {
                // Handle incorrect OTP
                setMessage({ text: 'Invalid OTP. Please try again.', className: 'alert alert-danger' });
            }
        } catch (error) {
            setMessage({
                text: error.response?.data || 'An error occurred. Please try again.',
                className: 'alert alert-danger',
            });
        }
    };

    return (
        <div className="bg-light py-3 py-md-5">
            <div className="container">
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
