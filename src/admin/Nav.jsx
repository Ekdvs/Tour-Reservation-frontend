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
                        <div className="notif-content">
                        <span className="subject">Jimmy Denis</span>
                        <span className="block">How are you ?</span>
                        <span className="time">5 minutes ago</span>
                        </div>
                      </a>
                      <a href="#">
                        <div className="notif-img">
                          <img src="assets/img/chadengle.jpg" alt="Img Profile" />
                        </div>
                        <div className="notif-content">
                          <span className="subject">Chad</span>
                          <span className="block">Ok, Thanks!</span>
                          <span className="time">12 minutes ago</span>
                        </div>
                      </a>
                      <a href="#">
                      <div className="notif-img">
                      <img src="assets/img/mlane.jpg" alt="Img Profile" />
                        </div>
                        <div className="notif-content">
                        <span className="subject">Jhon Doe</span>
                        <span className="block">Ready for the meeting today...</span>
                        <span className="time">12 minutes ago</span>
                        </div>
                      </a>
                      <a href="#">
                        <div className="notif-img">
                        <img src="assets/img/talha.jpg" alt="Img Profile" />
                        </div>
                        <div className="notif-content">
                        <span className="subject">Talha</span>
                        <span className="block">Hi, Apa Kabar?</span>
                        <span className="time">17 minutes ago</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                <a className="see-all" href="javascript:void(0);">
                    See all messages<i className="fa fa-angle-right"></i>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item topbar-icon dropdown hidden-caret">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="notifDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-bell"></i>
                <span className="notification">4</span>
                </a>
              <ul className="dropdown-menu notif-box animated fadeIn" aria-labelledby="notifDropdown">
              <li>
              <div className="dropdown-title">
                    You have 4 new notifications
                  </div>
                  </li>
                <li>
                <div className="notif-scroll scrollbar-outer">
                <div className="notif-center">
                      <a href="#">
                        <div className="notif-icon notif-primary">
                          <i className="fa fa-user-plus"></i>
                        </div>
                        <div className="notif-content">
                          <span className="block">New user registered</span>
                          <span className="time">5 minutes ago</span>
                        </div>
                      </a>
                      <a href="#">
                      <div className="notif-icon notif-success">
                          <i className="fa fa-comment"></i>
                        </div>
                        <div className="notif-content">
                          <span className="block">Rahmad commented on Admin</span>
                          <span className="time">12 minutes ago</span>
                        </div>
                        </a>
                      <a href="#">
                        <div className="notif-img">
                        <img src="assets/img/profile2.jpg" alt="Img Profile" />
                        </div>
                        <div className="notif-content">
                        <span className="block">Reza sent messages to you</span>
                        <span className="time">12 minutes ago</span>



      
    </div>
  )
}
