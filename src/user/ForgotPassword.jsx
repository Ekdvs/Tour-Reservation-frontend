import React, { useState } from 'react'
import Topbar from '../compodent/Topbar'
import Navbar from '../compodent/Navbar'
import Footer from '../compodent/Footer'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function ForgotPassword() {

    const [userEmail, setUserEmail] = useState('');
    const navigate = useNavigate();

    const isValidEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };
    const handleSendOtpMethod = async (e) => {
        e.preventDefault();

        if(!userEmail.trim())
        {
            toast.error('Email field cannot be empty.');
            return;
        }

        if(!isValidEmail(userEmail))
        {
            toast.error('Please enter a valid email address.');
            return;
        }

        try{
            const response = await axios.post('http://localhost:8080/user/sendotpcode', { userEmail });

           
            if(response.status === 200)
            {
                toast.success('OTP sent successfully. Please check your email.');
                localStorage.setItem('userEmail', userEmail);
                setTimeout(() => navigate('/VerifyOTP'), 2000);
            }
            else {
                toast.error(response.data || 'Unexpected error occurred.');  // Error toast message
            }

        }
        catch(error){
            const errorMessage =
                error.response?.status === 400
                    ? 'Invalid email address. Please try again.'
                    : 'Failed to send OTP. Please try again.';
            toast.error(errorMessage);

        }

        
    };
    
  return (
    <div>
    <Topbar/>
    <Navbar/>
        <div className="container-fluid bg-breadcrumb">
            <div className="container text-center py-5" style={{maxWidth:"900px"}}>
                <h3 className="text-white display-3 mb-4">Password Reset</h3>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href="/Contact">Pages</a></li>
                    <li className="breadcrumb-item active text-white">Password Reset</li>
                </ol>    
            </div>
        </div>
        <div classNameName="bg-light py-3 py-md-5">
                <div classNameName="container">
                    <div classNameName="row justify-content-md-center">
                        <div classNameName="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
                            <div classNameName="bg-white p-4 p-md-5 rounded shadow-sm">
                                <h2 classNameName="h3">Password Reset</h2>
                                <h3 classNameName="fs-6 fw-normal text-secondary">
                                    Provide the email address associated with your account to recover your password.
                                </h3>
                                <form onSubmit={handleSendOtpMethod}>
                                    <div classNameName="mb-3">
                                        <label htmlFor="email" classNameName="form-label" style={{ fontSize: '18px', color: 'black', fontWeight: 'normal' }}>
                                            Email:
                                        </label>
                                        <input
                                            type="email"
                                            classNameName="form-control"
                                            id="email"
                                            aria-label="Email address for password recovery"
                                            placeholder="name@example.com"
                                            value={userEmail}
                                            onChange={(e) => setUserEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div classNameName="d-grid">
                                        <button type="submit" classNameName="btn btn-lg btn-primary">
                                            Reset Password
                                        </button>
                                    </div>
                                </form>
                                <hr classNameName="mt-5 mb-4 border-secondary-subtle" />
                                <div classNameName="d-flex gap-4 justify-content-end">
                                    <a href="/Login" classNameName="link-secondary text-decoration-none">
                                        Login
                                    </a>
                                    <a href="/Register" classNameName="link-secondary text-decoration-none">
                                        New Register
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>


    <Footer/>
    {/* ToastContainer for toasts */}
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
  )
}
