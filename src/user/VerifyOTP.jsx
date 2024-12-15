import React, { useState } from 'react';

export default function VerifyOTP() {
    const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);

  const handleOtpSubmit = async (e) => {
    e.preventDefault();

  
  };
  return (
    <div>
        <div classNameName="bg-light py-3 py-md-5">
        <div classNameName="container">
          <div classNameName="row justify-content-md-center">
            <div classNameName="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
              <div classNameName="bg-white p-4 p-md-5 rounded shadow-sm">
                <h3>Enter OTP</h3>
                <form onSubmit={handleOtpSubmit}>
                  <div classNameName="mb-3">
                    <label htmlFor="otp" classNameName="form-label">
                      OTP <span classNameName="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      classNameName="form-control"
                      id="otp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="Enter OTP"
                      required
                    />
                  </div>
                  <div classNameName="d-grid">
                    <button classNameName="btn btn-lg btn-primary" type="submit">
                      Verify OTP
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
