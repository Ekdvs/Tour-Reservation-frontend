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









