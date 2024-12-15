import React from 'react'

export default function Footer() {
  return (
    <div>
      <Header/>
      <div className="container-fluid footer py-5">
      <div className="container py-5">
      <div className="row g-5">
      <div className="col-md-6 col-lg-6 col-xl-3">
      <div className="footer-item d-flex flex-column">
        <h4 className="mb-4 text-white">Get In Touch</h4>
        <a href=""><i class="fas fa-home me-2"></i>123 Kandy Colombo Main Street, Kelaniya, Sri Lanka </a>
        <a href=""> <i class="fas fa-envelope me-2"></i> info@example.com</a>
        <a href="">+9471 897 4153</a>
     
     
      </div>

      </div>
      </div>
      </div>
      </div>

    </div>

  )
}