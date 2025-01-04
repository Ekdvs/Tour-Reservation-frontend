import React from 'react'
import Header from './Header'

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
                            <a href=""><i class="fas fa-home me-2"></i> 123 Kandy Colombo Main Street, Kelaniya, Sri Lanka</a>
                            <a href=""><i class="fas fa-envelope me-2"></i> info@example.com</a>
                            <a href=""><i class="fas fa-phone me-2"></i> +9471 897 4153</a>
                            <a href="" class="mb-3"><i class="fas fa-print me-2"></i> +9477 326 0660</a>
                            <div class="d-flex align-items-center">
                                <i className="fas fa-share fa-2x text-white me-2"></i>
                                <a className="btn-square btn btn-primary rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn-square btn btn-primary rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn-square btn btn-primary rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                                <a className="btn-square btn btn-primary rounded-circle mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 class="mb-4 text-white">Company</h4>
                            <a href=""><i className="fas fa-angle-right me-2"></i> About</a>
                            <a href=""><i className="fas fa-angle-right me-2"></i> Careers</a>
                            <a href=""><i className="fas fa-angle-right me-2"></i> Blog</a>
                            <a href=""><i className="fas fa-angle-right me-2"></i> Press</a>
                            <a href=""><i className="fas fa-angle-right me-2"></i> Gift Cards</a>
                            <a href=""><i className="fas fa-angle-right me-2"></i> Magazine</a>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3">
                        <div class="footer-item d-flex flex-column">
                            <h4 class="mb-4 text-white">Support</h4>
                            <a href=""><i className="fas fa-angle-right me-2"></i> Contact</a>
                            <a href=""><i className="fas fa-angle-right me-2"></i> Legal Notice</a>
                            <a href=""><i className="fas fa-angle-right me-2"></i> Privacy Policy</a>
                            <a href=""><i className="fas fa-angle-right me-2"></i> Terms and Conditions</a>
                            <a href=""><i className="fas fa-angle-right me-2"></i> Sitemap</a>
                            <a href=""><i className="fas fa-angle-right me-2"></i> Cookie policy</a>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3">
                        <div class="footer-item">
                            <div class="row gy-3 gx-2 mb-4">
                                <div class="col-xl-6">
                                    
                                </div>
                                
                            </div>
                            <h4 class="text-white mb-3">Payments</h4>
                            <div class="footer-bank-card">
                                <a href="/Travel_Booking" className="text-white me-2"><i className="fab fa-cc-amex fa-2x"></i></a>
                                <a href="/Travel_Booking" className="text-white me-2"><i className="fab fa-cc-visa fa-2x"></i></a>
                                <a href="/Travel_Booking" className="text-white me-2"><i className="fas fa-credit-card fa-2x"></i></a>
                                <a href="/Travel_Booking" className="text-white me-2"><i className="fab fa-cc-mastercard fa-2x"></i></a>
                                <a href="/Travel_Booking" className="text-white me-2"><i className="fab fa-cc-paypal fa-2x"></i></a>
                                <a href="/Travel_Booking" className="text-white"><i className="fab fa-cc-discover fa-2x"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
