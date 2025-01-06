const OnlineUsersCard = () => {
    const [onlineUsers, setOnlineUsers] = useState(0);
  
    useEffect(() => {
      // Fetch online users count from the backend
      const fetchOnlineUsers = async () => {
        try {
          const response = await axios.get("http://localhost:8080/user/onlineUsers");
          setOnlineUsers(response.data.count);
        } catch (error) {
          console.error("Error fetching online users:", error);
        }
      };
  
      fetchOnlineUsers();
    }, []);
  
    return (
        <div className="card card-round">
          <div className="card-body pb-0">
            <div className="h1 fw-bold float-end text-primary">+5%</div>
            <h2 className="mb-2">{onlineUsers}</h2>
            <p className="text-muted">Users online</p>
            <div className="pull-in sparkline-fix">
              <div id="lineChart"> {/* Placeholder for any future chart */}</div>
            </div>
          </div>
        </div>
      );
    };
    
    export default OnlineUsersCard;
    