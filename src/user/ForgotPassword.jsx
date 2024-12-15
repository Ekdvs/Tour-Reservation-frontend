import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from '../compodent/Footer'; // Ensure this is correctly implemented in your project

export default function ForgotPassword() {
    const [userEmail, setUserEmail] = useState('');
    const [message, setMessage] = useState(null); // Used to show feedback messages to the user
    const navigate = useNavigate();

    const handleSendOtpMethod = async (e) => {
        e.preventDefault();

        if (!userEmail.trim()) {
            setMessage({ text: 'Email field cannot be empty.', className: 'alert alert-warning' });
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/user/sendotpcode', { userEmail });

            if (response.status === 200) {
                setMessage({ text: response.data, className: 'alert alert-success' });
                localStorage.setItem('userEmail', userEmail);

                // Navigate to the Verify OTP page after 2 seconds
                setTimeout(() => navigate('/VerifyOTP'), 2000);
            } else {
                setMessage({ text: response.data || 'Unexpected error occurred.', className: 'alert alert-danger' });
            }
        } catch (error) {
            const errorMessage =
                error.response?.status === 400
                    ? 'Invalid email address. Please try again.'
                    : 'Failed to send OTP. Please try again.';
            setMessage({ text: errorMessage, className: 'alert alert-danger' });
        }
    };

    return (
        <div className="bg-light py-3 py-md-5">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
                        <div className="bg-white p-4 p-md-5 rounded shadow-sm">
                            <h2 className="h3">Password Reset</h2>
                            {message && (
                                <div className={message.className} role="alert">
                                    {message.text}
                                </div>
                            )}
                            <h3 className="fs-6 fw-normal text-secondary">
                                Provide the email address associated with your account to recover your password.
                            </h3>
                            <form onSubmit={handleSendOtpMethod}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email:
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        aria-label="Email address for password recovery"
                                        placeholder="name@example.com"
                                        value={userEmail}
                                        onChange={(e) => setUserEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-lg btn-primary">
                                        Reset Password
                                    </button>
                                </div>
                            </form>
                            <hr className="mt-5 mb-4 border-secondary-subtle" />
                            <div className="d-flex gap-4 justify-content-end">
                                <a href="/Login" className="link-secondary text-decoration-none">
                                    Login
                                </a>
                                <a href="/Register" className="link-secondary text-decoration-none">
                                    New Register
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
