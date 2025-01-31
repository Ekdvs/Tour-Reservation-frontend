import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import "./PackagesPage.css"; // Import custom CSS for additional styling
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";

export default function PackagesPage() {
  const [packages, setPackages] = useState([]);
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [selectedType, setSelectedType] = useState("All");

  useEffect(() => {
    axios
      .get("http://localhost:8080/packages/getAllPackages")
      .then((response) => {
        setPackages(response.data);
        setFilteredPackages(response.data);
      })
      .catch((error) => console.error("Error fetching packages:", error));
  }, []);

  const packageTypes = ["All", "Honeymoon", "Family", "Adventure", "Budget", "Luxury"];

  const handleFilter = (type) => {
    setSelectedType(type);
    if (type === "All") {
      setFilteredPackages(packages);
    } else {
      setFilteredPackages(packages.filter((pkg) => pkg.packageType === type));
    }
  };

  return (
    <div>
      <Topbar/>
      <Navbar/>
      <div class="container-fluid bg-breadcrumb">
          <div class="container text-center py-5" style={{ maxWidth: "900px" }}>
            <h3 class="text-white display-3 mb-4">Explore Our Travel Packages</h3>
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="/Services">Pages</a>
              </li>
              <li class="breadcrumb-item active text-white">Services</li>
            </ol>
          </div>
        </div>
    <div className="container py-5">
      

      {/* Package Type Filters */}
      <div className="row justify-content-center mb-5">
        {packageTypes.map((type) => (
          <div key={type} className="col-md-2 col-sm-4 col-6 text-center">
            <button
              className={`btn filter-btn ${selectedType === type ? "active" : ""}`}
              onClick={() => handleFilter(type)}
            >
              <img
                src={`img/${type.toLowerCase()}.jpg`}
                alt={type}
                className="img-fluid rounded-circle shadow"
              />
              <span className="filter-text">{type}</span>
            </button>
          </div>
        ))}
      </div>

      <h3 className="text-center text-secondary mb-4">{selectedType} Packages</h3>

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
                <p className="card-text text-muted">{pkg.description.substring(0, 100)}...</p>
                <p className="price-tag">${pkg.price}</p>
                <a href={`/package/${pkg.id}`} className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
