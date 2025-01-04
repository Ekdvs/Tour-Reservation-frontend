import React from 'react'
import Header from './Header'

export default function Navbar() {
  return (
    <div>
      <Header/>
      <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="" className="navbar-brand p-0">
                    <h1 className="m-0"><i className="fa fa-map-marker-alt me-3"></i>Ceylon <br></br>Paradice</h1>

                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse"><br></br>
                    <div className="navbar-nav ms-auto py-0">
                    <ActiveNavLink to="/" className="nav-item nav-link">Home</ActiveNavLink>
                    <ActiveNavLink to="/About" className="nav-item nav-link">About</ActiveNavLink>
                    <ActiveNavLink to="/Services" className="nav-item nav-link">Services</ActiveNavLink>
                    <ActiveNavLink to="/Packages" className="nav-item nav-link">Packages</ActiveNavLink>
                    <ActiveNavLink to="/Blog" className="nav-item nav-link">Blog</ActiveNavLink>
                        
                        <a href="/Contact" className="nav-item nav-link">Contact</a>
                    </div>
                    <a href="/Travel_Booking" className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">Book Now</a>
                </div>
            </nav>
            </div>
    </div>
  )
}
