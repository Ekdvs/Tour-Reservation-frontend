import React from 'react'
import Header from './Header'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const ActiveNavLink = styled(NavLink)`
  color: #13357B;
  font-weight: bold;
`;
export default function Navbar() {
  return (
    <div>
      <Header/>
        <div class="container-fluid position-relative p-0">
            <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="" class="navbar-brand p-0">
                    <h1 class="m-0"><i class="fa fa-map-marker-alt me-3"></i>Ceylon <br></br>Paradice</h1>

                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse"><br></br>
                    <div class="navbar-nav ms-auto py-0">
                    <ActiveNavLink to="/" className="nav-item nav-link">Home</ActiveNavLink>
                    <ActiveNavLink to="/About" className="nav-item nav-link">About</ActiveNavLink>
                    <ActiveNavLink to="/Services" className="nav-item nav-link">Services</ActiveNavLink>
                    <ActiveNavLink to="/Packages" className="nav-item nav-link">Packages</ActiveNavLink>
                    <ActiveNavLink to="/Blog" className="nav-item nav-link">Blog</ActiveNavLink>
                        <div class="nav-item dropdown">
                            <a href="/" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu m-0">
                                <a href="/Destination" class="dropdown-item">Destination</a>
                                <a href="Explore_Tour" class="dropdown-item">Explore Tour</a>
                                <a href="/Travel_Booking" class="dropdown-item">Travel Booking</a>
                                <a href="/Our_Gallery" class="dropdown-item">Our Gallery</a>
                                <a href="/Travel_Guides" class="dropdown-item">Travel Guides</a>
                                <a href="/Testimonial" class="dropdown-item">Testimonial</a>
                                <a href="/Pageerror" class="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <a href="/Contact" class="nav-item nav-link">Contact</a>
                    </div>
                    <a href="/Travel_Booking" class="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">Book Now</a>
                </div>
            </nav>
            </div>
            </div>
            
  )
}