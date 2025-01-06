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
  
    // Fetch all events
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:8080/event/getAllEvents");
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
      await axios.put(`http://localhost:8080/event/updateEvent/${editEvent.eventId}`, formData);
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
<form onSubmit={editEvent ? handleUpdateEvent : handleAddEvent} className="border p-4 rounded mb-4">
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







