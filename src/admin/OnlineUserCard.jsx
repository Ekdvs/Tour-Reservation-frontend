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
  