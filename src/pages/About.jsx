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
        <div className="container-fluid about py-5" style={{ background: '#f7f8fa' }}>
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-5">
                    <div
                            className="h-100"
                            style={{
                                width: '500px',
                                height: '500px',
                                border: '50px solid',
                                borderColor: 'transparent #13357B transparent #13357B',
                                position: 'relative'
                            }}
                        >
                            <img src="img/about.jpg" className="img-fluid w-100 h-100" alt="Sri Lanka" style={{ objectFit: 'cover', borderRadius: '10px' }} />
                        </div>
                    </div>
                    <div className="col-lg-7" style={{ background: 'linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(img/about-img-1.png)', backgroundSize: 'cover', height: '100vh', width: '100%', borderRadius: '15px' }}>
                        <h5 className="section-about-title pe-3">About Us</h5>
                        <h1 className="mb-4 text-dark">Welcome to <span className="text-primary">Travela</span></h1>
                        <p className="mb-4 text-dark" style={{ fontSize: '18px', lineHeight: '1.8' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, dolorum, doloribus sunt dicta, officia voluptatibus libero necessitatibus natus impedit quam ullam assumenda? Id atque iste consectetur. Commodi odit ab saepe!</p>
                        <p className="mb-4 text-dark" style={{ fontSize: '18px', lineHeight: '1.8' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos voluptatem suscipit neque enim, doloribus ipsum rem eos distinctio, dignissimos nisi saepe nulla? Libero numquam perferendis provident placeat molestiae quia?</p>
                        <div className="row gy-2 gx-4 mb-4">
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>First class Flights</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Handpicked Hotels</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>5 Star Accommodations</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Latest Model Vehicles</p>
                            </div>
    </div>
    )
}