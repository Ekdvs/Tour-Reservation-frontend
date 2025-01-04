import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./user/Register";
import SignIn from "./user/SignIn";
import ForgotPassword from './user/ForgotPassword';
import VerifyOTP from './user/VerifyOTP';
import ChangePassword from './user/ChangePassword';
import Profile from './user/Profile';
import Home from './user/picture2';


function App() {
  return (
    <div>
     <Router>
        <Routes>

          <Route path="/login" element={<SignIn/>} />
          <Route path="/" element={<Register/>} />
          <Route path="/ForgotPassword" element={<ForgotPassword/>} />
          <Route path="/VerifyOTP" element={<VerifyOTP/>} />
          <Route path="/PasswordChange" element={<ChangePassword/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/new" element={<Home/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
