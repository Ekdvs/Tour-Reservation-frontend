const Places = () => {
    const [places, setPlaces] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [placeName, setPlaceName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState(null); // Store the image file
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [editingPlace, setEditingPlace] = useState(null);
    const [isAddingPlace, setIsAddingPlace] = useState(false);
  
    const API_BASE_URL = 'http://localhost:8080/place';
  
    
  // Fetch all places
  const fetchPlaces = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/allplaces`);
      setPlaces(response.data);
      setFilteredPlaces(response.data);
    } catch (error) {
      toast.error('Error fetching places!');
    }
  };

  useEffect(() => {
    fetchPlaces();
  }, []);

