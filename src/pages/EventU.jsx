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
            
                

        

