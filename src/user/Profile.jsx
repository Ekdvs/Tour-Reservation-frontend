import React from 'react'
import Topbar from '../compodent/Topbar'
import Navbar from '../compodent/Navbar'
import Footer from '../compodent/Footer'

export default function Profile() {
  return (
    <div>
      <Topbar/>
      <Navbar/>
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
                        {/* Profile Picture */}
                        <div className="mb-3 row">
                            <label className="col-sm-4 col-form-label">Profile Picture:</label>
                            <div className="col-sm-6">
                                {!isEditing ? (
                                   
                                ) : (
                                    <input
                                        type="file"
                                        className="form-control"
                                        name="profilePicture"
                                        onChange={handleFileChange}
                                    />
                                )}
                            </div>
                        </div> 
                        <button className="btn btn-outline-primary mt-4" onClick={() => navigate('/PasswordChange')}>
                            Change Password
                        </button>
                    </div>
                </div>
            </div>
      <Footer/>
    </div>
  )
}
