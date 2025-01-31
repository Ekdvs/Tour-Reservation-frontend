import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar";
import Nav from "./Nav";

const EventManagement = () => {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [eventForm, setEventForm] = useState({
    eventName: "",
    eventDate: "",
    eventTime: "",
    eventVenue: "",
    eventOrganizer: "",
    description: "",
    oneTicketPrice: "",
    eventType: "",
    eventIsFor: "",
    numOfTickets: "",
  });
  const [eventImage, setEventImage] = useState(null);
  const [editEvent, setEditEvent] = useState(null); // Store the event being edited
  const [expandedEvents, setExpandedEvents] = useState({});

  // Fetch all events
  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/event/getAllEvents"
      );
      setEvents(response.data);
    } catch (error) {
      toast.error("Error fetching events!");
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Search Events by Name
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/event/searchEvents?name=${searchQuery}`
      );
      setEvents(response.data);
    } catch (error) {
      toast.error("Error searching events!");
    }
  };

  const toggleReadMore = (eventId) => {
    setExpandedEvents((prevState) => ({
      ...prevState,
      [eventId]: !prevState[eventId],
    }));
  };
  

  // Add Event
  const handleAddEvent = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("event", JSON.stringify(eventForm));
    formData.append("imageFile", eventImage);

    try {
      await axios.post("http://localhost:8080/event/addEvent", formData);
      fetchEvents();
      toast.success("Event added successfully!");
      setEventForm({
        eventName: "",
        eventDate: "",
        eventTime: "",
        eventVenue: "",
        eventOrganizer: "",
        description: "",
        oneTicketPrice: 0,
        eventType: "",
        eventIsFor: "",
        numOfTickets: 0,
      }); // Clear the form after adding an event
    } catch (error) {
      toast.error("Error adding event!");
    }
  };

  // Update Event
  const handleUpdateEvent = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("event", JSON.stringify(eventForm));
    if (eventImage) formData.append("imageFile", eventImage);

    try {
      await axios.put(
        `http://localhost:8080/event/updateEvent/${editEvent.eventId}`,
        formData
      );
      fetchEvents();
      toast.success("Event updated successfully!");
      setEditEvent(null); // Clear the editing state
      setEventForm({
        eventName: "",
        eventDate: "",
        eventTime: "",
        eventVenue: "",
        eventOrganizer: "",
        description: "",
        oneTicketPrice: 0,
        eventType: "",
        eventIsFor: "",
        numOfTickets: 0,
      }); // Clear the form
    } catch (error) {
      toast.error("Error updating event!");
    }
  };

  // Delete Event
  const handleDeleteEvent = async (eventId) => {
    try {
      await axios.delete(`http://localhost:8080/event/deleteEvent/${eventId}`);
      fetchEvents();
      toast.success("Event deleted successfully!");
    } catch (error) {
      toast.error("Error deleting event!");
    }
  };

  // Form Change Handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventForm({ ...eventForm, [name]: value });
  };

  // Set Event for Editing
  const handleEditEvent = (event) => {
    setEditEvent(event);
    setEventForm({
      eventName: event.eventName,
      eventDate: event.eventDate,
      eventTime: event.eventTime,
      eventVenue: event.eventVenue,
      eventOrganizer: event.eventOrganizer,
      description: event.description,
      oneTicketPrice: event.oneTicketPrice,
      eventType: event.eventType,
      eventIsFor: event.eventIsFor,
      numOfTickets: event.numOfTickets,
    });
  };

  return (
     <div>
            <Sidebar/>
            <Nav/>
    <div className="container mt-4">
      <h1 className="text-center mb-4">Event Management</h1>

      {/* Toast Notifications */}
      <ToastContainer />

      {/* Search Bar */}

      <div className="mb-4">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Search by event name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="btn btn-primary w-100" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Add or Edit Event Form */}
      <form
        onSubmit={editEvent ? handleUpdateEvent : handleAddEvent}
        className="border p-4 rounded mb-4"
      >
        <h2>{editEvent ? "Edit Event" : "Add Event"}</h2>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            name="eventName"
            placeholder="Event Name"
            value={eventForm.eventName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <input
            type="date"
            className="form-control"
            name="eventDate"
            value={eventForm.eventDate}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <input
            type="time"
            className="form-control"
            name="eventTime"
            value={eventForm.eventTime}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            name="eventVenue"
            placeholder="Venue"
            value={eventForm.eventVenue}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            name="eventOrganizer"
            placeholder="Organizer"
            value={eventForm.eventOrganizer}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <textarea
            className="form-control"
            name="description"
            placeholder="Description"
            value={eventForm.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        <div className="form-group mb-3">
          <input
            type="number"
            className="form-control"
            name="oneTicketPrice"
            placeholder="Ticket Price"
            value={eventForm.oneTicketPrice}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <select
            className="form-control"
            name="eventType"
            value={eventForm.eventType}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Select Event Type
            </option>
            <option value="Cultural">Cultural</option>
            <option value="Religious">Religious</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Food">Food</option>
            <option value="Fashion">Fashion</option>
            <option value="Literary">Literary</option>
            <option value="Film">Film</option>
          </select>
        </div>

        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            name="eventIsFor"
            placeholder="Is For"
            value={eventForm.eventIsFor}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <input
            type="number"
            className="form-control"
            name="numOfTickets"
            placeholder="Number of Tickets"
            value={eventForm.numOfTickets}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group mb-3">
          <input
            type="file"
            className="form-control"
            onChange={(e) => setEventImage(e.target.files[0])}
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          {editEvent ? "Update Event" : "Add Event"}
        </button>
      </form>


      {/* Event List show */}
     
      <h2 className="mt-4">Event List</h2>
<table className="table table-striped">
  <thead>
    <tr>
      <th>Event Name</th>
      <th>Description</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {events.map((event) => (
      <tr key={event.eventId}>
        <td>{event.eventName}</td>
        <td>
          {expandedEvents[event.eventId]
            ? event.description
            : `${event.description.substring(0, 100)}...`}
          {event.description.length > 100 && (
            <button
              className="btn btn-link p-0"
              onClick={() => toggleReadMore(event.eventId)}
            >
              {expandedEvents[event.eventId] ? "Read Less" : "Read More"}
            </button>
          )}
        </td>
        <td>
          <div className="d-flex">
            <button
              className="btn btn-warning me-2 w-100"
              onClick={() => handleEditEvent(event)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger w-100"
              onClick={() => handleDeleteEvent(event.eventId)}
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    ))}
  </tbody>
</table>



    </div></div>
  );
};

export default EventManagement;
