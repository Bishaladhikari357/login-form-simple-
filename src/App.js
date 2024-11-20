import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm/RegistrationForm.js';
import LoginForm from './components/LoginForm';
import './index.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleRegister = () => {
    setIsRegistered(true);
  };

  return (
    <>
    
    <div className={`container ${isLoggedIn ? 'full-screen' : ''}`}>
      {!isLoggedIn ? (
        isRegistered ? (
          <LoginForm onLogin={handleLogin} />
        ) : (
          <RegistrationForm onRegister={handleRegister} />
        )
      ) : (
        <Navbar/>
      )}
    </div>
    </>
  );
}

export default App;
