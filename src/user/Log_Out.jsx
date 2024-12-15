import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Log_Out() {
    const navigate=useNavigate();
    useEffect(()=>{
        const performLogout = async () => {
            try {
              // Call the backend logout endpoint
              await axios.post('http://localhost:8080/logout', {}, { withCredentials: true });
      
              // Clear the local/session storage
              localStorage.removeItem('userToken');
              sessionStorage.removeItem('userToken');
      
              // Redirect to login page
              navigate('/login');
            } catch (error) {
              console.error('Error during logout:', error);
            }
          };
      
          performLogout();
        }, [navigate]

    );

  return (
    <div>
      <div className="logout-container">
      <h2>Logging out...</h2>
      <p>You are being logged out. Please wait.</p>
    </div>
    </div>
  )
}
