import React from 'react'
import Topbar from '../compodent/Topbar'
import Navbar from '../compodent/Navbar'
import Footer from '../compodent/Footer'

export default function Login() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <div className="container-fluid bg-primary text-white text-center py-5">
        <h3 className="display-3 mb-4">Register</h3>
        <ol className="breadcrumb justify-content-center">
          <li className="breadcrumb-item">
            <a href="/" className="text-white">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/Contact" className="text-white">Pages</a>
          </li>
          <li className="breadcrumb-item active">Register</li>
        </ol>
      </div>

      <div className="container my-5">
        {message && <div className={message.class}>{message.text}</div>}
        <div className="card mx-auto" style={{ maxWidth: '500px' }}>
          <div className="card-body">
            <h5 className="card-title text-center">Sign IN</h5>
            <form onSubmit={hadleSignIn}>
            <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>


      <Footer/>
    </div>
  )
}
