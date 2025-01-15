import React from "react";
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";
import { Container, Row, Col, Card, Button, Breadcrumb } from "react-bootstrap";
import "./Blog.css"; // Assuming you have a CSS file for custom styles

export default function Blog() {
  const blogPosts = [
    {
      title: "Discover the Hidden Gems of Sri Lanka",
      date: "28 Dec 2024",
      author: "Royal Hamblin",
      excerpt:
        "Uncover the beauty of lesser-known destinations in Sri Lanka and embark on unique adventures.",
      img: "img/blog-1.jpg",
    },
    {
      title: "A Culinary Journey Through Sri Lanka",
      date: "15 Jan 2025",
      author: "Lara Smith",
      excerpt:
        "Dive into the rich flavors and diverse cuisine that Sri Lanka has to offer.",
      img: "img/blog-2.jpg",
    },
    {
      title: "Exploring the Ancient Ruins",
      date: "05 Jan 2025",
      author: "John Doe",
      excerpt:
        "Step back in time and explore the ancient ruins that tell the story of Sri Lanka's rich history.",
      img: "img/blog-3.jpg",
    },
  ];

  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="container-fluid bg-breadcrumb">
        <div
          className="container text-center py-5"
          style={{ maxWidth: "900px" }}
        >
          <h3 className="text-white display-3 mb-4">Our Blog</h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/Blog">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">Blog</li>
          </ol>
        </div>
      </div>

      <Container className="py-5">
        <h2 className="text-center mb-4">Latest Posts</h2>
        <Row>
          {blogPosts.map((post, index) => (
            <Col md={4} key={index} className="mb-4">
              <div className={`blog-post blog-post-${index + 1}`}>
                <Card>
                  <Card.Img variant="top" src={post.img} />
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.excerpt}</Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Posted on {post.date} by {post.author}
                    </small>
                  </Card.Footer>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
