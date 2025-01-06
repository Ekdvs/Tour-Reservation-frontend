import React from 'react'
import Header from './Header'

export default function Topbar() {
  return (
    <div>
      <Header/>
      <div classNameName="container-fluid bg-primary px-5 d-none d-lg-block">
        <div classNameName="row gx-0">
          <div classNameName="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div classNameName="d-inline-flex align-items-center" style={{ height: '45px' }}>
              <a classNameName="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"  href="https://twitter.com" target="_blank" >
                <i classNameName="fab fa-twitter fw-normal"></i>
              </a>
              <a classNameName="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://facebook.com">
                <i classNameName="fab fa-facebook-f fw-normal"></i>
              </a>
              <a classNameName="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://linding.com">
                <i classNameName="fab fa-linkedin-in fw-normal"></i>
              </a>
              <a classNameName="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://intergram.com">
                <i classNameName="fab fa-instagram fw-normal"></i>
              </a>
              <a classNameName="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href="https://youtube.com">
                <i classNameName="fab fa-youtube fw-normal"></i>
              </a>
            </div>
          </div>
          <div classNameName="col-lg-4 text-center text-lg-end">
          <div classNameName="d-inline-flex align-items-center" style={{ height: '45px' }}>
              <a href="/Register"><small classNameName="me-3 text-light"><i classNameName="fa fa-user me-2"></i>Register</small></a>
              <a href="/Login"><small classNameName="me-3 text-light"><i classNameName="fa fa-sign-in-alt me-2"></i>Login</small></a>
              <div classNameName="dropdown">
              <a href="/" classNameName="dropdown-toggle text-light" data-bs-toggle="dropdown">
                  <small><i classNameName="fa fa-home me-2"></i> My Dashboard</small>
                </a>
                <div classNameName="dropdown-menu rounded">
                  <a href="/My_Profile" classNameName="dropdown-item"><i classNameName="fas fa-user-alt me-2"></i> My Profile</a>
                  <a href="/" classNameName="dropdown-item"><i classNameName="fas fa-comment-alt me-2"></i> Inbox</a>
                  <a href="/" classNameName="dropdown-item"><i classNameName="fas fa-bell me-2"></i> Notifications</a>
                  <a href="/" classNameName="dropdown-item"><i classNameName="fas fa-cog me-2"></i> Account Settings</a>
                  <a href="/" classNameName="dropdown-item"><i classNameName="fas fa-power-off me-2"></i> Log Out</a>
                </div>

              </div>
            </div> 
          </div>
        </div>
        </div>
    
    </div>
  )
}
