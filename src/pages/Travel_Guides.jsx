import react from "react";
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";

export default function Travel_Guides() {
    return (
        <div>
            <Topbar/>
            <Navbar/>
            <div class="container-fluid bg-breadcrumb">
            <div class="container text-center py-5" style={{maxwidth: "900px"}}>
                <h3 class="text-white display-3 mb-4">Our Travel Guides</h3>
                <ol class="breadcrumb justify-content-center mb-0">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item"><a href="/">Pages</a></li>
                    <li class="breadcrumb-item active text-white">Guides</li>
                </ol>
            </div>
            </div>
        <div class="container-fluid guide py-5">
            <div class="container py-5">
                <div class="mx-auto text-center mb-5" style={{maxwidth: "900px"}}>
                    