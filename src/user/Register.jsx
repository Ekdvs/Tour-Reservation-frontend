import React from 'react'
import Topbar from '../compodent/Topbar'
import Navbar from '../compodent/Navbar'
import Footer from '../compodent/Footer'
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
    
        if (firstName && lastName && userEmail && password && repeatPassword) {
          if (password !== repeatPassword) {
            setMessage({ text: 'Passwords do not match!', className: 'alert alert-danger' });
            return;
          }
    
          
        } else {
          setMessage({ text: 'All fields are required. Please fill them out.', className: 'alert alert-danger' });
        }
      };
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
            <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your first name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter your last name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="userEmail" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="userEmail"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="repeatPassword" className="form-label">Re-enter Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="repeatPassword"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  placeholder="Re-enter your password"
                />
              </div>
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
