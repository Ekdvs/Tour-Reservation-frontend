const NewCustomers = () => {
    const [newCustomers, setNewCustomers] = useState([]);
  
    useEffect(() => {
      // Fetch new customers from the backend
      fetch('http://localhost:8080/user/allUsers')
        .then(response => response.json())
        .then(data => setNewCustomers(data))
        .catch(error => console.error('Error fetching new customers:', error));
    }, []);
  
    return (
        <div className="card card-round">
          <div className="card-body">
            <div className="card-head-row card-tools-still-right">
              <div className="card-title">New Customers</div>
              <div className="card-tools">
                <div className="dropdown">
                  <button
                    className="btn btn-icon btn-clean me-0"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
    




