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
                        
            <Footer/>
        </div>
    )
}