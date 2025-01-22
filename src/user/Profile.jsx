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
        profilePicture: "",
        contentType: "",
        imageData: "",
    });

    // Fetch profile data
    useEffect(() => {
        axios
            .get(`http://localhost:8080/user/getUserByEmail/${userEmail}`)
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
                    profilePicture: data.profileImagePath || "",
                    contentType: data.contentType || "",
                    imageData: data.imageData || "", // Corrected profile picture field
                });
            })
            .catch((error) => {
                console.error("Error fetching profile:", error);
                toast.error("Failed to load profile data!");
            });
    }, [userEmail]);

    // Form validation
    const validateForm = () => {
        if (!formData.firstName || !formData.lastName || !formData.phoneNumber || !formData.title || !formData.gender || !formData.country) {
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
            const formDataToSend = new FormData();
            formDataToSend.append('user', JSON.stringify(formData));

            if (formData.profilePicture) {
                formDataToSend.append('imageFile', formData.profilePicture);
            }

            axios
                .put(`http://localhost:8080/user/${userEmail}`, formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
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

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle file upload
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            profilePicture: file
        });
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
            <div
  style={{
    backgroundImage: "url('../img/R.jpeg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh", 
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
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

                        {/* Profile Picture */}
                        <div className="mb-3 row">
                            <label className="col-sm-4 col-form-label">Profile Picture:</label>
                            <div className="col-sm-6">
                                {!isEditing ? (
                                    <img
                                        src={`data:${profileData.contentType};base64,${profileData.imageData}`}
                                        alt="Profile"
                                        style={{ width: "150px", height: "150px", objectFit: "cover" }}
                                        className="img-thumbnail"
                                    />
                                ) : (
                                    <input
                                        type="file"
                                        className="form-control"
                                        onChange={handleFileChange}
                                    />
                                )}
                            </div>
                        </div>

                        {/* Info Fields */}
                        {['firstName', 'lastName', 'phoneNumber', 'title'].map((field) => (
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

                        {/* Gender and Country */}
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
                                        <option disabled value="">Select Gender</option>
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
                                        <option disabled value="">Select Country</option>
                                        <option value="Sri Lanka">Sri Lanka</option>
                                        <option value="India">India</option>
                                        <option value="United States">United States</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                    </select>
                                )}
                            </div>
                        </div>

                        <button
                            className="btn btn-outline-primary custom-size-button"
                            onClick={() => navigate('/PasswordChange')}
                        >
                            Change Password
                        </button>
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
