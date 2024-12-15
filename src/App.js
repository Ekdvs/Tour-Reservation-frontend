
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS (includes dropdown functionality)
import Home from "./page/Home";

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
