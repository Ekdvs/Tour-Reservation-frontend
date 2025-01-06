import React from 'react'

export default function Nav() {
  return (
    <div>
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
          <li className="nav-item topbar-icon dropdown hidden-caret d-flex d-lg-none">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <i className="fa fa-search"></i>
              </a>
              <ul className="dropdown-menu dropdown-search animated fadeIn">
                <form className="navbar-left navbar-form nav-search">
                  <div className="input-group">
                    <input type="text" placeholder="Search ..." className="form-control" />
                  </div>
                </form>
              </ul>
            </li>
            <li className="nav-item topbar-icon dropdown hidden-caret">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="messageDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-envelope"></i>
              </a>
              <ul className="dropdown-menu messages-notif-box animated fadeIn" aria-labelledby="messageDropdown">
              <li>
              <div className="dropdown-title d-flex justify-content-between align-items-center">
                    Messages
                    <a href="#" className="small">Mark all as read</a>
                  </div>
                  </li>
                <li>
                <div className="message-notif-scroll scrollbar-outer">
                <div className="notif-center">
                      <a href="#">
                        <div className="notif-img">
                          <img src="assets/img/jm_denis.jpg" alt="Img Profile" />
                        </div>






      
    </div>
  )
}
