import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";
import Subscribe from "./Subscribe";
import { toast } from "react-toastify";
import { FaArrowLeft } from "react-icons/fa";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");  // 1. Define the search term state
  const navigate = useNavigate();  // 2. Use the useNavigate hook for navigation

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      alert("Please enter a search term.");
      return;
    }

    // Redirect based on search term
    switch (searchTerm.toLowerCase()) {
      case "login":
        navigate("/login");
        break;
      case "register":
        navigate("/register");
        break;
      case "forgotpassword":
        navigate("/forgotpassword");
        break;
      
      case "passwordchange":
        navigate("/passwordchange");
        break;
      case "profile":
        navigate("/profile");
        break;
      case "about":
        navigate("/about");
        break;
      case "services":
        navigate("/services");
        break;
      case "contact":
        navigate("/contact");
        break;
      case "eventshowpage":
        navigate("/eventshowpage");
        break;
      
      case "place":
        navigate("/place");
        break;
      
      case "addtravelguide":
        navigate("/addtravelguide");
        break;
      case "logout":
        navigate("/logout");
        break;
      
      case "destination":
        navigate("/destination");
        break;
      case "testimonial":
        navigate("/testimonial");
        break;
      case "explore_tour":
        navigate("/explore_tour");
        break;
      case "travel_guides":
        navigate("/travel_guides");
        break;
      case "our_gallery":
        navigate("/our_gallery");
        break;
      case "blog":
        navigate("/blog");
        break;
      case "place-detail":
        navigate("/place-detail");
        break;
      
      case "packages":
        navigate("/packages");
        break;
      
      case "buy-travel-guide":
        navigate("/buy-travel-guide/:packageId");
        break;
      default:
        alert("Please enter a valid search item."); // Default case for unrecognized search terms
    }
  };

  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="carousel-header">
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-bs-target="#carouselId"
              data-bs-slide-to="0"
              className="active"
            ></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img
                src="img/carousel-2.jpg"
                className="img-fluid"
                alt="Explore The World"
              />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4
                    className="text-white text-uppercase fw-bold mb-4"
                    style={{ letterSpacing: "3px" }}
                  >
                    Sri Lanka
                  </h4>
                  <h1 className="display-2 text-capitalize text-white mb-4">
                    The Island of Serendipity
                  </h1>
                  <div className="d-flex align-items-center justify-content-center">
                    <a
                      className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5"
                      href="/"
                    >
                      Discover Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="img/carousel-1.jpg"
                className="img-fluid"
                alt="Find Your Perfect Tour"
              />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4
                    className="text-white text-uppercase fw-bold mb-4"
                    style={{ letterSpacing: "3px" }}
                  >
                    {" "}
                    Explore The World
                  </h4>
                  <h1 className="display-2 text-capitalize text-white mb-4">
                    Find Your Perfect Tour At Travel
                  </h1>
                  <div className="d-flex align-items-center justify-content-center">
                    <a
                      className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5"
                      href="/"
                    >
                      Discover Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="img/carousel-3.jpg"
                className="img-fluid"
                alt="You Like To Go?"
              />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4
                    className="text-white text-uppercase fw-bold mb-4"
                    style={{ letterSpacing: "3px" }}
                  >
                    {" "}
                    Explore The World
                  </h4>
                  <h1 className="display-2 text-capitalize text-white mb-4">
                    You Like To Go?
                  </h1>
                  <div className="d-flex align-items-center justify-content-center">
                    <a
                      className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5"
                      href="/"
                    >
                      Discover Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon btn bg-primary"
              aria-hidden="false"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon btn bg-primary"
              aria-hidden="false"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div
        className="container-fluid search-bar position-relative"
        style={{ top: "-50%", transform: "translateY(-50%)" }}
      >
        <div className="container">
          <div
            className="position-relative rounded-pill w-100 mx-auto p-5"
            style={{ background: "rgba(19, 53, 123, 0.8)" }}
          >
            <input
              className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
              type="text"
              value={searchTerm}  // 3. Bind searchTerm state to the input field
              onChange={(e) => setSearchTerm(e.target.value)}  // 4. Update searchTerm when input changes
              placeholder="Search for pages (login, register, etc.)"
            />
            <button
              type="button"
              className="btn btn-primary rounded-pill py-2 px-4 position-absolute me-2"
              style={{
                top: "50%",
                right: "46px",
                transform: "translateY(-50%)",
              }}
              onClick={handleSearch}  // 5. Trigger the handleSearch function on button click
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div></div>
      <Subscribe />
      <Footer />
    </div>
  );
}
