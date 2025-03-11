import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "../compodent/Topbar"; // Correct component path
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  const API_BASE_URL = "https://online-travel-planning-production.up.railway.app/blog";

  // Fetch all blogs
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/getAllBlogs`);
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  // Search blogs by title

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Save blog data to localStorage
  const saveToLocalStorage = (blog) => {
    localStorage.setItem("selectedBlog", JSON.stringify(blog));
  };

  return (
    <div>
      <Topbar />
      <Navbar />
      {/* Header Section */}
      <div className="container-fluid bg-breadcrumb">
        <div
          className="container text-center py-5"
          style={{ maxWidth: "900px" }}
        >
          <h3 className="text-white display-3 mb-4">Blogs</h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/Blogs">Pages</a>
            </li>
            <li className="breadcrumb-item active text-white">Blogs</li>
          </ol>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(19, 53, 123, .6), rgba(19, 53, 123, .6)), url(../img/subscribe-img.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Carousel Section for Featured Blogs */}
        <div className="container ">
          <h2 className="text-center mb-4 ">
            <br></br>Featured Blogs
          </h2>
          <Carousel>
            {blogs.slice(0, 10).map((blog) => (
              <Carousel.Item key={blog.blogId}>
                {blog.imageData ? (
                  <img
                    src={`data:${blog.contentType};base64,${blog.imageData}`}
                    alt={blog.title}
                    className="d-block w-100"
                    style={{
                      height: "600px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                ) : (
                  <div
                    className="d-block w-100"
                    style={{ height: "600px", backgroundColor: "#f0f0f0" }}
                  >
                    <p className="text-center text-muted">
                      Image Not Available
                    </p>
                  </div>
                )}
                <Carousel.Caption>
                  <h3 className="bg-dark text-white p-2 rounded">
                    {blog.title}
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Content Section */}
        <div className="container mt-5">
          <h2 className="text-center mb-4">Explore Blogs</h2>
          <div className="container ">
            <div className="row">
              {blogs.map((blog) => (
                <div key={blog.blogId} className="col-md-4 mb-4">
                  <div className="card h-100">
                    {blog.imageData ? (
                      <img
                        src={`data:${blog.contentType};base64,${blog.imageData}`}
                        alt={blog.title}
                        className="card-img-top"
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                    ) : (
                      <div
                        className="card-img-top d-flex align-items-center justify-content-center"
                        style={{ height: "200px", backgroundColor: "#f0f0f0" }}
                      >
                        <p className="text-muted">Image Not Available</p>
                      </div>
                    )}
                    <div className="card-body text-center">
                      <h5 className="card-title">{blog.title}</h5>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        <strong>Author:</strong> {blog.author} <br />
                      </p>
                      <p className="card-text">
                        {blog.description && blog.description.length > 100
                          ? `${blog.description.substring(0, 100)}...`
                          : blog.content || "No content available"}
                      </p>
                      <Link
                        to="/blog-detail"
                        className="text-primary text-decoration-underline"
                        onClick={() => saveToLocalStorage(blog)}
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;
