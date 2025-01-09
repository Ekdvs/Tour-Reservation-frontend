import axios from 'axios';
import React, { useState } from 'react'

export default function ReservationUser() {
    const [reservations, setReservations] = useState([]);
    const [newReservation, setNewReservation] = useState({ userId: "", details: "" });
    const [userId, setUserId] = useState("");

    const fetchReservationsByUserId = () => {
        if (!userId){
            alert("Please enter a User ID to fetch reservations.");
        return;
      }
      axios
      .get(`http://localhost:8080/reservation/getReservationByUserId/${userId}`)
      .then((res) => setReservations(res.data))
      .catch((err) => console.error(err));
  };

  const handleAddReservation = (e) => {
    e.preventDefault();
    axios
    .post("http://localhost:8080/reservation/addReservation", newReservation)
    .then(() => {
      alert("Reservation added successfully!");
      setNewReservation({ userId: "", details: "" });
      fetchReservationsByUserId(); // Refresh the list
    })
    .catch((err) => console.error(err));
   
  };
  return (
    <div>
        <div className="container mt-5">
        <h1 className="text-center mb-4">User Reservations</h1>
        <div className="mb-4">
        <h3>Search Reservations</h3>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}

          />
           <button className="btn btn-primary" onClick={fetchReservationsByUserId}>
            Fetch Reservations
          </button>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-header">Add Reservation</div>
        <div className="card-body">
          <form onSubmit={handleAddReservation}>
            <div className="mb-3">
              <label className="form-label">User ID</label>
              <input
                type="text"
                className="form-control"
                value={newReservation.userId}
                onChange={(e) => setNewReservation({ ...newReservation, userId: e.target.value })}
                required
              />
              </div>
            <div className="mb-3">
              <label className="form-label">Details</label>
              <input
                type="text"
                className="form-control"
                value={newReservation.details}
                onChange={(e) => setNewReservation({ ...newReservation, details: e.target.value })}
                required
              />
              </div>
            <button type="submit" className="btn btn-success">
              Add Reservation
            </button>
          </form>
        </div>
      </div>
      <div>
        <h3>Your Reservations</h3>
        {reservations.length > 0 ? (
          <table className="table table-striped">
            <thead></thead>
            <tr>
                <th>ID</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody></tbody>
      
    </div>
  )
}
