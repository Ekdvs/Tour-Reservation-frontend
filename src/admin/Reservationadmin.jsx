import React, { useEffect, useState } from "react";
import axios from "axios";

const Reservationadmin = () => {
  const [reservations, setReservations] = useState([]);
  const [totalCharge, setTotalCharge] = useState(0);
  const [totalTickets, setTotalTickets] = useState(0);
  const [newReservation, setNewReservation] = useState({ userId: "", details: "" });
  const [editReservation, setEditReservation] = useState(null);

  // Fetch all reservations
  useEffect(() => {
    fetchReservations();
    fetchSummaryData();
  }, []);

  const fetchReservations = () => {
    axios
      .get("http://localhost:8080/reservation/getAllReservations")
      .then((res) => setReservations(res.data))
      .catch((err) => console.error(err));
  };

  const fetchSummaryData = () => {
    axios
      .get("http://localhost:8080/reservation/totalCharge")
      .then((res) => setTotalCharge(res.data))
      .catch((err) => console.error(err));

    axios
      .get("http://localhost:8080/reservation/totalTickets")
      .then((res) => setTotalTickets(res.data))
      .catch((err) => console.error(err));
  };

  const handleAddReservation = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/reservation/addReservation", newReservation)
      .then(() => {
        alert("Reservation added successfully!");
        setNewReservation({ userId: "", details: "" });
        fetchReservations();
      })
      .catch((err) => console.error(err));
  };

  const handleEditReservation = (e) => {
    e.preventDefault();
    if (!editReservation) return;

    axios
      .put(
        `http://localhost:8080/reservation/updateReservation/${editReservation.id}`,
        editReservation
      )
      .then(() => {
        alert("Reservation updated successfully!");
        setEditReservation(null);
        fetchReservations();
      })
      .catch((err) => console.error(err));
  };

  const deleteReservation = (id) => {
    axios
      .delete(`http://localhost:8080/reservation/deleteReservation/${id}`)
      .then(() => {
        alert("Reservation deleted successfully!");
        fetchReservations();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Admin Panel - Reservations</h1>

      {/* Dashboard */}
      <div style={{ marginBottom: "20px" }}>
        <h2>Dashboard</h2>
        <p>Total Charge: ${totalCharge}</p>
        <p>Total Tickets: {totalTickets}</p>
      </div>

      {/* Add Reservation */}
      <div style={{ marginBottom: "20px" }}>
        <h2>Add Reservation</h2>
        <form onSubmit={handleAddReservation}>
          <input
            type="text"
            placeholder="User ID"
            value={newReservation.userId}
            onChange={(e) => setNewReservation({ ...newReservation, userId: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Details"
            value={newReservation.details}
            onChange={(e) => setNewReservation({ ...newReservation, details: e.target.value })}
            required
          />
          <button type="submit">Add</button>
        </form>
      </div>

      {/* Edit Reservation */}
      {editReservation && (
        <div style={{ marginBottom: "20px" }}>
          <h2>Edit Reservation</h2>
          <form onSubmit={handleEditReservation}>
            <input
              type="text"
              placeholder="User ID"
              value={editReservation.userId}
              onChange={(e) => setEditReservation({ ...editReservation, userId: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Details"
              value={editReservation.details}
              onChange={(e) => setEditReservation({ ...editReservation, details: e.target.value })}
              required
            />
            <button type="submit">Update</button>
            <button type="button" onClick={() => setEditReservation(null)}>Cancel</button>
          </form>
        </div>
      )}

      {/* Reservation List */}
      <div>
        <h2>Reservations</h2>
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Details</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.id}>
                <td>{reservation.id}</td>
                <td>{reservation.userId}</td>
                <td>{reservation.details}</td>
                <td>
                  <button onClick={() => setEditReservation(reservation)}>Edit</button>
                  <button onClick={() => deleteReservation(reservation.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reservationadmin ;
