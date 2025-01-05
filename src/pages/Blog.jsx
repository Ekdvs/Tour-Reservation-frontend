import React from "react";
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";

export default function Blog() {
    return (
        <div>
        <Topbar/>
        <Navbar/>
        <div class="container-fluid bg-breadcrumb">
            <div class="container text-center py-5" style={{ maxWidth: '900px' }}>
                <h3 class="text-white display-3 mb-4">Our Blog</h3>
                <ol class="breadcrumb justify-content-center mb-0">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item"><a href="/Blog">Pages</a></li>
                    <li class="breadcrumb-item active text-white">Blog</li>
                </ol>
            </div>
        </div>
        <div class="container-fluid blog py-5">
            <div class="container py-5">
                <div class="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
                    <h5 class="section-title px-3">Our Blog</h5>
                    <h1 class="mb-4">Popular Travel Blogs</h1>
                    <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti deserunt tenetur sapiente atque. Magni non explicabo beatae sit, vel reiciendis consectetur numquam id similique sunt error obcaecati ducimus officia maiores.
                    </p>
                    </div>
                    <div class="row g-4 justify-content-center">
                    <div class="col-lg-4 col-md-6">
                        <div class="blog-item">
                            <div class="blog-img">
                                <div class="blog-img-inner">
                                    <img className="imgluid w-100 rounded-top" src="img/blog-1.jpg" alt="Blog 1"/>
                                    <div class="blog-icon">
                                        <button class="my-auto" style={{ background: 'none', border: 'none', padding: 0 }}><i class="fas fa-link fa-2x text-white"></i></button>
                                    </div>
                                </div>
                                <div class="blog-info d-flex align-items-center border border-start-0 border-end-0">
                                    <small class="flex-fill text-center border-end py-2"><i class="fa fa-calendar-alt text-primary me-2"></i>28 Jan 2050</small>
                                    <button class="btn-hover flex-fill text-center text-white border-end py-2" style={{ background: 'none', border: 'none', padding: 0 }}><i class="fa fa-thumbs-up text-primary me-2"></i>1.7K</button>
                                    <button class="btn-hover flex-fill text-center text-white py-2" style={{ background: 'none', border: 'none', padding: 0 }}><i class="fa fa-comments text-primary me-2"></i>1K</button>
                                </div>
                            </div>
                            <div class="blog-content border border-top-0 rounded-bottom p-4">
                                <p class="mb-3">Posted By: Royal Hamblin </p>
                                <button class="h4" style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', textDecoration: 'underline', cursor: 'pointer' }}>Adventures Trip</button>
                                <p class="my-3">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                                <button class="btn btn-primary rounded-pill py-2 px-4" style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', textDecoration: 'underline', cursor: 'pointer' }}>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="blog-item">
                            <div class="blog-img">
                                <div class="blog-img-inner">
                                    <img class="img-fluid w-100 rounded-top" src="img/blog-2.jpg" alt="Blog 2"/>
                                    <div class="blog-icon">
                                        <button class="my-auto" style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', cursor: 'pointer' }}><i class="fas fa-link fa-2x text-white"></i></button>
                                    </div>
                                </div>
                                <div class="blog-info d-flex align-items-center border border-start-0 border-end-0">
                                    <small class="flex-fill text-center border-end py-2"><i class="fa fa-calendar-alt text-primary me-2"></i>28 Jan 2050</small>
                                    <button class="btn-hover flex-fill text-center text-white border-end py-2" style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', cursor: 'pointer' }}><i class="fa fa-thumbs-up text-primary me-2"></i>1.7K</button>
                                    <button class="btn-hover flex-fill text-center text-white py-2" style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', cursor: 'pointer' }}><i class="fa fa-comments text-primary me-2"></i>1K</button>
                                </div>
                            </div>
                            <div class="blog-content border border-top-0 rounded-bottom p-4">
                                <p class="mb-3">Posted By: Royal Hamblin </p>
                                <button class="h4" style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', textDecoration: 'underline', cursor: 'pointer' }}>Adventures Trip</button>
                                <p class="my-3">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                                <button class="btn btn-primary rounded-pill py-2 px-4" style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', textDecoration: 'underline', cursor: 'pointer' }}>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="blog-item">
                            <div class="blog-img">
                                <div class="blog-img-inner">
                                    <img class="img-fluid w-100 rounded-top" src="img/blog-3.jpg" alt="Blog 3"/>
                                    <div class="blog-icon">
                                        <button class="my-auto" style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', cursor: 'pointer' }}><i class="fas fa-link fa-2x text-white"></i></button>
                                    </div>
                                </div>
                                <div class="blog-info d-flex align-items-center border border-start-0 border-end-0">
                                    <small class="flex-fill text-center border-end py-2"><i class="fa fa-calendar-alt text-primary me-2"></i>28 Jan 2050</small>
                                    <button class="btn-hover flex-fill text-center text-white border-end py-2" style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', cursor: 'pointer' }}><i class="fa fa-thumbs-up text-primary me-2"></i>1.7K</button>
                                    <button class="btn-hover flex-fill text-center text-white py-2" style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', cursor: 'pointer' }}><i class="fa fa-comments text-primary me-2"></i>1K</button>
                                </div>
                            </div>
                            <div class="blog-content border border-top-0 rounded-bottom p-4">
                                <p class="mb-3">Posted By: Royal Hamblin </p>
                                <button class="h4" style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', textDecoration: 'underline', cursor: 'pointer' }}>Adventures Trip</button>
                                <p class="my-3">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                                <button class="btn btn-primary rounded-pill py-2 px-4" style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', textDecoration: 'underline', cursor: 'pointer' }}>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
        <Footer/>

    </div>
    )
}