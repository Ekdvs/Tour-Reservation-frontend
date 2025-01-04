import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./user/Register";
import SignIn from "./user/SignIn";
import ForgotPassword from './user/ForgotPassword';
import VerifyOTP from './user/VerifyOTP';
import ChangePassword from './user/ChangePassword';


function App() {
  return (
    <div>
     <Router>
        <Routes>

          <Route path="/login" element={<SignIn/>} />
          <Route path="/" element={<Register/>} />
          <Route path="/ForgotPassword" element={<ForgotPassword/>} />
          <Route path="/VerifyOTP" element={<VerifyOTP/>} />
          <Route path="/ChangePassword" element={<ChangePassword/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
