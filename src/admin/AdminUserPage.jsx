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
