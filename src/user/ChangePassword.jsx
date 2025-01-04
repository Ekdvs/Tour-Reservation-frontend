import React from 'react'
import Topbar from '../compodent/Topbar'
import Navbar from '../compodent/Navbar'
import Footer from '../compodent/Footer'
import { ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export default function ChangePassword() {
  const [Password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  return (
    <div>
        <Topbar/>
        <Navbar/>
        <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
                    <h3 className="text-white display-3 mb-4">Password Reset</h3>
                    <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item"><a href="/Contact">Pages</a></li>
                        <li className="breadcrumb-item active text-white">Password Change</li>

                    </ol>
                </div>
            </div>
            <div className="container my-5">
        <div className="card mx-auto" style={{ maxWidth: '500px' }}>
          <div className="card-body">
            <h5 className="card-title text-center">Change Password</h5>
            <form onSubmit={handleChangePassword}>
              <div className="form-group mb-3">
                <label htmlFor="newPassword" className="form-label">
                  New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter new password"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  required
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary rounded-pill">
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

        <Footer/>
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
