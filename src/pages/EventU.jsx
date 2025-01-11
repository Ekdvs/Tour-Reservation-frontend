import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Topbar from '../compodent/Topbar';
import Navbar from '../compodent/Navbar';
import Footer from '../compodent/Footer';

export default function Profile() {
  const userEmail = localStorage.getItem("userEmail");
  const [profileData, setProfileData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    title: "",
    gender: "",
    country: "",
  });
  const [profilePicture, setProfilePicture] = useState(null);

  // Fetch profile data on component load
  useEffect(() => {
    if (!userEmail) {
      toast.error("User email not found. Please log in.");
      navigate('/login');
      return;
    }

    axios
      .get(`http://localhost:8080/user/${userEmail}`)
      .then((response) => {
        const data = response.data;
        setProfileData(data);
        setFormData({
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          phoneNumber: data.phoneNumber || "",
          title: data.title || "",
          gender: data.gender || "",
          country: data.country || "",
        });
        setProfilePicture(data.profilePicture || null);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
        toast.error("Failed to load profile data!");
      });
  }, [userEmail, navigate]);

  // Form validation
  const validateForm = () => {
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.phoneNumber.trim() ||
      !formData.title.trim() ||
      !formData.gender.trim() ||
      !formData.country.trim()
    ) {
      toast.error("All fields are required!");
      return false;
    }
    if (!/^[a-zA-Z]+$/.test(formData.firstName)) {
      toast.error("First name should only contain letters!");
      return false;
    }
    if (!/^[a-zA-Z]+$/.test(formData.lastName)) {
      toast.error("Last name should only contain letters!");
      return false;
    }
    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      toast.error("Phone number should be 10 digits!");
      return false;
    }
    return true;
  };

  // Save profile data
  const handleSave = () => {
    if (validateForm()) {
      const updatedData = new FormData();
      updatedData.append("user", JSON.stringify(formData));
      if (profilePicture instanceof File) {
        updatedData.append("imageFile", profilePicture);
      }

      axios
        .put(`http://localhost:8080/user/${userEmail}`, updatedData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          setProfileData(response.data);
          setIsEditing(false);
          toast.success("Profile updated successfully!");
        })
        .catch((error) => {
          console.error("Error saving profile:", error);
          toast.error("Failed to update profile. Please try again.");
        });
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  if (!profileData) return <div>Loading...</div>;

  return (
    <div>
      <Topbar />
      <Navbar />

      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
          <h3 className="text-white display-3 mb-4">My Profile</h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><a href="/Contact">Pages</a></li>
            <li className="breadcrumb-item active text-white">My Profile</li>
          </ol>
        </div>
      </div>

      <div className="container py-5">
        <h1 className="my-4 text-center">Profile</h1>

        <div className="card mb-4">
          <div className="card-body text-center">
            <img
              src={profilePicture instanceof File ? URL.createObjectURL(profilePicture) : profilePicture || "default-image-url"}
              alt="Profile"
              className="rounded-circle img-thumbnail"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            {isEditing && (
              <input
                type="file"
                className="form-control mt-3"
                accept="image/*"
                onChange={handleFileChange}
              />
            )}
          </div>
        </div>

        <div className="card p-4">
          <div className="row">
            {Object.keys(formData).map((key) => (
              <div className="col-md-6 mb-3" key={key}>
                <label className="form-label">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                {isEditing ? (
                  <input
                    type="text"
                    className="form-control"
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                  />
                ) : (
                  <p className="form-control">{formData[key]}</p>
                )}
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-end">
            {isEditing ? (
              <>
                <button className="btn btn-primary me-2" onClick={handleSave}>Save</button>
                <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
              </>
            ) : (
              <button className="btn btn-primary" onClick={() => setIsEditing(true)}>Edit</button>
            )}
          </div>
        </div>
      </div>

      <Footer />
      <ToastContainer />
    </div>
  );
}
