
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/Home";
import Register from "./user/Register";

function App() {
  return (
    <div>
      <Router>
        <Routes>
        
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Register' element={<Register/>}/>
        

        </Routes>
      </Router>

    </div>
  );
}

export default App;
