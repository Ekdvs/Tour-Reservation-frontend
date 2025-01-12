import React, { useEffect, useState } from "react";
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";

export default function Travel_Guides() {
    const [guides, setGuides] = useState([]);

    useEffect(() => {
        // Fetch travel guides data from backend
        fetch("/api/travel-guides")
            .then((response) => response.json())
            .then((data) => setGuides(data))
            .catch((error) => console.error("Error fetching guides:", error));
    }, []);

    return (
        <div>
            <Topbar />
            <Navbar />

            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
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

            <div className="container-fluid guide py-5">
                <div className="container py-5">
                    <div className="mx-auto text-center mb-5" style={{ maxWidth: "900px" }}>
                        <h5 className="section-title px-3">Travel Guide</h5>
                        <h1 className="mb-0">Meet Our Guide</h1>
                    </div>
                    <div className="row g-4">
                        {guides.map((guide, index) => (
                            <div className="col-md-6 col-lg-3" key={index}>
                                <div className="guide-item">
                                    <div className="guide-img">
                                        <div className="guide-img-efects">
                                            <img
                                                src={guide.imageUrl}
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
                                            <h4 className="mt-3">{guide.fullName}</h4>
                                            <p className="mb-0">{guide.designation}</p>
                                        </div>
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
