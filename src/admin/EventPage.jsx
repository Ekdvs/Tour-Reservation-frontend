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

