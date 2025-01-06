import React from 'react'

export default function Sidebar() {
  return (
    <div>
      <Header/>
    <div className="sidebar" data-background-color="dark">
      <div className="sidebar-logo">
       
      </div>
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
            <Link className="nav-link" to="/EvenPage">
                <i className="fas fa-bars"></i>
                <p>Add Event</p>
            </Link>
            </li>

            <li className="nav-item">
            <Link className="nav-link" to="/EvenPage">
                <i className="fas fa-bars"></i>
                <p>Add Travel Guide</p>
            </Link>
            </li>





    </div>
  )
}
