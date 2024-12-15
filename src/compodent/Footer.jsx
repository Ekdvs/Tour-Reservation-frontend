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

                    
                </div>
            </div>
        </div>
      
    </div>
  )
}
