import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar";
import Nav from "./Nav";

const BlogManagement = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogForm, setBlogForm] = useState({ title: "", description: "", author: "" });
  const [blogImage, setBlogImage] = useState(null);
  const [editBlog, setEditBlog] = useState(null);
  const [expandedBlogs, setExpandedBlogs] = useState({});

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:8080/blog/getAllBlogs");
      setBlogs(response.data);
    } catch (error) {
      toast.error("Error fetching blogs!");
    }
  };

  const handleAddBlog = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("blog", JSON.stringify(blogForm));
    formData.append("imageFile", blogImage);

    try {
      await axios.post("http://localhost:8080/blog/addBlog", formData);
      fetchBlogs();
      toast.success("Blog added successfully!");
      setBlogForm({ title: "", description: "", author: "" });
    } catch (error) {
      toast.error("Error adding blog!");
    }
  };

  const handleUpdateBlog = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("blog", JSON.stringify(blogForm));
    if (blogImage) formData.append("imageFile", blogImage);

    try {
      await axios.put(`http://localhost:8080/blog/updateBlog/${editBlog.blogId}`, formData);
      fetchBlogs();
      toast.success("Blog updated successfully!");
      setEditBlog(null);
      setBlogForm({ title: "", description: "", author: "" });
    } catch (error) {
      toast.error("Error updating blog!");
    }
  };

  const handleDeleteBlog = async (blogId) => {
    try {
      await axios.delete(`http://localhost:8080/blog/deleteBlog/${blogId}`);
      fetchBlogs();
      toast.success("Blog deleted successfully!");
    } catch (error) {
      toast.error("Error deleting blog!");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogForm({ ...blogForm, [name]: value });
  };

  const handleEditBlog = (blog) => {
    setEditBlog(blog);
    setBlogForm({
      title: blog.title,
      description: blog.description,
      author: blog.author,
    });
  };

  const toggleReadMore = (blogId) => {
    setExpandedBlogs((prev) => ({ ...prev, [blogId]: !prev[blogId] }));
  };

  return (
    <div>
      <Sidebar />
      <Nav />
      <div className="container mt-4">
        <h1 className="text-center mb-4">Blog Management</h1>
        <ToastContainer />

        <form onSubmit={editBlog ? handleUpdateBlog : handleAddBlog} className="border p-4 rounded mb-4">
          <h2>{editBlog ? "Edit Blog" : "Add Blog"}</h2>
          <div className="form-group mb-3">
            <input type="text" className="form-control" name="title" placeholder="Title" value={blogForm.title} onChange={handleInputChange} required />
          </div>
          <div className="form-group mb-3">
            <textarea className="form-control" name="description" placeholder="Description" value={blogForm.description} onChange={handleInputChange} required></textarea>
          </div>
          <div className="form-group mb-3">
            <input type="text" className="form-control" name="author" placeholder="Author" value={blogForm.author} onChange={handleInputChange} required />
          </div>
          <div className="form-group mb-3">
            <input type="file" className="form-control" onChange={(e) => setBlogImage(e.target.files[0])} />
          </div>
          <button type="submit" className="btn btn-success w-100">{editBlog ? "Update Blog" : "Add Blog"}</button>
        </form>

        <h2 className="mt-4">Blog List</h2>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Author</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.blogId}>
                <td>{blog.title}</td>
                <td>
                  {expandedBlogs[blog.blogId] ? blog.description : `${blog.description.substring(0, 100)}...`}
                  {blog.description.length > 100 && (
                    <button className="btn btn-link p-0" onClick={() => toggleReadMore(blog.blogId)}>
                      {expandedBlogs[blog.blogId] ? "Read Less" : "Read More"}
                    </button>
                  )}
                </td>
                <td>{blog.author}</td>
                <td>
                  {blog.imagePath && <img src={`http://localhost:8080/${blog.imagePath}`} alt={blog.title} style={{ width: "50px", height: "50px" }} />}
                </td>
                <td>
                  <button className="btn btn-warning me-2 w-100" onClick={() => handleEditBlog(blog)}>Edit</button>
                  <button className="btn btn-danger w-100" onClick={() => handleDeleteBlog(blog.blogId)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogManagement;
