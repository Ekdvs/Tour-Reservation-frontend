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
      </nav>
    </div>
  )
}
