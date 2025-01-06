const NewCustomers = () => {
    const [newCustomers, setNewCustomers] = useState([]);
  
    useEffect(() => {
      // Fetch new customers from the backend
      fetch('http://localhost:8080/user/allUsers')
        .then(response => response.json())
        .then(data => setNewCustomers(data))
        .catch(error => console.error('Error fetching new customers:', error));
    }, []);
  