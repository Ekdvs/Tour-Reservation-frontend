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
   
  };
  return (
    <div>
      
    </div>
  )
}
