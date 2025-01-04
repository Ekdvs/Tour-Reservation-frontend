import React from 'react'
import Topbar from '../compodent/Topbar'
import Navbar from '../compodent/Navbar'
import Footer from '../compodent/Footer'

export default function VerifyOTP() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <div class="container-fluid bg-breadcrumb">
            <div class="container text-center py-5" style={{maxWidth:"900px"}}>
                <h3 class="text-white display-3 mb-4">Login</h3>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href="/Contact">Pages</a></li>
                    <li className="breadcrumb-item active text-white">Password Reset</li>
                    <li className="breadcrumb-item active text-white">Verify OTP</li>
                </ol>   
            </div>
        </div>
        <div className="container my-5">
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

      <Footer/>
    </div>
  )
}
