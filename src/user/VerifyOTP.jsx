import React, { useState } from 'react';

export default function VerifyOTP() {
    const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);
  return (
    <div>
        <div className="bg-light py-3 py-md-5">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
              <div className="bg-white p-4 p-md-5 rounded shadow-sm">
                <h3>Enter OTP</h3>
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
      
    </div>
  )
}
