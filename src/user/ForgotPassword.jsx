import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
    const [userEmail, setUserEmail] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handlesentotpmethod = async (e) => {
        e.preventDefault();
        
        if (!userEmail) {
            setMessage({ text: 'Please fill in all fields.', class: 'alert alert-warning' });
            return;
          }
          try {
            const response = await axios.post('http://localhost:8080/user/sendotpcode', {
              userEmail,
              
            });
      
            if (response.data === 'OTP sent successfully') {
                setMessage({ text: 'OTP sent to your email. Please check your inbox.', class: 'alert alert-success' });
                localStorage.setItem('userEmail', userEmail);
                
                setTimeout(() => navigate('/VerifyOTP'), 2000);
            } else {
                setMessage({ text: response.data || 'Failed to send OTP.', class: 'alert alert-danger' });
            }
          } catch (error) {
            setMessage({ text: 'Failed to send OTP. Please try again.', class: 'alert alert-danger' });
          }
    
        
      };

  return (
    <div>
        
        <div class="bg-light py-3 py-md-5">
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
        <div class="bg-white p-4 p-md-5 rounded shadow-sm">
          <div class="row">
            <div class="col-12">
              <div class="mb-5">
                <h2 class="h3">Password Reset</h2>
                {message && <div className={message.class}>{message.text}
              </div>}
                <h3 class="fs-6 fw-normal text-secondary m-0">Provide the email address associated with your account to recover your password.</h3>
              </div>
            </div>
          </div>
          <form onSubmit={handlesentotpmethod}>
            <div class="row gy-3 gy-md-4 overflow-hidden">
              <div class="col-12">
                <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
                <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="name@example.com"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        required
                      />
              </div>
              <div class="col-12">
                <div class="d-grid">
                  <button class="btn btn-lg btn-primary" type="submit">Reset Password</button>
                </div>
              </div>
            </div>
          </form>
          <div class="row">
            <div class="col-12">
              <hr class="mt-5 mb-4 border-secondary-subtle"/>
              <div class="d-flex gap-4 justify-content-end">
                <a href="/Login" class="link-secondary text-decoration-none">Login</a>
                <a href="/Register" class="link-secondary text-decoration-none">New Register</a>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  </div>
</div>
      
    </div>
  )
}
