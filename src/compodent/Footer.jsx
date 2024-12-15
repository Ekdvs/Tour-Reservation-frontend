import React from 'react'
import Header from './Header'

export default function Footer() {
  return (
    <div>
      <header/>
      <div className="container-fluid footer py-5">
      <div className="container py-5">
      <div className="row g-5">
      <div className="col-md-6 col-lg-6 col-xl-3">
      <div className="footer-item d-flex flex-column">
        <h4 className="mb-4 text-white">Get In Touch</h4>
        <a href=""><i class="fas fa-home me-2"></i>123 Kandy Colombo Main Street, Kelaniya, Sri Lanka </a>
        <a href=""> <i class="fas fa-envelope me-2"></i> info@example.com</a>
        <a href=""><i class="fas fa-phone me-2"></i> +9471 897 4153</a>
        <a href="" class="mb-3"><i class="fas fa-print me-2"></i> +9477 326 0660</a>
     
      </div>

      </div>
      </div>
      </div>
      </div>

    </div>

  )
}