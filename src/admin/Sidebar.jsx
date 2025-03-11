import React from "react";
import { Link } from "react-router-dom";
import Headeradmin from "../compodent/Headeradmin";


export default function Sidebar() {
  return (
    <div>
      <Headeradmin/>
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
                      <Link to="/dashboard1">
                        <span className="sub-item">Dashboard 1</span>
                      </Link>
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
              {[
                { path: "/place", label: "Add Place" },
                { path: "/EventManagement", label: "Add Event" },
                { path: "/addtravelguide", label: "Add Travel Guide" },
                { path: "/EvenPage", label: "Order" },
                { path: "/UserPage", label: "User" },
                { path: "/EventShowPage", label: "Event Show" },
                { path: "/addPackages", label: "Add Packages" },
                { path: "/addBlog", label: "Add Blog" },
              ].map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link className="nav-link" to={item.path}>
                    <i className="fas fa-bars"></i>
                    <p>{item.label}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}