import React from "react";
import Topbar from "../compodent/Topbar";
import Nav from "../admin/Nav";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString();
  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="container-fluid bg-breadcrumb">
        <div
          className="container text-center py-5"
          style={{ maxWidth: "900px" }}>
          <h3 className="text-white display-3 mb-4">Privacy Policy</h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/Destinations">Privacy Policy</a>
            </li>
          </ol>
        </div>
      </div>
      <div className="container-fluid about py-5"
        style={{
          backgroundImage: `linear-gradient(rgba(1, 9, 23, 0.6), rgba(134, 170, 240, 0.6)), url(../img/subscribe-img.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
      <div className="container mt-5">
        <h1 className="text-center text-primary mb-4">Privacy Policy</h1>
        <p className="text-center" style={{ color: "Black" }}>
          <strong>Last Updated: {currentDate}</strong>
        </p>

        <p className="" style={{ color: "" }}>
          At The Ceylon Traveler, we are committed to protecting your privacy
          and ensuring a safe online experience. This Privacy Policy outlines
          the types of personal information we collect, how we use it, and how
          we protect your information. By using our website, you agree to the
          collection and use of information in accordance with this policy.
        </p>

        <div className="policy-section">
          <h3 className="text-info">Information We Collect</h3>
          <ul className="list-group list-group-flush">
            <li className="">
              <strong>Personal Information:</strong> When you register, log in,
              or make a booking, we may collect personal details such as your
              name, email address, phone number, and payment information.
            </li>
            <li className="">
              <strong>Usage Data:</strong> We may collect data on how you access
              and use the website, such as your IP address, browser type, and
              the pages you visit.
            </li>
            <li className="">
              <strong>Cookies and Tracking Technologies:</strong> We use cookies
              to improve your experience on our site, track usage patterns, and
              remember your preferences.
            </li>
          </ul>
        </div>

        <div className="policy-section mt-4">
          <h3 className="text-info">How We Use Your Information</h3>
          <ul className="list-group list-group-flush">
            <li className="">
              To provide and maintain our service
            </li>
            <li className="">
              To notify you about changes to our service
            </li>
            <li className="">
              To allow you to book packages or travel services
            </li>
            <li className="">
              To send you promotional offers (with your consent)
            </li>
            <li className="">
              To improve and customize the user experience on our site
            </li>
            <li className="">
              To comply with legal obligations
            </li>
          </ul>
        </div>

        <div className="policy-section mt-4">
          <h3 className="text-info">How We Protect Your Data</h3>
          <p style={{ color: "black" }}>
            We use industry-standard security measures to protect your data from
            unauthorized access, disclosure, alteration, or destruction.
            However, no method of transmission over the Internet or method of
            electronic storage is 100% secure, and we cannot guarantee absolute
            security.
          </p>
        </div>

        <div className="policy-section mt-4">
          <h3 className="text-info">Sharing Your Information</h3>
          <p style={{ color: "black" }}>
            We do not sell, rent, or trade your personal information. We may
            share your data with third-party service providers who help us
            operate the website and process transactions, but they are only
            authorized to use your information as necessary to provide those
            services.
          </p>
        </div>

        <div className="policy-section mt-4">
          <h3 className="text-info">Third-Party Links</h3>
          <p style={{ color: "black" }}>
            Our website may contain links to other websites that are not
            operated by us. We are not responsible for the privacy practices of
            these third-party sites. We encourage you to review the privacy
            policies of any third-party websites before providing any personal
            information.
          </p>
        </div>

        <div className="policy-section mt-4">
          <h3 className="text-info">Your Data Protection Rights</h3>
          <p style={{ color: "black" }}>
            Depending on your location, you may have the following rights
            regarding your personal data:
          </p>
          <ul className="list-group list-group-flush">
            <li className="">
              The right to access the personal data we hold about you
            </li>
            <li className="">
              The right to correct any incorrect or incomplete information
            </li>
            <li className="">
              The right to request the deletion of your personal data
            </li>
            <li className="">
              The right to object to or restrict the processing of your personal
              data
            </li>
            <li className="">
              The right to withdraw consent where processing is based on consent
            </li>
          </ul>
        </div>

        <div className="policy-section mt-4">
          <h3 className="text-info">Changes to This Privacy Policy</h3>
          <p style={{ color: "black" }}>
            We may update our Privacy Policy from time to time. Any changes will
            be posted on this page with an updated "Last Updated" date. Please
            review this policy periodically to stay informed about how we are
            protecting your information.
          </p>
        </div>

        <div className="policy-section mt-4">
          <h3 className="text-info">Contact Us</h3>
          <p style={{ color: "black" }}>
            If you have any questions about this Privacy Policy or how we handle
            your personal data, please contact us at:
          </p>
          <p style={{ color: "black" }}>
            The Ceylon Traveler
            <br />
            ceylontravelplanning@gmail.com
            <br />
            +94 718 974 153
            <br />
            123 Kandy Colombo ,Main Street, Kelaniya, Sri Lanka
          </p>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
