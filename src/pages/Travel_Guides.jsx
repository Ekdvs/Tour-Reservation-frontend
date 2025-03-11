import React, { useEffect, useState } from "react";
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";
import { FaArrowLeft } from "react-icons/fa";

export default function Travel_Guides() {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    // Fetch travel guides data from backend
    fetch("https://online-travel-planning-production.up.railway.app/user/travel-guides") // Ensure this is the correct endpoint
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the data to check the structure
        setGuides(data);
      })
      .catch((error) => console.error("Error fetching guides:", error));
  }, []);

  return (
    <div>
      <Topbar />
      <Navbar />

      <div className="container-fluid bg-breadcrumb">
        <div
          className="container text-center py-5"
          style={{ maxWidth: "900px" }}
        >
          <h3 className="text-white display-3 mb-4">Our Travel Guides</h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">Guides</li>
          </ol>
        </div>
      </div>

      <div
        className="container-fluid guide py-5"
        style={{
          backgroundImage: `linear-gradient(rgba(19, 53, 123, .6), rgba(19, 53, 123, .6)), url(../img/R.jpeg)`,
          backgroundSize: "cover",
          background_attachment: "fixed",
        }}
      >
        <div className="container py-5">
          <div
            className="mx-auto text-center mb-5"
            style={{ maxWidth: "900px" }}
          >
            <h5 className="section-title px-3">Travel Guide</h5>
            <h1 className="mb-0">Meet Our Guide</h1>
          </div>
          <div className="row g-4">
            {guides.length > 0 ? (
              guides.map((guide, index) => (
                <div className="col-md-6 col-lg-3" key={index}>
                  <div className="guide-item">
                    <div className="guide-img">
                      <div className="guide-img-efects">
                        {/* Ensure that the image is being rendered properly */}
                        <img
                          src={`data:${guide.contentType};base64,${guide.imageData}`}
                          style={{
                            width: "300px", // Set fixed width
                            height: "200px", // Set fixed height
                            // Ensure the image covers the dimensions without distortion
                            borderRadius: "8px", // Optional: Rounded corners
                          }}
                          className="img-fluid w-100 rounded-top"
                          alt={`Travel Guide ${index + 1}`}
                        />
                      </div>
                      <div className="guide-icon rounded-pill p-2">
                        <button
                          className="btn btn-square btn-primary rounded-circle mx-1"
                          onClick={() =>
                            (window.location.href = "https://facebook.com")
                          }
                        >
                          <i className="fab fa-facebook-f"></i>
                        </button>
                        <button
                          className="btn btn-square btn-primary rounded-circle mx-1"
                          onClick={() =>
                            (window.location.href = "https://twitter.com")
                          }
                        >
                          <i className="fab fa-twitter"></i>
                        </button>
                        <button
                          className="btn btn-square btn-primary rounded-circle mx-1"
                          onClick={() =>
                            (window.location.href = "https://instagram.com")
                          }
                        >
                          <i className="fab fa-instagram"></i>
                        </button>
                        <button
                          className="btn btn-square btn-primary rounded-circle mx-1"
                          onClick={() =>
                            (window.location.href = "https://linkedin.com")
                          }
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </button>
                      </div>
                    </div>
                    <div className="guide-title text-center rounded-bottom p-4">
                      <div className="guide-title-inner">
                        {/* Display the first name and last name separately */}
                        <h4 className="mt-3">
                          {guide.firstName} {guide.lastName}
                        </h4>
                        <p className="mb-0">{guide.designation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No travel guides available at the moment.</p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
