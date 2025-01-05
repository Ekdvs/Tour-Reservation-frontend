import React from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Travel_Guides() {
    return (
    <div>
    <Topbar />
    <Navbar />

    <div class="container-fluid bg-breadcrumb">
        <div class="container text-center py-5" style={{ maxwidth: "900px" }}>
        <h3 class="text-white display-3 mb-4">Our Travel Guides</h3>
        <ol class="breadcrumb justify-content-center mb-0">
            <li class="breadcrumb-item">
            <a href="/">Home</a>
            </li>
            <li class="breadcrumb-item">
            <a href="/">Pages</a>
            </li>
            <li class="breadcrumb-item active text-white">Guides</li>
        </ol>
        </div>
    </div>

    <div class="container-fluid guide py-5">
        <div class="container py-5">
        <div class="mx-auto text-center mb-5" style={{ maxwidth: "900px" }}>
            <h5 class="section-title px-3">Travel Guide</h5>
            <h1 class="mb-0">Meet Our Guide</h1>
        </div>
        <div class="row g-4">
            <div class="col-md-6 col-lg-3">
            <div class="guide-item">
                <div class="guide-img">
                <div class="guide-img-efects">
                    <img
                    src="img/guide-1.jpg"
                    class="img-fluid w-100 rounded-top"
                    alt="Travel Guide 1"
                    />
                </div>
                <div class="guide-icon rounded-pill p-2">
                    <button
                    class="btn btn-square btn-primary rounded-circle mx-1"
                    onClick={() =>
                        (window.location.href = "https://facebook.com")
                    }
                    >
                    <i class="fab fa-facebook-f"></i>
                    </button>
                    <button
                    class="btn btn-square btn-primary rounded-circle mx-1"
                    onClick={() =>
                        (window.location.href = "https://twitter.com")
                    }
                    >
                    <i class="fab fa-twitter"></i>
                    </button>
                    <button
                    class="btn btn-square btn-primary rounded-circle mx-1"
                    onClick={() =>
                        (window.location.href = "https://instagram.com")
                    }
                    >
                    <i class="fab fa-instagram"></i>
                    </button>
                    <button
                    class="btn btn-square btn-primary rounded-circle mx-1"
                    onClick={() =>
                        (window.location.href = "https://linkedin.com")
                    }
                    >
                    <i class="fab fa-linkedin-in"></i>
                    </button>
                </div>
                </div>
                <div class="guide-title text-center rounded-bottom p-4">
                <div class="guide-title-inner">
                    <h4 class="mt-3">Full Name</h4>
                    <p class="mb-0">Designation</p>
                </div>
                </div>
            </div>
            </div>
            <div class="col-md-6 col-lg-3">
            <div class="guide-item">
                <div class="guide-img">
                <div class="guide-img-efects">
                    <img
                    src="img/guide-2.jpg"
                    class="img-fluid w-100 rounded-top"
                    alt="Travel Guide 2"
                    />
                </div>
                <div class="guide-icon rounded-pill p-2">
                    <button
                    class="btn btn-square btn-primary rounded-circle mx-1"
                    onClick={() =>
                        (window.location.href = "https://facebook.com")
                    }
                    >
                    <i class="fab fa-facebook-f"></i>
                    </button>
                    <button
                    class="btn btn-square btn-primary rounded-circle mx-1"
                    onClick={() =>
                        (window.location.href = "https://twitter.com")
                    }
                    >
                    <i class="fab fa-twitter"></i>
                    </button>
                    <button
                    class="btn btn-square btn-primary rounded-circle mx-1"
                    onClick={() =>
                        (window.location.href = "https://instagram.com")
                    }
                    >
                    <i class="fab fa-instagram"></i>
                    </button>
                    <button
                    class="btn btn-square btn-primary rounded-circle mx-1"
                    onClick={() =>
                        (window.location.href = "https://linkedin.com")
                    }
                    >
                    <i class="fab fa-linkedin-in"></i>
                    </button>
                </div>
                </div>
                <div class="guide-title text-center rounded-bottom p-4">
                <div class="guide-title-inner">
                    <h4 class="mt-3">Full Name</h4>
                    <p class="mb-0">Designation</p>
                </div>
                </div>
            </div>
            </div>
            <div class="col-md-6 col-lg-3">
            <div class="guide-item">
                <div class="guide-img">
                <div class="guide-img-efects">
                    <img
                    src="img/guide-3.jpg"
                    class="img-fluid w-100 rounded-top"
                    alt="Travel Guide 3"
                    />
                </div>
                <div class="guide-icon rounded-pill p-2">
                    <button
                    class="btn btn-square btn-primary rounded-circle mx-1"
                    onClick={() =>
                        (window.location.href = "https://facebook.com")
                    }
                    >
                    <i class="fab fa-facebook-f"></i>
                    </button>
                    <button
                    class="btn btn-square btn-primary rounded-circle mx-1"
                    onClick={() =>
                        (window.location.href = "https://twitter.com")
                    }
                    >
                    <i class="fab fa-twitter"></i>
                    </button>
                    <button
                    class="btn btn-square btn-primary rounded-circle mx-1"
                    onClick={() =>
                        (window.location.href = "https://instagram.com")
                    }
                    >
                    <i class="fab fa-instagram"></i>
                    </button>
                    <button
                    class="btn btn-square btn-primary rounded-circle mx-1"
                    onClick={() =>
                        (window.location.href = "https://linkedin.com")
                    }
                    >
                    <i class="fab fa-linkedin-in"></i>
                    </button>
                </div>
                </div>
                <div class="guide-title text-center rounded-bottom p-4">
                <div class="guide-title-inner">
                    <h4 class="mt-3">Full Name</h4>
                    <p class="mb-0">Designation</p>
                </div>
                </div>
            </div>
            </div>
            <div class="col-md-6 col-lg-3">
            <div class="guide-item">
                <div class="guide-img">
                <div class="guide-img-efects">
                    <img
                    src="img/guide-4.jpg"
                    class="img-fluid w-100 rounded-top"
                    alt="Travel Guide 4"
                    />
                </div>
                <div class="guide-icon rounded-pill p-2">
                    <button
                    class="btn btn-square btn-primary rounded-circle mx-1"
                    onClick={() =>
                        (window.location.href = "https://facebook.com")
                    }
                    >
                    <i class="fab fa-facebook-f"></i>
                    </button>
                    <button
                    class="btn btn-square btn-primary rounded-circle mx-1"
                    onClick={() =>
                        (window.location.href = "https://twitter.com")
                    }
                    >
                    <i class="fab fa-twitter"></i>
                    </button>
                    <button
                    class="btn btn-square btn-primary rounded-circle mx-1"
                    onClick={() =>
                        (window.location.href = "https://instagram.com")
                    }
                    >
                    <i class="fab fa-instagram"></i>
                    </button>
                    <button
                    class="btn btn-square btn-primary rounded-circle mx-1"
                    onClick={() =>
                        (window.location.href = "https://linkedin.com")
                    }
                    >
                    <i class="fab fa-linkedin-in"></i>
                    </button>
                </div>
                </div>
                <div class="guide-title text-center rounded-bottom p-4">
                <div class="guide-title-inner">
                    <h4 class="mt-3">Full Name</h4>
                    <p class="mb-0">Designation</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>

    <Footer />
    </div>
);
}