import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Headeradmin from '../compodent/Headeradmin';

export default function Nav() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const userEmail = localStorage.getItem('userEmail');
      if (userEmail) {
        try {
          const response = await axios.get(`http://localhost:8080/user/${userEmail}`);
          setUserData(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error.message);
          setUserData(null);
        }
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <Headeradmin/>
      <nav className="navbar navbar-header navbar-header-transparent navbar-expand-lg border-bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-header-left navbar-expand-lg navbar-form nav-search p-0 d-none d-lg-flex">
            <div className="input-group">
              <div className="input-group-prepend">
                <button type="submit" className="btn btn-search pe-1">
                  <i className="fa fa-search search-icon"></i>
                </button>
              </div>
              <input type="text" placeholder="Search ..." className="form-control" />
            </div>
          </nav>

          <ul className="navbar-nav topbar-nav ms-md-auto align-items-center">
            {/* Other nav items */}
            <li className="nav-item topbar-user dropdown hidden-caret">
              <a
                className="dropdown-toggle profile-pic"
                data-bs-toggle="dropdown"
                href="#"
                aria-expanded="false"
              >
                <div className="avatar-sm">
                  <img
                    src={userData?.imageData ? `data:${userData.contentType};base64,${userData.imageData}` : '../img/profile.jpeg'}
                    alt="..."
                    className="avatar-img rounded-circle"
                  />
                </div>
                <span className="profile-username">
                  <span className="op-7">Hi,</span>
                  <strong>{userData?.firstName || 'Guest'}</strong>
                </span>
              </a>
              <ul className="dropdown-menu dropdown-user animated fadeIn">
                <div className="dropdown-user-scroll scrollbar-outer">
                  <li>
                    <div className="user-box">
                      <div className="avatar-lg">
                        <img
                          src={userData?.imageData ? `data:${userData.contentType};base64,${userData.imageData}` : '../img/profile.jpeg'}
                          alt="Profile"
                          className="avatar-img rounded"
                        />
                      </div>
                      <div className="u-text">
                        <h4>{userData?.firstName || 'User Name'}</h4>
                        <p>{userData?.userEmail || 'user@example.com'}</p>
                        <a href="/profile" className="btn btn-xs btn-secondary btn-sm">
                          View Profile
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/profile">
                      My Profile
                    </a>
                    <a className="dropdown-item" href="#">
                      My Balance
                    </a>
                    <a className="dropdown-item" href="#">
                      Inbox
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/Dashboard">
                      Account Settings
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/logout">
                      Logout
                    </a>
                  </li>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
