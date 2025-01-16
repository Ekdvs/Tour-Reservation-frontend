import React from 'react'
import Header from './Header'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const ActiveNavLink = styled(NavLink)`
  color: #13357B;
  font-weight: bold;
`;

export default function Navbar() {
  return (
    <div>
      <Header/>
      <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="/" className="navbar-brand p-0">
                    <h1 className="m-0"><i className="fa fa-map-marker-alt me-3"></i>The Ceylon Traveler </h1>

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
                    <div className="nav-item dropdown">
                            <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu m-0">
                                <a href="/Destination" className="dropdown-item">Destination</a>
                                <a href="Explore_Tour" className="dropdown-item">Explore Tour</a>
                                <a href="/Travel_Booking" className="dropdown-item">Travel Booking</a>
                                <a href="/Our_Gallery" className="dropdown-item">Our Gallery</a>
                                <a href="/Travel_Guides" className="dropdown-item">Travel Guides</a>
                                <a href="/Testimonial" className="dropdown-item">Testimonial</a>
                                <a href="/Pageerror" className="dropdown-item">404 Page</a>
                            </div>
                        </div>  
                        <a href="/Contact" className="nav-item nav-link">Contact</a>
                    </div>
                    <a href="/Travel_Booking" className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">Book Now</a>
                </div>
            </nav>
            </div>
    </div>
  )
}
