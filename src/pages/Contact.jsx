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
                        <div class="col-lg-8">
                        <h3 class="mb-2">Send us a message</h3>
                        <p class="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. </p>
                        <form>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control border-0" id="name" placeholder="Your Name"/>
                                        <label for="name">Your Name</label>
                                    </div>
                                    </div>
                                    <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="email" class="form-control border-0" id="email" placeholder="Your Email"/>
                                        <label for="email">Your Email</label>
                                    </div>
                                    </div>
                                    <div class="col-12">
                                    <div class="form-floating">
                                        <input type="text" class="form-control border-0" id="subject" placeholder="Subject"/>
                                        <label for="subject">Subject</label>
                                    </div>
                                    </div>
                                    <div class="col-12">
                                    <div class="form-floating">
                                        <textarea class="form-control border-0" placeholder="Leave a message here" id="message" style={{ height: "160px" }}></textarea>
                                        <label for="message">Message</label>
                                    </div>
                                </div>
            <Footer/>
        </div>
    )
}