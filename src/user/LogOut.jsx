import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function LogOut() {
    const navigate=useNavigate();
    useEffect(()=>{
        const performLogout = async () => {
            try{
                await axios.post('http://localhost:5000/api/logout', {}, { withCredentials: true });

                localStorage.removeItem('userToken');
                sessionStorage.removeItem('userToken');
                setTimeout(() => {
                    navigate('/login');
                  }, 2000);
            }
            catch(error)
            {
                console.error('Logout error', error);
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
