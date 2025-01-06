import React from 'react'
import Topbar from '../compodent/Topbar'
import Navbar from '../compodent/Navbar'
import Footer from '../compodent/Footer'

export default function About() {
    return (
    <div>
        <Topbar/>
        <Navbar/>
        <div classNameName="container-fluid bg-breadcrumb">
            <div classNameName="container text-center py-5" style={{ maxWidth: '900px' }}>
                <h3 classNameName="text-white display-3 mb-4">About Us</h3>
                <ol classNameName="breadcrumb justify-content-center mb-0">
                    <li classNameName="breadcrumb-item"><a href="/">Home</a></li>
                    <li classNameName="breadcrumb-item"><a href="/About">Pages</a></li>
                    <li classNameName="breadcrumb-item active text-white">About</li>
                </ol>
            </div>
        </div>
        <div classNameName="container-fluid about py-5" style={{ background: '#f7f8fa' }}>
            <div classNameName="container py-5">
                <div classNameName="row g-5 align-items-center">
                    <div classNameName="col-lg-5">
                    <div
                            classNameName="h-100"
                            style={{
                                width: '500px',
                                height: '500px',
                                border: '50px solid',
                                borderColor: 'transparent #13357B transparent #13357B',
                                position: 'relative'
                            }}
                        >
                            <img src="img/about.jpg" classNameName="img-fluid w-100 h-100" alt="Sri Lanka" style={{ objectFit: 'cover', borderRadius: '10px' }} />
                        </div>
                    </div>
                    <div classNameName="col-lg-7" style={{ background: 'linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(img/about-img-1.png)', backgroundSize: 'cover', height: '100vh', width: '100%', borderRadius: '15px' }}>
                        <h5 classNameName="section-about-title pe-3">About Us</h5>
                        <h1 classNameName="mb-4 text-dark">Welcome to <span classNameName="text-primary">Travela</span></h1>
                        <p classNameName="mb-4 text-dark" style={{ fontSize: '18px', lineHeight: '1.8' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, dolorum, doloribus sunt dicta, officia voluptatibus libero necessitatibus natus impedit quam ullam assumenda? Id atque iste consectetur. Commodi odit ab saepe!</p>
                        <p classNameName="mb-4 text-dark" style={{ fontSize: '18px', lineHeight: '1.8' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos voluptatem suscipit neque enim, doloribus ipsum rem eos distinctio, dignissimos nisi saepe nulla? Libero numquam perferendis provident placeat molestiae quia?</p>
                        <div classNameName="row gy-2 gx-4 mb-4">
                            <div classNameName="col-sm-6">
                                <p classNameName="mb-0"><i classNameName="fa fa-arrow-right text-primary me-2"></i>First className Flights</p>
                            </div>
                            <div classNameName="col-sm-6">
                                <p classNameName="mb-0"><i classNameName="fa fa-arrow-right text-primary me-2"></i>Handpicked Hotels</p>
                            </div>
                            <div classNameName="col-sm-6">
                                <p classNameName="mb-0"><i classNameName="fa fa-arrow-right text-primary me-2"></i>5 Star Accommodations</p>
                            </div>
                            <div classNameName="col-sm-6">
                                <p classNameName="mb-0"><i classNameName="fa fa-arrow-right text-primary me-2"></i>Latest Model Vehicles</p>
                            </div>
                            <div classNameName="col-sm-6">
                                <p classNameName="mb-0"><i classNameName="fa fa-arrow-right text-primary me-2"></i>150 Premium City Tours</p>
                            </div>
                            <div classNameName="col-sm-6">
                                <p classNameName="mb-0"><i classNameName="fa fa-arrow-right text-primary me-2"></i>24/7 Service</p>
                            </div>
                        </div>
                        <button classNameName="btn btn-primary rounded-pill py-3 px-5 mt-3" style={{ fontSize: '18px' }}>Read More</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>

    </div>
    )
}