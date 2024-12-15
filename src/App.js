
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
        
        <Route exact path='/' element={<Home/>}/>
        

        </Routes>
      </Router>

    </div>
  );
}

export default App;
