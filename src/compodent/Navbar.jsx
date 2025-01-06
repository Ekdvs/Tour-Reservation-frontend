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
      <div classNameName="container-fluid position-relative p-0">
            <nav classNameName="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="/" classNameName="navbar-brand p-0">
                    <h1 classNameName="m-0"><i classNameName="fa fa-map-marker-alt me-3"></i>Ceylon <br></br>Paradice</h1>

                </a>
                <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span classNameName="fa fa-bars"></span>
                </button>
                <div classNameName="collapse navbar-collapse" id="navbarCollapse"><br></br>
                    <div classNameName="navbar-nav ms-auto py-0">
                    <ActiveNavLink to="/" classNameName="nav-item nav-link">Home</ActiveNavLink>
                    <ActiveNavLink to="/About" classNameName="nav-item nav-link">About</ActiveNavLink>
                    <ActiveNavLink to="/Services" classNameName="nav-item nav-link">Services</ActiveNavLink>
                    <ActiveNavLink to="/Packages" classNameName="nav-item nav-link">Packages</ActiveNavLink>
                    <ActiveNavLink to="/Blog" classNameName="nav-item nav-link">Blog</ActiveNavLink>
                    <div classNameName="nav-item dropdown">
                            <a href="/" classNameName="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div classNameName="dropdown-menu m-0">
                                <a href="/Destination" classNameName="dropdown-item">Destination</a>
                                <a href="Explore_Tour" classNameName="dropdown-item">Explore Tour</a>
                                <a href="/Travel_Booking" classNameName="dropdown-item">Travel Booking</a>
                                <a href="/Our_Gallery" classNameName="dropdown-item">Our Gallery</a>
                                <a href="/Travel_Guides" classNameName="dropdown-item">Travel Guides</a>
                                <a href="/Testimonial" classNameName="dropdown-item">Testimonial</a>
                                <a href="/Pageerror" classNameName="dropdown-item">404 Page</a>
                            </div>
                        </div>  
                        <a href="/Contact" classNameName="nav-item nav-link">Contact</a>
                    </div>
                    <a href="/Travel_Booking" classNameName="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">Book Now</a>
                </div>
            </nav>
            </div>
    </div>
  )
}
