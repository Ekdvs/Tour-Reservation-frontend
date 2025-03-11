import React from "react";
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";
import { FaArrowLeft } from "react-icons/fa";

const TermsAndConditions = () => {
  const currentDate = new Date().toLocaleDateString(); // Get current date

  return (
    <div>
        <Topbar/>
        <Navbar/>
        <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
          <h3 className="text-white display-3 mb-4">Terms and Conditions</h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><a href="/Destinations">Terms and Conditions</a></li>
            
          </ol>
        </div>
      </div>
      <div style={{
          backgroundImage: `linear-gradient(rgba(1, 9, 23, 0.6), rgba(134, 170, 240, 0.6)), url(../img/subscribe-img.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} >
    <div className="container" >
      <h1 className="text-center" style={{ color: "#007bff" }}>Terms and Conditions</h1>
      <p className="text-center" style={{ color: "" }}><strong>Last Updated: {currentDate}</strong></p>
      
      <p className="lead" style={{ color: "" }}>
        Welcome to The Ceylon Traveler! These Terms and Conditions govern your use of our travel planning website. By using our website and services, you agree to comply with the following terms.
      </p>

      <h3>1. General Terms</h3>
      <p style={{ color: "black" }}>
        By accessing or using the website, you agree to be bound by these Terms and Conditions and any additional terms and conditions that may apply to specific sections of the website.
      </p>

      <h3>2. User Account</h3>
      <p style={{ color: "black" }}>
        To access certain features of the website, you may be required to create a user account. You must provide accurate and complete information during the registration process and keep your account details up to date.
      </p>

      <h3>3. Booking and Reservations</h3>
      <p style={{ color: "black" }}>
        All bookings made through our website are subject to availability and our confirmation. You agree to provide accurate information for your bookings, including but not limited to your name, email address, and payment details.
      </p>

      <h3>4. Payment Terms</h3>
      <p style={{ color: "black" }}>
        Payments for bookings must be made through the available payment methods on our website. You agree to provide accurate billing information, and the charges will be processed according to the chosen method.
      </p>

      <h3>5. Cancellation and Refund Policy</h3>
      <p style={{ color: "black" }}>
        Cancellations must be made within the specified period for a full refund. After the cancellation window, no refunds will be processed. For more details, please refer to our cancellation policy page.
      </p>

      <h3>6. Privacy and Data Protection</h3>
      <p style={{ color: "black" }}>
        Your privacy is important to us. We will collect and process your personal data in accordance with our Privacy Policy, which is available on our website.
      </p>

      <h3>7. Liability</h3>
      <p style={{ color: "black" }}>
        While we make every effort to ensure the accuracy of the information on our website, we do not guarantee the availability or reliability of any travel services or bookings made through our site. We are not liable for any damages resulting from the use of our website or services.
      </p>

      <h3>8. Intellectual Property</h3>
      <p style={{ color: "black" }}>
        All content on our website, including text, images, logos, and other media, is the intellectual property of The Ceylon Traveler and is protected by copyright law. You may not use or reproduce any content without prior permission.
      </p>

      <h3>9. Modification of Terms</h3>
      <p style={{ color: "black" }}>
        We reserve the right to update or modify these Terms and Conditions at any time. Any changes will be posted on this page with an updated "Last Updated" date.
      </p>

      <h3>10. Contact Us</h3>
      <p style={{ color: "black" }}>
        If you have any questions or concerns about these Terms and Conditions, please contact us at:
      </p>
      <p style={{ color: "black" }}>
        The Ceylon Traveler<br />
        Email: ceylontravelplanning@gmail.com<br />
        Phone: +94 718 974 153<br />
        123 Kandy Colombo ,Main Street, Kelaniya, Sri Lanka
        <br></br>
      </p>

      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default TermsAndConditions;
