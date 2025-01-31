import React, { useEffect, useState } from "react";
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";
import {  useNavigate } from "react-router-dom";

const BlogDetail = () => {
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedBlog = localStorage.getItem("selectedBlog");
    if (storedBlog) {
      setBlog(JSON.parse(storedBlog));
    }
  }, []);

  if (!blog) {
    return (
      <div className="container text-center mt-5">
        <p className="text-muted">No blog details available. Please try again.</p>
      </div>
    );
  }

  const handleBackToBlogs = () => {
    setTimeout(() => {
      navigate("/Blog");
      localStorage.removeItem("selectedBlog");
    }, 2000);
  };

  return (
    <div>
      <Topbar />
      <div className="navbar-container">
        <Navbar />
      </div>
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
            <li className="breadcrumb-item"><a href="">Blogs</a></li>
            <li className="breadcrumb-item active text-white">{blog.title}</li>
          </ol>
        </div>
      </div>

      <div className="container mt-5 mb-5">
        <div className="card shadow-lg border-0">
          <div className="card-header bg-primary text-white text-center py-4">
            <h2 className="mb-0">{blog.title || "Blog Title"}</h2>
          </div>
          <div className="card-body">
            <div className="row">
              {/* Image Section */}
              <div className="col-md-6 mb-4">
                {blog.imageData ? (
                  <img
                    src={`data:${blog.contentType};base64,${blog.imageData}`}
                    alt={blog.title || "Blog Image"}
                    className="d-block w-100 rounded shadow"
                    style={{
                      height: "400px",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <div
                    className="d-flex align-items-center justify-content-center bg-light rounded shadow"
                    style={{
                      height: "400px",
                      fontSize: "1.5rem",
                      color: "#ccc",
                    }}
                  >
                    No Image Available
                  </div>
                )}
              </div>

              {/* Details Section */}
              <div className="col-md-6 mb-4">
                <h4 className="text-primary">Details</h4>
                <ul className="list-group list-group-flush mb-4">
                  <li className="list-group-item">
                    <strong>Author:</strong> {blog.author || "N/A"}
                  </li>
                  
                </ul>
              </div>
            </div>

            {/* Description Section */}
            <div className="mt-4">
              <h4 className="text-primary">Description</h4>
              <p className="text-muted">{blog.description || "Content not provided."}</p>
            </div>
            <button
              className="btn btn-primary btn-lg w-100"
              onClick={handleBackToBlogs}
              disabled={!blog.blogId}
            >
              Back to Blogs
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetail;
