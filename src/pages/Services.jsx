import React from "react";
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";

export default function Services() {
    return (
      <div>
        <Topbar />
        <Navbar />
        <div class="container-fluid bg-breadcrumb">
          <div class="container text-center py-5" style={{ maxWidth: "900px" }}>
            <h3 class="text-white display-3 mb-4">Explore Our Services</h3>
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

        <div class="container-fluid bg-light service py-5">
          <div class="container py-5">
            <div class="mx-auto text-center mb-5" style={{ maxWidth: "900px" }}>
              <h5 class="section-title px-3">Services</h5>
              <h1 class="mb-0">Our Services</h1>
            </div>
            <div class="row g-4">
              <div class="col-lg-6">
                <div class="row g-4">
                  <div class="col-12">
                    <div class="service-content-inner d-flex  bg-white border border-primary rounded p-4 pe-4">
                      <div>
                        <h5>Tailored Tour Packages</h5>
                        <p className="text-justify" style={{ color: "black" }}>
                          Choose from a variety of tour packages designed to
                          match your interests. Whether you're into adventure,
                          culture, or relaxation, we’ve got something for you.
                          From thrilling activities to immersive cultural
                          experiences, each package includes accommodations,
                          transportation, and guided tours for a seamless trip.
                          Start your journey today with a package that fits your
                          style.
                        </p>
                        <b>Explore Our Packages</b>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="service-content-inner d-flex  bg-white border border-primary rounded p-4 pe-4">
                      <div>
                        <h5>Comfortable & Cozy Stays</h5>
                        <p className="text-justify" style={{ color: "black" }}>
                          Find your perfect home away from home with our range
                          of accommodations. Choose from luxurious hotels,
                          relaxing resorts, and unique stays, all designed to
                          make your trip unforgettable.
                        </p>
                        <b>Book Your Stay Now</b>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="service-content-inner d-flex  bg-white border border-primary rounded p-4 pe-4">
                      <div>
                        <h5>Seamless Travel Solutions</h5>
                        <p className="text-justify" style={{ color: "black" }}>
                          Enjoy smooth, stress-free journeys with our transportation services. From airport transfers to local travel, we ensure you get to your destination comfortably and on time.
                        </p>
                        <b>Discover More</b>
                      </div>
                    </div>
                  </div>
                      <div class="service-icon p-4">
                        <i class="fa fa-user fa-4x text-primary"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                      <div class="service-content text-end">
                        <h5 class="mb-4">Event Management</h5>
                        <p class="mb-0" style={{ color: "black" }}>
                          Dolor sit amet consectetur adipisicing elit. Non alias
                          eum, suscipit expedita corrupti officiis debitis
                          possimus nam laudantium beatae quidem dolore
                          consequuntur voluptate rem reiciendis, omnis sequi
                          harum earum.
                        </p>
                      </div>
                      <div class="service-icon p-4">
                        <i class="fa fa-cog fa-4x text-primary"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="row g-4">
                  <div class="col-12">
                    <div class="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                      <div class="service-icon p-4">
                        <i class="fa fa-globe fa-4x text-primary"></i>
                      </div>
                      <div class="service-content">
                        <h5 class="mb-4">WorldWide Tours</h5>
                        <p class="mb-0" style={{ color: "black" }}>
                          Dolor sit amet consectetur adipisicing elit. Non alias
                          eum, suscipit expedita corrupti officiis debitis
                          possimus nam laudantium beatae quidem dolore
                          consequuntur voluptate rem reiciendis, omnis sequi
                          harum earum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                      <div class="service-icon p-4">
                        <i class="fa fa-hotel fa-4x text-primary"></i>
                      </div>
                      <div class="service-content">
                        <h5 class="mb-4">Hotel Reservation</h5>
                        <p class="mb-0" style={{ color: "black" }}>
                          Dolor sit amet consectetur adipisicing elit. Non alias
                          eum, suscipit expedita corrupti officiis debitis
                          possimus nam laudantium beatae quidem dolore
                          consequuntur voluptate rem reiciendis, omnis sequi
                          harum earum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                      <div class="service-icon p-4">
                        <i class="fa fa-user fa-4x text-primary"></i>
                      </div>
                      <div class="service-content">
                        <h5 class="mb-4">Travel Guides</h5>
                        <p class="mb-0" style={{ color: "black" }}>
                          Dolor sit amet consectetur adipisicing elit. Non alias
                          eum, suscipit expedita corrupti officiis debitis
                          possimus nam laudantium beatae quidem dolore
                          consequuntur voluptate rem reiciendis, omnis sequi
                          harum earum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 ps-0">
                      <div class="service-icon p-4">
                        <i class="fa fa-cog fa-4x text-primary"></i>
                      </div>
                      <div class="service-content">
                        <h5 class="mb-4">Event Management</h5>
                        <p class="mb-0" style={{ color: "black" }}>
                          Dolor sit amet consectetur adipisicing elit. Non alias
                          eum, suscipit expedita corrupti officiis debitis
                          possimus nam laudantium beatae quidem dolore
                          consequuntur voluptate rem reiciendis, omnis sequi
                          harum earum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="text-center">
                  <a
                    class="btn btn-primary rounded-pill py-3 px-5 mt-2"
                    href="/Services"
                  >
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