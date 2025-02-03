import React from "react";
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";
import Subscribe from "./Subscribe";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    // Simulating email sending process
    const isSuccess = Math.random() > 0.2; // 80% chance of success

    if (isSuccess) {
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
    } else {
      toast.error("Failed to send message. Please try again!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };
  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="container-fluid bg-breadcrumb">
        <div
          className="container text-center py-5"
          style={{ maxWidth: "900px" }}
        >
          <h3 className="text-white display-3 mb-4">Contact Us</h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/Contact">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">Contact</li>
          </ol>
        </div>
      </div>
      <div
        className="container-fluid contact bg-light py-5 "
        style={{
          backgroundImage: `linear-gradient(rgba(19, 53, 123, .6), rgba(19, 53, 123, .6)), url(../img/R.jpeg)`,
          backgroundSize: "cover",
          background_attachment: "fixed",
          borderRadius: "15px",
          borderTop: "2px solid #fff",
        }}
      >
        <div className="container py-5">
          <div
            className="mx-auto text-center mb-5"
            style={{ maxWidth: "900px" }}
          >
            <h5 className="section-title px-3">Contact Us</h5>
            <h1 className="mb-0">Contact For Any Query</h1>
          </div>
          <div className="row g-5 align-items-center">
            <div className="col-lg-4">
              <div className="bg-white rounded p-4">
                <div className="text-center mb-4">
                  <i className="fa fa-map-marker-alt fa-3x text-primary"></i>
                  <h4 className="text-primary">
                    <address>
                      <p className="mb-0">
                        123 Kandy Colombo Main Street, <br /> Kelaniya, Sri
                        Lanka
                      </p>
                    </address>
                  </h4>
                  <div className="text-center mb-4">
                    <i className="fa fa-phone-alt fa-3x text-primary mb-3"></i>
                    <h4 className="text-primary">Mobile</h4>
                    <p style={{ color: "black" }}>+9471 897 4153</p>
                    <p className="" style={{ color: "black" }}>
                      +9477 603 2660
                    </p>
                  </div>
                  <div className="text-center">
                    <i className="fa fa-envelope-open fa-3x text-primary mb-3"></i>
                    <h4 className="text-primary">Email</h4>
                    <p className="mb-0" style={{ color: "black" }}>
                      ceylontravelplanning@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <h3 className="mb-2">Send us a message</h3>
              <p className="mb-4" style={{ color: "black" }}>
                The contact form is currently inactive. Get a functional and
                working contact form with Ajax & PHP in a few minutes. Just copy
                and paste the files, add a little code, and you're done.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="row g-3" style={{ color: "black" }}>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="subject"
                        placeholder="Subject"
                        required
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control form-control-lg"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: "160px" }}
                        required
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
              <ToastContainer />
            </div>

            <div className="col-12">
              <div className="rounded">
                <iframe
                  className="rounded w-100"
                  style={{ height: "450px", border: "0" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15841.786123967167!2d79.9101437895392!3d6.956536388568587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25789f736ff2f%3A0x7b61e230dd11e6ec!2sKelaniya%2C%20Peliyagoda!5e0!3m2!1sen!2slk!4v1732291183089!5m2!1sen!2slk"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}
