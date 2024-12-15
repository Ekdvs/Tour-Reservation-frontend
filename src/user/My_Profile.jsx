import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const userEmail = localStorage.getItem("userEmail"); // Replace with dynamic email if needed
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
        // Fetch profile data from the backend
        axios.get(`http://localhost:8080/user/${userEmail}`)
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
        // Send updated data to backend
        axios.put(`http://localhost:8080/user/${userEmail}`, formData)
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
        <div className="container py-5">
            <h1 className="my-4 text-center">Profile</h1>

            {/* Basic Info */}
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

                    {["firstName", "lastName", "phoneNumber", "title", "gender", "country"].map((field) => (
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
                    <button className="btn btn-outline-primary mt-4" onClick={() => navigate('/PasswordChange')}>
                        Change Password
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
