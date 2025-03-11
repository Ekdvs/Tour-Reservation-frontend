import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Topbar from "../compodent/Topbar";
import Navbar from "../compodent/Navbar";
import Footer from "../compodent/Footer";
import { FaCheckCircle, FaTimesCircle, FaArrowLeft, FaCalendarAlt, FaMoneyBillWave, FaUser, FaClock } from "react-icons/fa";
export default function Profile() {
  const userEmail = localStorage.getItem("userEmail");
  const [profileData, setProfileData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    title: "",
    gender: "",
    country: "",
    profilePicture: null,
  });

  // Fetch profile data
  useEffect(() => {
    if (!userEmail) {
      toast.error("User is not logged in!");
      navigate("/login");
      return;
    }

    setLoading(true);
    axios
      .get(`https://online-travel-planning-production.up.railway.app/user/getUserByEmail/${userEmail}`)
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
          profilePicture: null,
        });
        
        // Set image preview if available
        if (data.imageData && data.contentType) {
          setImagePreview(`data:${data.contentType};base64,${data.imageData}`);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
        toast.error("Failed to load profile data!");
        setLoading(false);
      });
  }, [userEmail, navigate]);

  // Form validation
  const validateForm = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phoneNumber ||
      !formData.title ||
      !formData.gender ||
      !formData.country
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
      // Create a proper FormData object
      const formDataToSend = new FormData();
      
      // Create a user object without the profilePicture field
      const userObj = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber,
        title: formData.title,
        gender: formData.gender,
        country: formData.country,
      };
      
      // Append the user object as JSON string
      formDataToSend.append("user", JSON.stringify(userObj));

      // Append the image file if it exists
      if (formData.profilePicture) {
        formDataToSend.append("imageFile", formData.profilePicture);
      }

      setLoading(true);
      axios
        .put(`https://online-travel-planning-production.up.railway.app/user/${userEmail}`, formDataToSend, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          const updatedData = response.data;
          setProfileData(updatedData);
          
          // Update image preview if available
          if (updatedData.imageData && updatedData.contentType) {
            setImagePreview(`data:${updatedData.contentType};base64,${updatedData.imageData}`);
          }
          
          setIsEditing(false);
          toast.success("Profile updated successfully!");
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error saving profile:", error);
          toast.error("Failed to update profile. Please try again.");
          setLoading(false);
        });
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        profilePicture: file,
      });
      
      // Create a preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (loading && !profileData) return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="container-fluid bg-breadcrumb">
              <div
                className="container text-center py-5"
                style={{ maxWidth: "900px" }}
              >
                <h3 className="text-white display-3 mb-4">Profile</h3>
                
                <a href="/" className="text-white"><button className="btn btn-outline-light btn-lg" >
                  <FaArrowLeft className="me-2" /> Home
                </button></a>
                
              </div>
            </div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(19, 53, 123, .6), rgba(19, 53, 123, .6)), url(../img/R.jpeg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 0",
        }}
      >
        <div className="container py-5">
          <h1 className="my-4 text-center text-white">Profile</h1>
          <div className="card shadow-lg">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Basic Info</h2>
                {!isEditing ? (
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => setIsEditing(true)}
                    disabled={loading}
                  >
                    Edit
                  </button>
                ) : (
                  <div>
                    <button
                      className="btn btn-outline-success me-2"
                      onClick={handleSave}
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Saving...
                        </>
                      ) : (
                        "Save"
                      )}
                    </button>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => {
                        setIsEditing(false);
                        // Reset form data to current profile data
                        if (profileData) {
                          setFormData({
                            firstName: profileData.firstName || "",
                            lastName: profileData.lastName || "",
                            phoneNumber: profileData.phoneNumber || "",
                            title: profileData.title || "",
                            gender: profileData.gender || "",
                            country: profileData.country || "",
                            profilePicture: null,
                          });
                          
                          // Reset image preview
                          if (profileData.imageData && profileData.contentType) {
                            setImagePreview(`data:${profileData.contentType};base64,${profileData.imageData}`);
                          } else {
                            setImagePreview(null);
                          }
                        }
                      }}
                      disabled={loading}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              {/* Profile Picture */}
              <div className="mb-3 row">
                <label className="col-sm-4 col-form-label">
                  Profile Picture:
                </label>
                <div className="col-sm-6">
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Profile"
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                        marginBottom: isEditing ? "10px" : "0",
                      }}
                      className="img-thumbnail"
                    />
                  )}
                  {isEditing && (
                    <div className="mt-2">
                      <input
                        type="file"
                        className="form-control"
                        onChange={handleFileChange}
                        accept="image/*"
                      />
                      <small className="text-muted">Select a new profile picture (optional)</small>
                    </div>
                  )}
                </div>
              </div>

              {/* Info Fields */}
              {[
                { id: "firstName", label: "First Name" },
                { id: "lastName", label: "Last Name" },
                { id: "phoneNumber", label: "Phone Number" },
                { id: "title", label: "Title" }
              ].map((field) => (
                <div className="mb-3 row" key={field.id}>
                  <label className="col-sm-4 col-form-label">
                    {field.label}:
                  </label>
                  <div className="col-sm-6">
                    {!isEditing ? (
                      <p className="form-control-plaintext">
                        {profileData[field.id] || "Not Set"}
                      </p>
                    ) : (
                      <input
                        type="text"
                        className="form-control"
                        name={field.id}
                        value={formData[field.id]}
                        onChange={handleChange}
                        placeholder={`Enter your ${field.label.toLowerCase()}`}
                      />
                    )}
                  </div>
                </div>
              ))}

              {/* Gender */}
              <div className="mb-3 row">
                <label className="col-sm-4 col-form-label">Gender:</label>
                <div className="col-sm-6">
                  {!isEditing ? (
                    <p className="form-control-plaintext">
                      {profileData.gender || "Not Set"}
                    </p>
                  ) : (
                    <select
                      className="form-select"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select Gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  )}
                </div>
              </div>

              {/* Country */}
              <div className="mb-3 row">
                <label className="col-sm-4 col-form-label">Country:</label>
                <div className="col-sm-6">
                  {!isEditing ? (
                    <p className="form-control-plaintext">
                      {profileData.country || "Not Set"}
                    </p>
                  ) : (
                    <select
                      className="form-select"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select Country
                      </option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="India">India</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                      <option value="Canada">Canada</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                      <option value="Japan">Japan</option>
                      <option value="China">China</option>
                    </select>
                  )}
                </div>
              </div>

              {/* Email (read-only) */}
              <div className="mb-3 row">
                <label className="col-sm-4 col-form-label">Email:</label>
                <div className="col-sm-6">
                  <p className="form-control-plaintext">
                    {userEmail || "Not available"}
                  </p>
                </div>
              </div>

              <div className="text-center mt-4">
                <button
                  className="btn btn-primary px-4 py-2"
                  onClick={() => navigate("/PasswordChange")}
                  disabled={loading}
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}