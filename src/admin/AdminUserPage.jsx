import React from 'react'

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:8080";

// Modal for viewing user history
const UserHistoryModal = ({ show, user, onClose }) => (
<Modal show={show} onHide={onClose} size="lg">
<Modal.Header closeButton>
      <Modal.Title>User History</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    {user ? (
        <div>
            <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
            <p><strong>Email:</strong> {user.userEmail}</p>
            <p><strong>Role:</strong> {user.userRole}</p>
            <p><strong>Date Registered:</strong> {user.dateRegistered}</p>
            <p><strong>Last Login:</strong> {user.lastLogin}</p>
        </div>
      ) : (
        <p>No user selected</p>
      )}
</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onClose}>Close</Button>
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
    } 
    catch (error) {
        toast.error("Error fetching users");
    } 
    finally {
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
        const response = await axios.get(`${API_BASE_URL}/user/getUserByEmail/${searchEmail}`);
        if (response.data) {
            setSearchResult(response.data); // Set search result
          } else {
            setSearchResult(null); // No result found
            toast.error("User not found");
          }
        } 
    catch (error) {
        toast.error("Error during search");
        setSearchResult(null); // Reset if an error occurs
    } finally {
        setLoading(false);
      }
    };
  
// Delete user
  

