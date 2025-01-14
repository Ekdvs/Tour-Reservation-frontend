import React from 'react'
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
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
];

export default function Our_Gallery() {
  return (
    <div>
      <Topbar />
      <div className="navbar-container">
        <Navbar />
      </div>
      <div class="container-fluid bg-breadcrumb">
        <div class="container text-center py-5" style={{ maxwidth: "900px" }}>
          <h3 class="text-white display-3 mb-4">Tour Category</h3>
          
    
  );
}
