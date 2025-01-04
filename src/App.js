import Register from "./user/Register";


function App() {
  return (
    <div>
     <Router>
        <Routes>

          <Route path="/login" element={<SignIn/>} />
          <Route path="/register" element={<Register/>} />
          

          ForgotPassword
        </Routes>
      </Router>
    </div>
  );
}

export default App;
