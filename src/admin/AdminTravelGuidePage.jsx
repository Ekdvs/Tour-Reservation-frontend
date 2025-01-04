import { Modal } from 'bootstrap';
import React from 'react'

export default function AdminTravelGuidePage() {
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:8080";

    // Modal for viewing travel guide history
    const UserHistoryModal = ({ show, user, onClose }) => (
        <Modal show={show} onHide={onClose} size="lg">
    <Modal.Header closeButton>
      <Modal.Title>Travel Guide History</Modal.Title>
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
    </Modal>);
    const AdminTravelGuidePage = () => {
        const [travelGuides, setTravelGuides] = useState([]);
        const [searchEmail, setSearchEmail] = useState("");
        const [searchResult, setSearchResult] = useState(null);
        const [showModal, setShowModal] = useState(false);
        const [selectedUser, setSelectedUser] = useState(null);
        const [loading, setLoading] = useState(false);

        // Fetch travel guides from the backend
  const fetchTravelGuides = async () => {
}
