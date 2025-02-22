import React from "react";
import { Link } from "react-router-dom";
import Headeradmin from "../compodent/Headeradmin";

export default function Sidebar() {
  return (
    <div>
      <Headeradmin />
      <div className="sidebar" data-background-color="dark">
        <div className="sidebar-logo"></div>
        <div className="sidebar-wrapper scrollbar scrollbar-inner">
          <div className="sidebar-content">
            <ul className="nav nav-secondary">
              <li className="nav-item active">
                <a
                  data-bs-toggle="collapse"
                  href="#dashboard"
                  className="collapsed"
                  aria-expanded="false"
                >
                  <i className="fas fa-home"></i>
                  <p>Dashboard</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="dashboard">
                  <ul className="nav nav-collapse">
                    <li>
                      <a href="../demo1/index.html">
                        <span className="sub-item">Dashboard 1</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-section">
                <span className="sidebar-mini-icon">
                  <i className="fa fa-ellipsis-h"></i>
                </span>
                <h4 className="text-section">Components</h4>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/place">
                  <i className="fas fa-bars"></i>
                  <p>Add Place</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/EventManagement">
                  <i className="fas fa-bars"></i>
                  <p>Add Event</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/addtravelguide">
                  <i className="fas fa-bars"></i>
                  <p>Add Travel Guide</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/EvenPage">
                  <i className="fas fa-bars"></i>
                  <p>Order</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/EvenPage">
                  <i className="fas fa-bars"></i>
                  <p>User</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/EventShowPage">
                  <i className="fas fa-bars"></i>
                  <p>Event Show</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/addPackages">
                  <i className="fas fa-bars"></i>
                  <p>Add Packages</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/addBlog">
                  <i className="fas fa-bars"></i>
                  <p>Add Blog</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
