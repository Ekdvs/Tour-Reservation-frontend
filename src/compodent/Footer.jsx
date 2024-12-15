import React from 'react'

export default function Footer() {
  return (
    <div>
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
      
    </div>
  )
}
