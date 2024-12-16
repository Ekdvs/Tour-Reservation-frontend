
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/Home";
import Register from "./user/Register";
import Log_Out from "./user/Log_Out";
import Login from "./user/Login";
import ForgotPassword from "./user/ForgotPassword";
import VerifyOTP from "./user/VerifyOTP";
import PasswordChange from "./user/PasswordChange";
import My_Profile from "./user/My_Profile";
import Blog from "./pages/Blog";
import CardPayment from "./pages/CardPayment";

function App() {
  return (
    <div>
      <Router>
        <Routes>
        
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Register' element={<Register/>}/>
        <Route exact path='/Log_Out' element={<Log_Out/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/ForgotPassword' element={<ForgotPassword/>}/>
        <Route exact path='/VerifyOTP' element={<VerifyOTP/>}/>
        <Route exact path='/PasswordChange' element={<PasswordChange/>}/>
        <Route exact path='/My_Profile' element={<My_Profile/>}/>
        <Route exact path='/Blog' element={<Blog/>}/>
        <Route exact path='/CardPayment' element={<CardPayment/>}/>
        
        </Routes>
      </Router>

    </div>
  );
}

export default App;
