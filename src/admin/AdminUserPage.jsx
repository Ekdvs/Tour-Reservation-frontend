import React, { useState, useEffect } from "react";
import { Button, Form, Modal, Spinner, Table } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar";
import Nav from "./Nav";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "https://online-travel-planning-production.up.railway.app";

// Modal for viewing user history
const UserHistoryModal = ({ show, user, onClose }) => (
  <Modal show={show} onHide={onClose} size="lg">
    <Modal.Header closeButton>
      <Modal.Title>User History</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {user ? (
        <div>
          <p>
            <strong>Name:</strong> {user.firstName} {user.lastName}
          </p>
          <p>
            <strong>Email:</strong> {user.userEmail}
          </p>
          <p>
            <strong>Role:</strong> {user.userRole}
          </p>
          <p>
            <strong>Date Registered:</strong> {user.dateRegistered}
          </p>
          <p>
            <strong>Last Login:</strong> {user.lastLogin}
          </p>
        </div>
      ) : (
        <p>No user selected</p>
      )}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);

const AdminUserPage = () => {
  const [users, setUsers] = useState([]);
  const [searchEmail, setSearchEmail] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch users from the backend
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/user/allUsers`);
      setUsers(response.data);
    } catch (error) {
      toast.error("Error fetching users");
    } finally {
      setLoading(false);
    }
  };

  // Search user by email
  const searchUserByEmail = async () => {
    if (!searchEmail.trim()) {
      toast.warning("Please enter an email address");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.get(
        `${API_BASE_URL}/user/getUserByEmail/${searchEmail}`
      );
      setSearchResult(response.data || null);
      if (!response.data) {
        toast.error("User not found");
      }
    } catch (error) {
      toast.error("Error during search");
      setSearchResult(null);
    } finally {
      setLoading(false);
    }
  };

  // Delete user
  const deleteUser = async (userId) => {
    try {
      await axios.delete(`${API_BASE_URL}/user/delete/${userId}`);
      toast.success("User deleted successfully");
      fetchUsers();
    } catch (error) {
      toast.error("Error deleting user");
    }
  };

  // Promote user to Travel Guide
  const promoteToGuide = async (userId) => {
    try {
      await axios.put(`${API_BASE_URL}/user/travelgudie/${userId}`, {
        userRole: "travelGuide",
      });
      toast.success("User promoted to Travel Guide");
      fetchUsers();
    } catch (error) {
      toast.error("Error promoting user");
    }
  };

  const handleViewHistory = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <Sidebar />
      <Nav />
      <div className="container mt-4">
        <ToastContainer />
        <h2 className="text-center">Admin User Management</h2>
        <br />
        <div className="mb-4 search-container">
          <Form.Group className="d-flex w-50">
            <Form.Control
              type="email"
              placeholder="Search user by email"
              value={searchEmail}
              onChange={(e) => setSearchEmail(e.target.value)}
            />
            <Button variant="primary" onClick={searchUserByEmail}>
              Search
            </Button>
          </Form.Group>
          {searchResult === null && searchEmail && (
            <div className="mt-3">
              <h5>No user found with that email address</h5>
            </div>
          )}
          {searchResult && (
            <div className="mt-3">
              <h5>Search Result:</h5>
              <p>
                {searchResult.firstName} {searchResult.lastName} -{" "}
                {searchResult.userEmail}
              </p>
            </div>
          )}
        </div>

        {/* Show loading spinner if users are being fetched */}
        {loading ? (
          <Spinner animation="border" className="d-block mx-auto" />
        ) : (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Date Registered</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {(searchResult ? [searchResult] : users).map((user, index) => (
                <tr key={user.userId}>
                  <td>{index + 1}</td>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  <td>{user.userEmail}</td>
                  <td>{user.userRole}</td>
                  <td>{user.dateRegistered}</td>
                  <td className="d-flex justify-content-center">
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => deleteUser(user.userId)}
                    >
                      Delete
                    </Button>{" "}
                    {user.userRole !== "travelGuide" && (
                      <Button
                        variant="warning"
                        size="sm"
                        onClick={() => promoteToGuide(user.userId)}
                      >
                        Promote to Guide
                      </Button>
                    )}{" "}
                    <Button
                      variant="info"
                      size="sm"
                      onClick={() => handleViewHistory(user)}
                    >
                      View History
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}

        <UserHistoryModal
          show={showModal}
          user={selectedUser}
          onClose={() => setShowModal(false)}
        />
      </div>
    </div>
  );
};

export default AdminUserPage;
