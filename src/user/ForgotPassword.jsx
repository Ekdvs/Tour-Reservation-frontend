import React from 'react'
import Topbar from '../compodent/Topbar'
import Navbar from '../compodent/Navbar'
import Footer from '../compodent/Footer'
import { ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

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
            if(response.status === 200)
            {
                toast.success('OTP sent successfully. Please check your email.');
                localStorage.setItem('userEmail', userEmail);
                navigate('/ResetPassword');
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
        <div class="container-fluid bg-breadcrumb">
            <div class="container text-center py-5" style={{maxWidth:"900px"}}>
                <h3 class="text-white display-3 mb-4">Password Reset</h3>
                <ol class="breadcrumb justify-content-center mb-0">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item"><a href="/Contact">Pages</a></li>
                    <li class="breadcrumb-item active text-white">Password Reset</li>
                </ol>    
            </div>
        </div>
        <div className="bg-light py-3 py-md-5">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
                            <div className="bg-white p-4 p-md-5 rounded shadow-sm">
                                <h2 className="h3">Password Reset</h2>
                                <h3 className="fs-6 fw-normal text-secondary">
                                    Provide the email address associated with your account to recover your password.
                                </h3>
                                <form onSubmit={handleSendOtpMethod}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label" style={{ fontSize: '18px', color: 'black', fontWeight: 'normal' }}>
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
