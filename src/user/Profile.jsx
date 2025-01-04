import React, { useEffect, useState } from 'react';
import Topbar from '../compodent/Topbar';
import Navbar from '../compodent/Navbar';
import Footer from '../compodent/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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

  useEffect(() => {
    axios
      .get(`http://localhost:8080/user/${userEmail}`)
      .then((response) => {
        setProfileData(response.data);
        setFormData({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          phoneNumber: response.data.phoneNumber,
          title: response.data.title,
          gender: response.data.gender,
          country: response.data.country,
        });
      })
      .catch((error) => console.error("Error fetching profile:", error));
  }, [userEmail]);

  const handleSave = () => {
    axios
      .put(`http://localhost:8080/user/${userEmail}`, formData)
      .then((response) => {
        setProfileData(response.data);
        setIsEditing(false);
      })
      .catch((error) => console.error("Error saving profile:", error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

        <div className="card shadow-lg">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2>Basic Info</h2>
              {!isEditing ? (
                <button className="btn btn-outline-primary" onClick={() => setIsEditing(true)}>
                  Edit
                </button>
              ) : (
                <button className="btn btn-outline-success" onClick={handleSave}>
                  Save
                </button>
              )}
            </div>
            {["firstName", "lastName", "phoneNumber", "title"].map((field) => (
              <div className="mb-3 row" key={field}>
                <label className="col-sm-4 col-form-label text-capitalize">{field}:</label>
                <div className="col-sm-6">
                  {!isEditing ? (
                    <p className="form-control-plaintext">{profileData[field] || "Not Set"}</p>
                  ) : (
                    <input
                      type="text"
                      className="form-control"
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                    />
                  )}
                </div>
              </div>
            ))}
            <div className="mb-3 row">
              <label className="col-sm-4 col-form-label">Gender:</label>
              <div className="col-sm-6">
                {!isEditing ? (
                  <p className="form-control-plaintext">{profileData.gender || "Not Set"}</p>
                ) : (
                  <select
                    className="form-control"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                )}
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-4 col-form-label">Country:</label>
              <div className="col-sm-6">
                {!isEditing ? (
                  <p className="form-control-plaintext">{profileData.country || "Not Set"}</p>
                ) : (
                  <select
                    className="form-control"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  >
                    <option value="">Select Country</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="India">India</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                  </select>
                )}
              </div>
            </div>
            <button className="btn btn-outline-primary mt-4" onClick={() => navigate('/PasswordChange')}>
              Change Password
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
