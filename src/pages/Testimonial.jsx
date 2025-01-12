import React from 'react'

import OwlCarousel from 'react-owl-carousel'; 
import Topbar from '../compodent/Topbar';
import Navbar from '../compodent/Navbar';
import Footer from '../compodent/Footer';


export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      comment:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis.",
      img: "img/testimonial-1.jpg",
      name: "John Abraham",
      location: "New York, USA",
    },
    {
      id: 2,
      comment:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis.",
      img: "img/testimonial-2.jpg",
      name: "Sarah Connor",
      location: "Los Angeles, USA",
    },
    {
      id: 3,
      comment:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis.",
      img: "img/testimonial-3.jpg",
      name: "Michael Smith",
      location: "Chicago, USA",
    },
    {
      id: 4,
      comment:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis.",
      img: "img/testimonial-4.jpg",
      name: "Emily Davis",
      location: "Houston, USA",
    },
  ];
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <div class="container-fluid bg-breadcrumb">
            <div class="container text-center py-5" style="max-width: 900px;">
                <h3 class="text-white display-3 mb-4">Our Testimonial</h3>
                <ol class="breadcrumb justify-content-center mb-0">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Pages</a></li>
                    <li class="breadcrumb-item active text-white">Testimonial</li>
                </ol>    
            </div>
        </div>
        <div className="container-fluid testimonial py-5">
      <div className="container py-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: "900px" }}>
          <h5 className="section-title px-3">Testimonial</h5>
          <h1 className="mb-0">Our Clients Say!!!</h1>
        </div>
        <OwlCarousel
          className="testimonial-carousel owl-theme"
          loop
          margin={10}
          nav
          autoplay
          autoplayTimeout={5000}
          responsive={{
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 },
          }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item text-center rounded pb-4">
              <div className="testimonial-comment bg-light rounded p-4">
                <p className="text-center mb-5">{testimonial.comment}</p>
              </div>
              <div className="testimonial-img p-1">
                <img
                  src={testimonial.img}
                  className="img-fluid rounded-circle"
                  alt={testimonial.name}
                />
              </div>
              <div style={{ marginTop: "-35px" }}>
                <h5 className="mb-0">{testimonial.name}</h5>
                <p className="mb-0">{testimonial.location}</p>
                <div className="d-flex justify-content-center">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-primary"></i>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>


      <Footer/>
      
    </div>
  )
}
