import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Topbar from '../compodent/Topbar';
import Navbar from '../compodent/Navbar';
import Footer from '../compodent/Footer';

const Testimonial = () => {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h3 className="text-white display-3 mb-4">Our Testimonial</h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">Testimonial</li>
          </ol>
        </div>
      </div>

      <div className="container py-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: '900px' }}>
          <h5 className="section-title px-3">Testimonial</h5>
          <h1 className="mb-0">What Our Clients Say</h1>
        </div>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item text-center rounded pb-4">
              {/* Remove the comment part */}
              <div className="testimonial-img p-1">
                <img
                  src={testimonial.img}
                  className="img-fluid rounded-circle"
                  alt={testimonial.name}
                />
                 <p className="mb-0"style={{ color: 'black' }}>{testimonial.comment}</p>
              </div>
              <div style={{ marginTop: '35px' }}>
                <h5 className="mb-0">{testimonial.name}</h5>
                <p className="mb-0"style={{ color: 'black' }}>{testimonial.location}</p>
               
                <div className="d-flex justify-content-center">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-primary"></i>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <Footer />
    </div>
  );
};

export default Testimonial;
