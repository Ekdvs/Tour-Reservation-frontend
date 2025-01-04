import React from 'react'
import Topbar from '../compodent/Topbar'
import Navbar from '../compodent/Navbar'
import Footer from '../compodent/Footer'

export default function Register() {
  return (
    <div>
        <Topbar/>
        <Navbar/>
        <div class="container-fluid bg-breadcrumb">
                  <div class="container text-center py-5" style={{maxWidth:"900px"}}>
                      <h3 class="text-white display-3 mb-4">Register</h3>
                      <ol class="breadcrumb justify-content-center mb-0">
                          <li class="breadcrumb-item"><a href="/">Home</a></li>
                          <li class="breadcrumb-item"><a href="/Register">Pages</a></li>
                          <li class="breadcrumb-item active text-white">Register</li>
                      </ol>    
                  </div>
            </div>

            <div className="container my-5">
        
        <div className="card mx-auto" style={{ maxWidth: '500px' }}>
          <div className="card-body">
            <h5 className="card-title text-center">Sign Up</h5>
            {message && <div className={message.className}>{message.text}</div>}
            <form onSubmit={handleRegister}>
              
              <button type="submit" className="btn btn-primary w-100">Sign Up</button>
            </form>
            <div className="text-center mt-3">
              <a href="/login">Already a Member?</a>
            </div>
          </div>
        </div>
      </div>

        <Footer/>

      
    </div>
  )
}
