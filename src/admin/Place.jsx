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

// Handle form submission for adding/updating a place
const handleSubmit = async (e) => {
    e.preventDefault();

    const newPlace = { placeName, description, location, category, price };

     // If an image was selected, append it to the form data
     const formData = new FormData();
     formData.append('placeName', placeName);
     formData.append('description', description);
     formData.append('location', location);
     formData.append('category', category);
     formData.append('price', price);
     if (image) formData.append('image', image);
 
     try {
       if (editingPlace) {
         await axios.put(`${API_BASE_URL}/update/${editingPlace.placeName}`, formData, {
           headers: { 'Content-Type': 'multipart/form-data' },
         });
         toast.success('Place updated successfully!');
       } else if (isAddingPlace) {
         await axios.post(`${API_BASE_URL}/addplace`, formData, {
           headers: { 'Content-Type': 'multipart/form-data' },
         });
         toast.success('Place added successfully!');
       }
       fetchPlaces();
       resetForm();
     } catch (error) {
       toast.error('Error adding/updating place!');
     }
   };
 
// Handle delete place
const handleDelete = async (name) => {
    try {
      await axios.delete(`${API_BASE_URL}/delete/${name}`);
      toast.success('Place deleted successfully!');
      fetchPlaces();
    } catch (error) {
      toast.error('Error deleting place!');
    }
  };

  // Reset form fields
  const resetForm = () => {
    setPlaceName('');
    setDescription('');
    setLocation('');
    setImage(null); // Reset the image field
    setCategory('');
    setPrice('');
    setEditingPlace(null);
    setIsAddingPlace(false);
  };

// Handle search button click
const handleSearch = async () => {
    if (searchTerm === '') {
      setFilteredPlaces(places);
    } else {
      try {
        const response = await axios.get(`${API_BASE_URL}/getPlaceByName/${searchTerm}`);
        setFilteredPlaces([response.data]);
      } catch (error) {
        toast.error('Error searching for place!');
      }
    }
  };

  // Load details of a place into the form for editing
  const handleEdit = (place) => {
    setPlaceName(place.placeName);
    setDescription(place.description);
    setLocation(place.location);
    setImage(null); // Reset the image in case it's being edited
    setCategory(place.category);
    setPrice(place.price);
    setEditingPlace(place);
    setIsAddingPlace(false);
  };

// Handle adding a new place
const handleAddPlace = () => {
    resetForm();
    setIsAddingPlace(true);
  };

  return (
    <div className="container mt-5">
      <ToastContainer />
      <h3>{editingPlace ? 'Edit Travel Place' : isAddingPlace ? 'Add New Place' : 'All Travel Places'}</h3>

      {/* Form for adding/updating a place */}
      {(editingPlace || isAddingPlace) && (
        <form onSubmit={handleSubmit} className="mt-4" encType="multipart/form-data">
          <div className="mb-3">
            <label htmlFor="placeName" className="form-label">Place Name</label>
            <input
              type="text"
              className="form-control"
              id="placeName"
              value={placeName}
              onChange={(e) => setPlaceName(e.target.value)}
              required
              disabled={!!editingPlace}
            />
          </div>






