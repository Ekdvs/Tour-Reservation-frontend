import React, { useEffect, useState } from 'react';
import axios from 'axios';



const NewCustomers = () => {
    const [newCustomers, setNewCustomers] = useState([]);
  
    useEffect(() => {
      // Fetch new customers from the backend
      fetch('http://localhost:8080/user/allUsers')
        .then(response => response.json())
        .then(data => setNewCustomers(data))
        .catch(error => console.error('Error fetching new customers:', error));
    }, []);
  
    return (
        <div className="card card-round">
          <div className="card-body">
            <div className="card-head-row card-tools-still-right">
              <div className="card-title">New Customers</div>
              <div className="card-tools">
                <div className="dropdown">
                  <button
                    className="btn btn-icon btn-clean me-0"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
          </div>
        </div>
        <div className="card-list py-4">
          {newCustomers.map((customer, index) => (
            <div className="item-list" key={index}>
              <div className="avatar">
              <img
                  src={customer.avatarUrl || 'default-avatar.jpg'} // Use a default avatar if not available
                  alt="..."
                  className="avatar-img rounded-circle"
                />
</div>
              <div className="info-user ms-3">
                <div className="username">{customer.firstName} {customer.lastName}</div>
                <div className="status">{customer.role}</div>
              </div>
              <button className="btn btn-icon btn-link op-8 me-1">
                <i className="far fa-envelope"></i>
              </button>
              <button className="btn btn-icon btn-link btn-danger op-8">
                <i className="fas fa-ban"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewCustomers;





