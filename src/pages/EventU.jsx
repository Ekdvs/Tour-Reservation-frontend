import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EventShowPage.css"; // Custom CSS file for styling
const EventShowPage = () => {
    const [events, setEvents] = useState([]);
    const API_BASE_URL = "http://localhost:8080/event";
