import React from 'react'
import Header from './Header'


export default function Footer() {
  return (
    <div>
      <Header />
      <div className="container-fluid footer py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white">Get In Touch</h4>
                <a href="">
                  <i className="fas fa-home me-2"></i> 123 Kandy Colombo Main
                  Street, Kelaniya, Sri Lanka
                </a>
                <a href="">
                  <i className="fas fa-envelope me-2"></i>{" "}
                  ceylontravelplanning@gmail.com
                </a>
                <a href="">
                  <i className="fas fa-phone me-2"></i> +9471 897 4153
                </a>
                <a href="" className="mb-3">
                  <i className="fas fa-print me-2"></i> +9477 326 0660
                </a>
                <div className="d-flex align-items-center">
                  <i className="fas fa-share fa-2x text-white me-2"></i>
                  <a
                    className="btn-square btn btn-primary rounded-circle mx-1"
                    href="https://web.facebook.com/profile.php?id=61572509287749"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn-square btn btn-primary rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn-square btn btn-primary rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn-square btn btn-primary rounded-circle mx-1"
                    href="https://www.linkedin.com/company/106320117/admin/page-posts/published/"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white">Company</h4>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> About
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> Careers
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> Blog
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white">Support</h4>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> Contact
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> Privacy Policy
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> Terms and
                  Conditions
                </a>
                <a href="">
                  <i className="fas fa-angle-right me-2"></i> Sitemap
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item">
                <div className="row gy-3 gx-2 mb-4">
                  <div className="col-xl-6"></div>
                </div>
                <h4 className="text-white mb-3">Payments</h4>
                <div className="footer-bank-card">
                  <a href="/Travel_Booking" className="text-white me-2">
                    <i className="fab fa-cc-amex fa-2x"></i>
                  </a>
                  <a href="/Travel_Booking" className="text-white me-2">
                    <i className="fab fa-cc-visa fa-2x"></i>
                  </a>
                  <a href="/Travel_Booking" className="text-white me-2">
                    <i className="fas fa-credit-card fa-2x"></i>
                  </a>
                  <a href="/Travel_Booking" className="text-white me-2">
                    <i className="fab fa-cc-mastercard fa-2x"></i>
                  </a>
                  <a href="/Travel_Booking" className="text-white me-2">
                    <i className="fab fa-cc-paypal fa-2x"></i>
                  </a>
                  <a href="/Travel_Booking" className="text-white">
                    <i className="fab fa-cc-discover fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
