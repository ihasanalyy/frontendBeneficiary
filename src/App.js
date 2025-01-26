// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import BeneficiaryForm from './components/BeneficiaryForm';

const App = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    // Optional: Fetch user info if the token is already present
    if (token) {
      setUser({
        name: 'John Doe',
        email: 'john.doe@example.com',
      });
    }
  }, [token]);

  return (
    <Router>
      <div>
        <h1>Welcome to the Beneficiary App</h1>
        <nav>
          <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link> | <Link to="/beneficiary">Beneficiary Form</Link>
        </nav>

        <Routes>
          <Route
            path="/login"
            element={<Login setUser={setUser} setToken={setToken} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/beneficiary"
            element={
              user ? (
                <BeneficiaryForm token={token} />
              ) : (
                <div>Please log in to access the beneficiary form.</div>
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
