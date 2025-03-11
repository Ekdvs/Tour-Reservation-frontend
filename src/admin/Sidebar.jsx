import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Sidebar.css'; // Your custom styles
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // Control the sidebar state

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the sidebar open/close
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button onClick={toggleSidebar} className="sidebar-toggle-btn btn btn-dark">
        {isOpen ? 'Collapse' : 'Expand'}
      </button>
      <nav>
        <ul className="list-unstyled">
          
          <li className="nav-item">
                    <Link className="nav-link" to="/place">
                      <i className="fas fa-map-marker-alt"></i>
                      <p>Add Place</p>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/EventManagement">
                      <i className="fas fa-calendar-alt"></i>
                      <p>Add Event</p>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/addtravelguide">
                      <i className="fas fa-book"></i>
                      <p>Add Travel Guide</p>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/addPackages">
                      <i className="fas fa-gift"></i>
                      <p>Add Packages</p>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/addBlog">
                      <i className="fas fa-blog"></i>
                      <p>Add Blog</p>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      <i className="fas fa-eye"></i>
                      <p>Home Page</p>
                    </Link>
                  </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
