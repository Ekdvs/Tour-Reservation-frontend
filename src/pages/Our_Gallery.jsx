import React from 'react';
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";

// Image paths from the public folder
const images = [
  "/img/gallery-1.jpg",
  "/img/gallery-2.jpg",
  "/img/gallery-3.jpg",
  "/img/gallery-4.jpg",
  "/img/gallery-5.jpg",
  "/img/gallery-6.jpg",
  "/img/gallery-7.jpg",
  "/img/gallery-8.jpg",
  "/img/gallery-9.jpg",
  "/img/gallery-10.jpg",
  "/img/gallery-11.jpg",
  "/img/gallery-12.jpg",
];

export default function Our_Gallery() {
  return (
    <div>
      <Topbar />
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
          <h3 className="text-white display-3 mb-4">Travel Gallery</h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">Gallery</li>
          </ol>
        </div>
      </div>

      {/* Carousel Section */}
      <Container className="my-4">
        <Carousel>
          {images.slice(0, 6).map((src, index) => (
            <Carousel.Item key={index}>
              <Image src={src} alt={`Slide ${index + 1}`} fluid className="d-block w-100" />
              <Carousel.Caption>
                <h3>Beautiful Destination {index + 1}</h3>
                <p>Discover the beauty of Sri Lanka.</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      {/* Image Grid Section */}
      <Container className="my-4">
        <h1 className="text-center mb-4">Capture the Essence of Sri Lanka</h1>
        <Row>
          {images.map((src, index) => (
            <Col xs={6} md={4} key={index} className="mb-4">
              <Image src={src} rounded fluid className="zoom" />
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </div>
  );
}
