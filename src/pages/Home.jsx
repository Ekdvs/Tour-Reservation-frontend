import React from "react";
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";
import Subscribe from './Subscribe'

export default function Home() {
    return (
        <div>
            <Topbar/>
            <Navbar/>
            <div classNameName="carousel-header">
                <div id="carouselId" classNameName="carousel slide" data-bs-ride="carousel">
                <ol classNameName="carousel-indicators">
                    <li data-bs-target="#carouselId" data-bs-slide-to="0" classNameName="active"></li>
                        <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
                    </ol>
                    <div classNameName="carousel-inner" role="listbox">
                        <div classNameName="carousel-item active">
                            <img src="img/carousel-2.jpg" classNameName="img-fluid" alt="Explore The World"/>
                            <div classNameName="carousel-caption">
                                <div classNameName="p-3" style={{ maxWidth: '900px' }}>
                                    <h4 classNameName="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}>Explore The World</h4>
                                    <h1 classNameName="display-2 text-capitalize text-white mb-4">Let's The Sri Lanka Together!</h1>
                                    <div classNameName="d-flex align-items-center justify-content-center">
                                        <a classNameName="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" href="/">Discover Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div classNameName="carousel-item">
                            <img src="img/carousel-1.jpg" classNameName="img-fluid" alt="Find Your Perfect Tour"/>
                            <div classNameName="carousel-caption">
                                <div classNameName="p-3" style={{ maxWidth: '900px' }}>
                                    <h4 classNameName="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}> Explore The World</h4>
                                    <h1 classNameName="display-2 text-capitalize text-white mb-4">Find Your Perfect Tour At Travel</h1>
                                    <div classNameName="d-flex align-items-center justify-content-center">
                                        <a classNameName="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" href="/">Discover Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div classNameName="carousel-item">
                            <img src="img/carousel-3.jpg" classNameName="img-fluid" alt="You Like To Go?"/>
                            <div classNameName="carousel-caption">
                                <div classNameName="p-3" style={{ maxWidth: '900px' }}>
                                    <h4 classNameName="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}> Explore The World</h4>
                                    <h1 classNameName="display-2 text-capitalize text-white mb-4">You Like To Go?</h1>
                                    <div classNameName="d-flex align-items-center justify-content-center">
                                        <a classNameName="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" href="/">Discover Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button classNameName="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                        <span classNameName="carousel-control-prev-icon btn bg-primary" aria-hidden="false"></span>
                        <span classNameName="visually-hidden">Previous</span>
                    </button>
                    <button classNameName="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                        <span classNameName="carousel-control-next-icon btn bg-primary" aria-hidden="false"></span>
                        <span classNameName="visually-hidden">Next</span>
                    </button>
                    </div>
                    
                </div>
                
        <div classNameName="container-fluid search-bar position-relative" style={{ top: '-50%', transform: 'translateY(-50%)' }}>
            <div classNameName="container">
                <div classNameName="position-relative rounded-pill w-100 mx-auto p-5" style={{ background: 'rgba(19, 53, 123, 0.8)' }}                >
                    <input classNameName="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Eg: Sri lanka"/>
                    <button type="button" classNameName="btn btn-primary rounded-pill py-2 px-4 position-absolute me-2" style={{ top: '50%', right: '46px', transform: 'translateY(-50%)' }}
                    >Search</button>
                </div>
            </div>
        </div>
        <div>
        
        </div>
        <Subscribe/>
        <Footer/>
    </div>
    )
}