import React from "react";
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";
import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="container-fluid bg-breadcrumb">
        <div
          className="container text-center py-5"
          style={{ maxWidth: "900px" }}
        >
          <h3 className="text-white display-3 mb-4">
            About The Ceylon Traveler
          </h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/About">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">About</li>
          </ol>
        </div>
      </div>
      <div
        className="container-fluid about py-5"
        style={{
          backgroundImage: `linear-gradient(rgba(19, 53, 123, .6), rgba(19, 53, 123, .6)), url(../img/subscribe-img.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-12">
              <Container>
                <Row>
                  <Col lg={6}>
                    <img
                      src="img/logo.png"
                      className="img-fluid w-100 h-100"
                      alt="Sri Lanka"
                      style={{
                        objectFit: "cover",
                        borderRadius: "10px",
                        maxWidth: "100%",
                      }}
                    />
                  </Col>
                  <Col lg={6}>
                    <h3 className="mb-4">Company Overview</h3>
                    <p className="text-justify" style={{ color: "black" }}>
                      Welcome to The Ceylon Traveler, your ultimate gateway to
                      exploring the unparalleled beauty and rich heritage of Sri
                      Lanka. Founded with a passion for travel and adventure, we
                      specialize in crafting unforgettable experiences across
                      this island paradise. Whether you're seeking serene
                      beaches, lush tea plantations, or historic landmarks, we
                      ensure every journey with us is extraordinary.
                    </p>
                    <h3 className="mb-4">Our Story</h3>
                    <p className="text-justify" style={{ color: "black" }}>
                      The Ceylon Traveler was born from a deep love for Sri
                      Lanka’s diverse landscapes and cultural richness. Our
                      journey began with a simple idea: to share the island’s
                      hidden gems with travelers from around the world. Over the
                      years, we’ve grown into a trusted travel partner, helping
                      countless adventurers discover the magic of Sri Lanka,
                      from its bustling cities to its tranquil countryside.
                    </p>
                  </Col>
                  <h3 className="mb-4">Our Mission</h3>
                  <p className="text-justify" style={{ color: "black" }}>
                    Our mission is to provide exceptional travel experiences
                    that showcase the best of Sri Lanka, combining comfort,
                    adventure, and cultural immersion. We aim to make every trip
                    seamless and memorable, offering tailored services that
                    cater to the unique needs and desires of each traveler.
                  </p>
                  <h3 className="mb-4">Our Vision</h3>
                  <p className="text-justify" style={{ color: "black" }}>
                    We envision The Ceylon Traveler as the leading name in Sri
                    Lankan tourism, recognized globally for our commitment to
                    excellence, sustainability, and authentic travel
                    experiences. We strive to continuously innovate and expand
                    our offerings, making Sri Lanka accessible and enchanting
                    for all.
                  </p>
                  <h3 className="mb-4">Our Team</h3>
                  <p className="text-justify" style={{ color: "black" }}>
                    Meet the passionate team behind The Ceylon Traveler. Our
                    dedicated travel experts and local guides bring years of
                    experience and an insider’s knowledge of Sri Lanka’s
                    best-kept secrets. From planning your itinerary to ensuring
                    a smooth journey, we’re here to make your travel dreams come
                    true.
                  </p>
                </Row>
              </Container>
            </div>
            <div
              className="col-lg-7"
              style={{
                background:
                  "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(img/logo.png)",
                backgroundSize: "cover",
                height: "100vh",
                width: "100%",
                borderRadius: "15px",
              }}
            >
              <h1 className="mb-4 text-dark">
                {" "}
                <span className="text-primary">Why Choose Us?</span>
              </h1>

              <p
                className="mb-4 text-dark"
                style={{ fontSize: "18px", lineHeight: "1.8" }}
              >
                Explore the beauty of Sri Lanka with ease and convenience. From
                pristine beaches to majestic mountains, historical landmarks to
                vibrant culture, our travel planner helps you craft
                unforgettable journeys.
              </p>
              <div className="row gy-2 gx-4 mb-4" style={{ color: "black" }}>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>
                    First className Flights
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>
                    Handpicked Hotels
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>5
                    Star Accommodations
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>
                    Latest Model Vehicles
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>150
                    Premium City Tours
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>
                    24/7 Service
                  </p>
                </div>
                <br></br>
                <h3 className="mb-4">Achievements and Partnerships</h3>

                <p
                  className="mb-4 text-dark"
                  style={{ fontSize: "18px", lineHeight: "1.8" }}
                >
                  We are proud to collaborate with some of the top names in the
                  travel industry, ensuring our clients receive the best
                  services and experiences. Our dedication to excellence has
                  earned us numerous accolades and a loyal customer base.
                </p>
              </div>
              <a
                href="/services"
                className="btn btn-primary rounded-pill py-3 px-5"
                style={{ fontSize: "18px" }}
              >
                Start Exploring
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
