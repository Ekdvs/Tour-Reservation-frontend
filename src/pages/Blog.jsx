import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "../compodent/Topbar"; // Correct component path
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const API_BASE_URL = "http://localhost:8080/blog"; // Change to your blog API endpoint

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
  const searchBlogs = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/searchBlog`, {
        params: { title: searchTerm },
      });
      setBlogs(response.data);
    } catch (error) {
      console.error("Error searching blogs:", error);
    }
  };

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
        <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
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

      {/* Carousel Section for Featured Blogs */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Featured Blogs</h2>
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
                <div className="d-block w-100" style={{ height: "600px", backgroundColor: "#f0f0f0" }}>
                  <p className="text-center text-muted">Image Not Available</p>
                </div>
              )}
              <Carousel.Caption>
                <h3 className="bg-dark text-white p-2 rounded">{blog.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Content Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Explore Blogs</h2>

        {/* Search Bar */}
        <div className="container mt-4">
          <div className="row justify-content-center mb-4">
            <div className="col-md-8">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search blogs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn btn-primary" onClick={searchBlogs}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* List of Blogs */}
        <div className="blog-grid mb-5">
          {blogs.map((blog) => (
            <div key={blog.blogId} className="blog-card">
              {blog.imageData ? (
                <img
                  src={`data:${blog.contentType};base64,${blog.imageData}`}
                  alt={blog.title}
                  className="blog-img"
                />
              ) : (
                <div className="blog-img" style={{ height: "200px", backgroundColor: "#f0f0f0" }}>
                  <p className="text-center text-muted">Image Not Available</p>
                </div>
              )}
              <div className="blog-info" style={{ textAlign: "center" }}>
                <h5>{blog.title}</h5>
              </div>
              <div className="blog-info">
                <p>
                  <strong>Author:</strong> {blog.author} <br />
                  <strong>Category:</strong> {blog.category}
                </p>
                <p>
                  {blog.content && blog.content.length > 100
                    ? `${blog.content.substring(0, 100)}...`
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
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;
