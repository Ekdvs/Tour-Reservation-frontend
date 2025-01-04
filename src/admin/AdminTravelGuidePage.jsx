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
        
    </Modal.Body>
    </Modal>

    )
}
