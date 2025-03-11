import React from 'react';
import Sidebar from './Sidebar';
import Nav from './Nav';
import OnlineUsersCard from './OnlineUserCard';
import NewCustomers from './NewCustomer';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function Dashboard() {
  return (
    <div>
      <Sidebar />
      <Nav />
      <div className="container">
        <div className="page-inner">
          <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4">
            <div>
              <h3 className="fw-bold mb-3">Ceylon Dashboard</h3>
            </div>
            <div className="ms-md-auto py-2 py-md-0">
              <a href="manage" className="btn btn-label-info btn-round me-2">
                Manage
              </a>
              <a href="addtravelguide" className="btn btn-primary btn-round">
                Add Travel Guide
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <div className="card card-stats card-round">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-icon">
                      <div className="icon-big text-center icon-primary bubble-shadow-small">
                        <i className="fas fa-users"></i>
                      </div>
                    </div>
                    <div className="col col-stats ms-3 ms-sm-0">
                      <div className="numbers">
                        <p className="card-category">Visitors</p>
                        <h4 className="card-title">1,294</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Add more cards */}
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="card card-round">
                <div className="card-header">
                  <div className="card-head-row">
                    <div className="card-title">User Statistics</div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="chart-container" style={{ minHeight: '375px' }}>
                    <canvas id="statisticsChart"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <OnlineUsersCard />
              <NewCustomers />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
