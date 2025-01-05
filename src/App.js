import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./user/Register";
import SignIn from "./user/SignIn";
import ForgotPassword from './user/ForgotPassword';
import VerifyOTP from './user/VerifyOTP';
import ChangePassword from './user/ChangePassword';
import Profile from './user/Profile';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import EventShowPage from './pages/EventU';
import EventManagement from './admin/EventPage';



function App() {
  return (
    <div>
     <Router>
        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<SignIn/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/ForgotPassword" element={<ForgotPassword/>} />
          <Route path="/VerifyOTP" element={<VerifyOTP/>} />
          <Route path="/PasswordChange" element={<ChangePassword/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Services" element={<Services/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/EventShowPage" element={<EventShowPage/>} />
         

        </Routes>
      </Router>
    </div>
  );
}

export default App;
