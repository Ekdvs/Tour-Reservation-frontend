import React from 'react'

export default function Navbar() {
  return (
    <div>
      <Header/>
      <div class="container-fluid position-relative p-0"></div>
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
      </nav>
    </div>
  )
}
