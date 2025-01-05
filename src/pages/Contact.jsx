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
                
            <Footer/>
        </div>
    )
}