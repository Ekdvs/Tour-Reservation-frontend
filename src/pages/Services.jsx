import React from "react";
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";

export default function Services() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
          <h3 className="text-white display-3 mb-4">Our Services</h3>
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

      <div className="container-fluid bg-light service py-5">
        <div className="container py-5">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: "900px" }}>
            <h5 className="section-title px-3">Services</h5>
            <h1 className="mb-0">Our Services</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="row g-4">
                {[
                  {
                    title: "WorldWide Tours",
                    description:
                      "Explore the world with our curated global tours offering unforgettable experiences.",
                    icon: "fa-globe",
                  },
                  {
                    title: "Hotel Reservation",
                    description:
                      "Book hotels effortlessly with our reliable reservation system for your convenience.",
                    icon: "fa-hotel",
                  },
                  {
                    title: "Travel Guides",
                    description:
                      "Get the best travel advice from experienced guides to make your trips enjoyable.",
                    icon: "fa-user",
                  },
                  {
                    title: "Event Management",
                    description:
                      "Plan and execute events seamlessly with our professional event management services.",
                    icon: "fa-cog",
                  },
                ].map((service, index) => (
                  <div className="col-12" key={index}>
                    <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                      <div className="service-content text-end">
                        <h5 className="mb-4">{service.title}</h5>
                        <p className="mb-0">{service.description}</p>
                      </div>
                      <div className="service-icon p-4">
                        <i className={`fa ${service.icon} fa-4x text-primary`}></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-4">
                {[
                  {
                    title: "WorldWide Tours",
                    description:
                      "Discover global wonders through our exclusive worldwide tours.",
                    icon: "fa-globe",
                  },
                  {
                    title: "Hotel Reservation",
                    description:
                      "Find the perfect hotel and reserve with ease using our platform.",
                    icon: "fa-hotel",
                  },
                  {
                    title: "Travel Guides",
                    description:
                      "Navigate your destinations with confidence guided by experts.",
                    icon: "fa-user",
                  },
                  {
                    title: "Event Management",
                    description:
                      "Ensure your events are a success with our comprehensive services.",
                    icon: "fa-cog",
                  },
                ].map((service, index) => (
                  <div className="col-12" key={index}>
                    <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                      <div className="service-icon p-4">
                        <i className={`fa ${service.icon} fa-4x text-primary`}></i>
                      </div>
                      <div className="service-content">
                        <h5 className="mb-4">{service.title}</h5>
                        <p className="mb-0">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12">
              <div className="text-center">
                <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href="">
                  Service More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
