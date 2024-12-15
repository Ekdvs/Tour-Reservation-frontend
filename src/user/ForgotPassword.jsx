import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Topbar from '../compodent/Topbar';
import Navbar from '../compodent/Navbar';
import Footer from '../compodent/Footer';

export default function ForgotPassword() {
    const [userEmail, setUserEmail] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handlesentotpmethod = async (e) => {
        e.preventDefault();
        
        if (!userEmail) {
            setMessage({ text: 'Please fill in all fields.', className: 'alert alert-warning' });
            return;
          }
          try {
            const response = await axios.post('http://localhost:8080/user/sendotpcode', {
              userEmail,
              
            });
      
            if (response.data === 'OTP sent successfully') {
                setMessage({ text: 'OTP sent to your email. Please check your inbox.', className: 'alert alert-success' });
                localStorage.setItem('userEmail', userEmail);
                
                setTimeout(() => navigate('/VerifyOTP'), 2000);
            } else {
                setMessage({ text: response.data || 'Failed to send OTP.', className: 'alert alert-danger' });
            }
          } catch (error) {
            setMessage({ text: 'Failed to send OTP. Please try again.', className: 'alert alert-danger' });
          }
    
        
      };

  return (
    <div>
        <div>
        <Navbar/>
       
        </div>
        
        
        <div className="bg-light py-3 py-md-5">
  <div className="container">
    <div className="row justify-content-md-center">
      <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
        <div className="bg-white p-4 p-md-5 rounded shadow-sm">
          <div className="row">
            <div className="col-12">
              <div className="mb-5">
                <h2 className="h3">Password Reset</h2>
                {message && <div classNameName={message.className}>{message.text}
              </div>}
                <h3 className="fs-6 fw-normal text-secondary m-0">Provide the email address associated with your account to recover your password.</h3>
              </div>
            </div>
          </div>
          <form onSubmit={handlesentotpmethod}>
            <div className="row gy-3 gy-md-4 overflow-hidden">
              <div className="col-12">
                <label for="email" className="form-labe">Email <span className="text-danger">*</span></label>
                <input
                        type="email"
                        classNameName="form-control"
                        name="email"
                        id="email"
                        placeholder="name@example.com"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        required
                      />
              </div>
              <div className="col-12">
                <div className="d-grid">
                  <button className="btn btn-lg btn-primary" type="submit">Reset Password</button>
                </div>
              </div>
            </div>
          </form>
          <div className="row">
            <div className="col-12">
              <hr className="mt-5 mb-4 border-secondary-subtle"/>
              <div className="d-flex gap-4 justify-content-end">
                <a href="/Login" className="link-secondary text-decoration-none">Login</a>
                <a href="/Register" className="link-secondary text-decoration-none">New Register</a>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  </div>
</div>
      <Footer/>
    </div>
  )
}
