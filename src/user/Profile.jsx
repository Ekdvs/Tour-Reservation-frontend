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
                                
                            ) : (
                                
                            )}
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
