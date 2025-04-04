import React from "react";
import Header from "./Header";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const ActiveNavLink = styled(NavLink)`
  color: #13357b;
  font-weight: bold;
`;

export default function Navbar() {
  return (
    <div>
      <Header />
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href="/" className="navbar-brand p-0">
            <h1 className="m-0">
              <i className="fa fa-map-marker-alt me-3"></i>The Ceylon Traveler{" "}
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <br></br>
            <div className="navbar-nav ms-auto py-0">
              <ActiveNavLink to="/" className="nav-item nav-link">
                Home
              </ActiveNavLink>
              <ActiveNavLink to="/About" className="nav-item nav-link">
                About
              </ActiveNavLink>
              <ActiveNavLink to="/Services" className="nav-item nav-link">
                Services
              </ActiveNavLink>
              <ActiveNavLink to="/Packages" className="nav-item nav-link">
                Packages
              </ActiveNavLink>
              <ActiveNavLink to="/Blog" className="nav-item nav-link">
                Blog
              </ActiveNavLink>
              <div className="nav-item dropdown">
                <a
                  href="/"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu m-0">
                  <a href="/Destination" className="dropdown-item">
                    Destination
                  </a>
                  <a href="/EventShowPage" className="dropdown-item">
                    Explore Tour
                  </a>
                  <a href="/Packages" className="dropdown-item">
                    Travel Booking
                  </a>
                  <a href="/Our_Gallery" className="dropdown-item">
                    Our Gallery
                  </a>
                  <a href="/Travel_Guides" className="dropdown-item">
                    Travel Guides
                  </a>
                  <a href="/Testimonial" className="dropdown-item">
                    Testimonial
                  </a>
                  
                </div>
              </div>
              <a href="/Contact" className="nav-item nav-link">
                Contact
              </a>
              <a href="/Register" className="nav-item nav-link">
                <i className="fa fa-user me-2"></i>Register
              </a>
              <a href="/Login" className="nav-item nav-link">
                <i className="fa fa-sign-in-alt me-2"></i>Login
              </a>
              <div className="nav-item dropdown">
                <a
                  href="/"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <i className="fa fa-home me-2"></i> My Dashboard
                </a>
                <div className="dropdown-menu m-0">
                  <a href="/Profile" className="dropdown-item">
                    <i className="fas fa-user-alt me-2"></i> My Profile
                  </a>
                  <a href="/" className="dropdown-item">
                    <i className="fas fa-comment-alt me-2"></i> Inbox
                  </a>
                  <a href="/" className="dropdown-item">
                    <i className="fas fa-bell me-2"></i> Notifications
                  </a>
                  <a href="/" className="dropdown-item">
                    <i className="fas fa-cog me-2"></i> Account Settings
                  </a>
                  <a href="/logout" className="dropdown-item">
                    <i className="fas fa-power-off me-2"></i> Log Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
