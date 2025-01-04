import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function LogOut() {
    const navigate=useNavigate();
    useEffect(()=>{const performLogout = async () => {
        
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
