import React from 'react'
import Header from './Header'

export default function Topbar() {
  return (
    <div>
      <Header/>
      <div className="container-fluid bg-primary px-5 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"  href="https://twitter.com" target="_blank" >
                <i className="fab fa-twitter fw-normal"></i>
              </a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#">
                <i className="fab fa-facebook-f fw-normal"></i>
              </a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#">
                <i className="fab fa-linkedin-in fw-normal"></i>
              </a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#">
                <i className="fab fa-instagram fw-normal"></i>
              </a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href="#">
                <i className="fab fa-youtube fw-normal"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
          <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
              <a href="/Register"><small className="me-3 text-light"><i className="fa fa-user me-2"></i>Register</small></a>
              <a href="/Login"><small className="me-3 text-light"><i className="fa fa-sign-in-alt me-2"></i>Login</small></a>
              <div className="dropdown">
              <a href="/" className="dropdown-toggle text-light" data-bs-toggle="dropdown">
                  <small><i className="fa fa-home me-2"></i> My Dashboard</small>
                </a>
                

              </div>
            </div> 
          </div>
        </div>
        </div>
    
    </div>
  )
}
