import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
    const userEmail = localStorage.getItem("userEmail") // Replace with dynamic email if needed
    const [profileData, setProfileData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

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
        <div className="container">
            <h1 className="my-4">Profile</h1>

            {/* Basic Info */}
            <div className="card">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h2>Basic Info</h2>
                        {!isEditing ? (
                            <button className="btn btn-link" onClick={() => setIsEditing(true)}>
                                Edit
                            </button>
                        ) : (
                            <button className="btn btn-link" onClick={handleSave}>
                                Save
                            </button>
                        )}
                    </div>

                    {["firstName", "lastName", "phoneNumber", "title", "gender", "country"].map((field) => (
                        <div className="mb-3 row" key={field}>
                            <label className="col-sm-4 text-capitalize">{field}:</label>
                            <div className="col-sm-6">
                                {!isEditing ? (
                                    profileData[field] || "Not Set"
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
                </div>
            </div>
        </div>
    );
};

export default Profile;
