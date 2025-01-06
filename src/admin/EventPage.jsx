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
