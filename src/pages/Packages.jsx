import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import "./PackagesPage.css";
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";
import { useNavigate } from "react-router-dom";

export default function PackagesPage() {
  const [packages, setPackages] = useState([]);
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [selectedType, setSelectedType] = useState("All");
  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
    axios
      .get("https://online-travel-planning-production.up.railway.app/packages/getAllPackages")
      .then((response) => {
        console.log(response.data); // Log the response to check package structure
        setPackages(response.data);
        setFilteredPackages(response.data);
      })
      .catch((error) => console.error("Error fetching packages:", error));
  }, []);

  const packageImages = [
    "all.jpg",
    "honeymoon.jpg",
    "family.jpg",
    "adventure.jpg",
    "budget.jpg",
    "luxury.jpg",
  ];
  
  const packageNames = ["All", "Honeymoon", "Family", "Adventure", "Budget", "Luxury"];
  

  const handleFilter = (name) => {
    setSelectedType(name);
    if (name === "All") {
      setFilteredPackages(packages);
    } else {
      setFilteredPackages(packages.filter((pkg) => pkg.packageType === name));
    }
  };

  const handleViewDetails = (pkgId) => {
    if (pkgId) {
      console.log("Selected Package ID: ", pkgId); // Debugging log
      localStorage.setItem("selectedPackageId", pkgId);
      navigate("/packagedeatail"); // Navigate to the details page after storing the ID
    } else {
      console.error("Package ID is undefined");
    }
  };

  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
          <h3 className="text-white display-3 mb-4">Explore Our Travel Packages</h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/Services">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">Services</li>
          </ol>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(19, 53, 123, .6), rgba(19, 53, 123, .6)), url(../img/subscribe-img.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container py-5">
          {/* Package Type Filters */}
          <div className="row justify-content-center mb-5">
  <div className="col-md-2 col-sm-4 col-6 text-center">
    <button className={`btn filter-btn ${selectedType === "All" ? "active" : ""}`} onClick={() => handleFilter("All")}>
      <img src="img/all.jpg" alt="All" className="img-fluid rounded-circle shadow" />
      <span className="filter-text">All</span>
    </button>
  </div>

  <div className="col-md-2 col-sm-4 col-6 text-center">
    <button className={`btn filter-btn ${selectedType === "Honeymoon" ? "active" : ""}`} onClick={() => handleFilter("Honeymoon")}>
      <img src="img/honeymoon.jpg" alt="Honeymoon" className="img-fluid rounded-circle shadow" />
      <span className="filter-text">Honeymoon</span>
    </button>
  </div>

  <div className="col-md-2 col-sm-4 col-6 text-center">
    <button className={`btn filter-btn ${selectedType === "Family" ? "active" : ""}`} onClick={() => handleFilter("Family")}>
      <img src="img/family.jpg" alt="Family" className="img-fluid rounded-circle shadow" />
      <span className="filter-text">Family</span>
    </button>
  </div>

  <div className="col-md-2 col-sm-4 col-6 text-center">
    <button className={`btn filter-btn ${selectedType === "Adventure" ? "active" : ""}`} onClick={() => handleFilter("Adventure")}>
      <img src="img/adventure.jpg" alt="Adventure" className="img-fluid rounded-circle shadow" />
      <span className="filter-text">Adventure</span>
    </button>
  </div>

  <div className="col-md-2 col-sm-4 col-6 text-center">
    <button className={`btn filter-btn ${selectedType === "Budget" ? "active" : ""}`} onClick={() => handleFilter("Budget")}>
      <img src="img/budget.jpg" alt="Budget" className="img-fluid rounded-circle shadow" />
      <span className="filter-text">Budget</span>
    </button>
  </div>

  <div className="col-md-2 col-sm-4 col-6 text-center">
    <button className={`btn filter-btn ${selectedType === "Luxury" ? "active" : ""}`} onClick={() => handleFilter("Luxury")}>
      <img src="img/luxury.jpg" alt="Luxury" className="img-fluid rounded-circle shadow" />
      <span className="filter-text">Luxury</span>
    </button>
  </div>
</div>;

          <h3 className="text-center text-secondary mb-4">
            {selectedType} Packages
          </h3>

          {/* Display Packages */}
          <div className="row">
            {filteredPackages.map((pkg) => (
              <div key={pkg.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card package-card">
                  <img
                    src={`data:${pkg.contentType};base64,${pkg.imageData}`}
                    className="card-img-top"
                    alt={pkg.name}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{pkg.name}</h5>
                    <p className="card-text text-muted">
                      {pkg.description.substring(0, 100)}...
                    </p>
                    <p className="price-tag">${pkg.price}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleViewDetails(pkg.packageId)} // Pass pkg.id to handleViewDetails
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
