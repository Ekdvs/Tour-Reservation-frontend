import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EventShowPage.css"; // Custom CSS file for styling
const EventShowPage = () => {
    const [events, setEvents] = useState([]);
    const API_BASE_URL = "http://localhost:8080/event";
     // Fetch all events
    const fetchEvents = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/getAllEvents`);
            setEvents(response.data);
            } catch (error) {
            console.error("Error fetching events:", error);
            }
        };
        useEffect(() => {
            fetchEvents();
            }, []);
            return (
                <div className="container mt-5">
                <h2 className="text-center mb-4">Upcoming Events</h2>
                <div className="row">
                    {events.map((event) => (
                    <div key={event.eventId} className="col-md-4 mb-4">
                        <div className="card shadow-lg rounded-lg event-card">
                        <img
                        src={event.eventImagePath || "/path/to/default-image.jpg"}
                        alt={event.eventName}
                        className="card-img-top event-image"
                        />
                        <div className="card-body">
                        <h5 className="card-title event-title">{event.eventName}</h5>
                        <p className="card-text event-description">
                        {event.description}
                        </p>
                        <p>
                            <strong>Date:</strong> {event.eventDate} <br />
                            <strong>Time:</strong> {event.eventTime} <br />
                            <strong>Venue:</strong> {event.eventVenue} <br />
                            
                        

        

