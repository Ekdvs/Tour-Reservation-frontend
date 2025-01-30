import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Bloga = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogData, setBlogData] = useState({
    title: '',
    description: '',
    author: '',
    imageData: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentBlogId, setCurrentBlogId] = useState('');

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:8080/blog/getAllBlogs');
      setBlogs(response.data);
    } catch (error) {
      toast.error('Error fetching blogs');
    }
  };

  const handleInputChange = (e) => {
    setBlogData({
      ...blogData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setBlogData({ ...blogData, imageData: file });
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('blog', JSON.stringify(blogData));
    formData.append('imageFile', blogData.imageData);

    try {
      if (isEditing) {
        await axios.put(`http://localhost:8080/blog/updateBlog/${currentBlogId}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        toast.success('Blog updated successfully');
      } else {
        await axios.post('http://localhost:8080/blog/addBlog', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        toast.success('Blog added successfully');
      }
      setIsEditing(false);
      fetchBlogs();
      clearForm();
    } catch (error) {
      toast.error('Error saving blog');
    }
  };

  const handleEdit = (blog) => {
    setBlogData({
      title: blog.title,
      description: blog.description,
      author: blog.author,
      imageData: null,
    });
    setImagePreview(`http://localhost:8080/images/${blog.imagePath}`);
    setIsEditing(true);
    setCurrentBlogId(blog.blogId);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/blog/deleteBlog/${id}`);
      toast.success('Blog deleted successfully');
      fetchBlogs();
    } catch (error) {
      toast.error('Error deleting blog');
    }
  };

  const clearForm = () => {
    setBlogData({
      title: '',
      description: '',
      author: '',
      imageData: null,
    });
    setImagePreview(null);
  };

  return (
    <div className="container mt-5">
      <ToastContainer />
      <h2>{isEditing ? 'Edit Blog' : 'Add Blog'}</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={blogData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            name="description"
            value={blogData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            className="form-control"
            name="author"
            value={blogData.author}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleImageChange}
          />
          {imagePreview && <img src={imagePreview} alt="Preview" className="mt-2" style={{ width: '200px' }} />}
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            {isEditing ? 'Update Blog' : 'Add Blog'}
          </button>
          <button
            type="button"
            className="btn btn-secondary ml-2"
            onClick={() => {
              clearForm();
              setIsEditing(false);
            }}
          >
            Cancel
          </button>
        </div>
      </form>

      <h3 className="mt-5">All Blogs</h3>
      <div className="row">
        {blogs.map((blog) => (
          <div className="col-md-4" key={blog.blogId}>
            <div className="card mb-4">
              <img
                src={`http://localhost:8080/images/${blog.imagePath}`}
                alt="Blog"
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.description}</p>
                <button className="btn btn-warning" onClick={() => handleEdit(blog)}>
                  Edit
                </button>
                <button
                  className="btn btn-danger ml-2"
                  onClick={() => handleDelete(blog.blogId)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bloga;
