import React from 'react'
import Topbar from '../compodent/Topbar'
import Navbar from '../compodent/Navbar'
import Footer from '../compodent/Footer'

export default function About() {
    return (
        <div>
            <Topbar/>
            <Navbar/>
            <div className="container-fluid bg-breadcrumb">
            <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
            <h3 className="text-white display-3 mb-4">About Us</h3>
            <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href="/About">Pages</a></li>
                    <li className="breadcrumb-item active text-white">About</li>
                </ol>
            </div>
        </div>