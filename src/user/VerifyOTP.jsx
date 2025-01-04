import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css'; 
import Topbar from '../compodent/Topbar';
import Navbar from '../compodent/Navbar';
import Footer from '../compodent/Footer';

export default function VerifyOTP() {
    const [otp, setOtp] = useState(''); 
    const [email] = useState(localStorage.getItem('userEmail') || ''); 
    const [message, setMessage] = useState(null); 
    const [countdown, setCountdown] = useState(180); // 3 minutes in seconds
    const [otpSentTime, setOtpSentTime] = useState(null); // Timestamp of OTP sent time
    const navigate = useNavigate();

   
    const isValidOtp = (otp) => {
        const otpPattern = /^[0-9]{6}$/; 
        return otpPattern.test(otp);
    };

    // Handle OTP submit
    const handleOtpSubmit = async (e) => {
        e.preventDefault();

        if (!email.trim()) {
            toast.error('Email is missing. Please try again.');
            return;
        }
        if (!otp.trim()) {
            toast.warning('OTP cannot be empty.');
            return;
        }
        if (!isValidOtp(otp)) {
            toast.error('Invalid OTP. Please enter a 6-digit OTP.');
            return;
        }

        try {
            const response = await axios.post(
                `http://localhost:8080/user/verify-code?userEmail=${encodeURIComponent(email)}&recoveryCode=${encodeURIComponent(otp)}`
            );

            if (response.status === 200 && response.data.success) {
                toast.success('OTP verified successfully! Redirecting...');
                setTimeout(() => navigate('/PasswordChange'), 5000);
            } else {
                toast.error(response.data.message || 'Invalid OTP. Please try again.');
            }
        } catch (error) {
            const errorMessage =
                error.response?.data?.message ||
                'An error occurred. Please try again.';
            toast.error(errorMessage);
            
        }
    };

    // Start countdown timer when OTP is sent
    useEffect(() => {
        if (otpSentTime) {
            const timer = setInterval(() => {
                const timeRemaining = otpSentTime + 180000- Date.now(); // 180000ms = 3 minutes
                if (timeRemaining <= 0) {
                    clearInterval(timer);
                    setCountdown(0); 
                    toast.error('OTP expired. Please request a new one.');
                    setTimeout(() => navigate('/ForgotPassword'), 2000);
                } else {
                    setCountdown(Math.floor(timeRemaining / 1000)); 
                }
            }, 1000);

            return () => clearInterval(timer); 
        }
    }, [otpSentTime]);

    
    useEffect(() => {
        setOtpSentTime(Date.now()); 
    }, []);

    return (
        <div>
            <Topbar />
            <Navbar />
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
                    <h3 className="text-white display-3 mb-4">Password Reset</h3>
                    <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item"><a href="/Contact">Pages</a></li>
                        <li className="breadcrumb-item active text-white">Password Reset</li>
                        <li className="breadcrumb-item active text-white">Verify OTP</li>
                    </ol>
                </div>
            </div>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="bg-white p-4 p-md-5 rounded shadow-sm border">
                            <h4 className="text-center mb-4">Enter OTP</h4>

                            {message && (
                                <div className={`alert ${message.className}`} role="alert">
                                    {message.text}
                                </div>
                            )}
                            <form onSubmit={handleOtpSubmit}>
                                <div className="mb-3">
                                    <p className="text-dark">Enter OTP CODE</p>
                                    {countdown > 0 && <p className="text-danger">Time remaining: {Math.floor(countdown / 60)}:{countdown % 60}</p>}
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="otp"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        placeholder="Enter OTP"
                                        maxLength={6}
                                        required
                                    />
                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-lg btn-success" type="submit">
                                        Verify OTP
                                    </button>
                                </div>
                            </form>
                        </div>
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
