import { Modal } from 'bootstrap';
import React from 'react'
import { ToastContainer } from 'react-toastify';

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
    setLoading(true);
    try {
        const response = await axios.get(`${API_BASE_URL}/user/allUsers`);
        const guides = response.data.filter((user) => user.userRole === "travelGuide");
        setTravelGuides(guides); } 
        catch (error) {
            toast.error("Error fetching travel guides"); } 
        finally {
            setLoading(false);
        }
      };
    
    // Search travel guide by email
  const searchTravelGuideByEmail = async () => {
    if (!searchEmail.trim()) {
        toast.warning("Please enter an email address");
        return;
      }
      setLoading(true);
      try {
        const response = await axios.get(`${API_BASE_URL}/user/getUserByEmail/${searchEmail}`);
        if (response.data && response.data.userRole === "travelGuide") {
            setSearchResult(response.data);
          } else {
            setSearchResult(null);
            toast.error("Travel guide not found");
          }} 
        
          catch (error) {
            toast.error("Error during search");
            setSearchResult(null);
          } 
          finally {
            setLoading(false);
          }
        };

     // Delete travel guide
     const deleteTravelGuide = async (userId) => {
        try {
            await axios.delete(`${API_BASE_URL}/user/delete/${userId}`); 
            toast.success("Travel guide deleted successfully");
            fetchTravelGuides();} 
            catch (error) {
                toast.error("Error deleting travel guide");
              }};

    const handleViewHistory = (guide) => {
        setSelectedUser(guide); 
        setShowModal(true);
     };
     useEffect(() => {
       fetchTravelGuides();
      }, []);
    return (
    <div className="container mt-4">
        <ToastContainer/>
        <h2 className="text-center">Admin Travel Guide Management</h2>
        <br />
      <div className="mb-4 search-container">
      <Form.Group className="d-flex w-50">
      <Form.Control
            type="email"
            placeholder="Search travel guide by email"
            value={searchEmail}
            onChange={(e) => setSearchEmail(e.target.value)}
          />
        <Button variant="primary" onClick={searchTravelGuideByEmail}>Search</Button>
        </Form.Group>
        {searchResult === null && searchEmail && (
            <div className="mt-3">
            <h5>No travel guide found with that email address</h5>
          </div>
        )}
        {searchResult && (
          <div className="mt-3">
            <h5>Search Result:</h5>
            <p>
              {searchResult.firstName} {searchResult.lastName} - {searchResult.userEmail}
            </p>
          </div>
        )}
      </div>
</div>

{loading ? (
    <Spinner animation="border" className="d-block mx-auto" />
  ) : (
    <Table striped bordered hover responsive>
        <thead>
            <tr>
                <th>#</th>


}
