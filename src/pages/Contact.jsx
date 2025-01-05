import React from "react";
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";
import Subscribe from "./Subscribe";

export default function Contact() {
    return (
        <div>
            <Topbar/>
            <Navbar />
            <div class="container-fluid bg-breadcrumb">
            <div class="container text-center py-5" style={{ maxWidth: "900px" }}>
                <h3 class="text-white display-3 mb-4">Contact Us</h3>
                <ol class="breadcrumb justify-content-center mb-0">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item"><a href="/Contact">Pages</a></li>
                    <li class="breadcrumb-item active text-white">Contact</li>
                    </ol>
                    </div>
        </div>
        <div class="container-fluid contact bg-light py-5">
            <div class="container py-5">
                <div class="mx-auto text-center mb-5" style={{ maxWidth: "900px" }}>
                    <h5 class="section-title px-3">Contact Us</h5>
                    <h1 class="mb-0">Contact For Any Query</h1>
                    </div>
                    <div class="row g-5 align-items-center">
                    <div class="col-lg-4">
                        <div class="bg-white rounded p-4">
                            <div class="text-center mb-4">
                                <i class="fa fa-map-marker-alt fa-3x text-primary"></i>
                                <h4 class="text-primary"><address><p class="mb-0">123 Kandy Colombo Main Street, <br/> Kelaniya, Sri Lanka</p>
                                    </address></h4>
                                    <div class="text-center mb-4">
                                <i class="fa fa-phone-alt fa-3x text-primary mb-3"></i>
                                <h4 class="text-primary">Mobile</h4>
                                <p class="mb-0">+9471 897 4153</p>
                                <p class="mb-0">+9477 603 2660</p>
                                    </div>
                                    <div class="text-center">
                                <i class="fa fa-envelope-open fa-3x text-primary mb-3"></i>
                                <h4 class="text-primary">Email</h4>
                                <p class="mb-0">info@example.com</p>
                                <p class="mb-0">info@example.com</p>
                            </div>
                        </div>
                    </div></div>
            <Footer/>
        </div>
    )
}