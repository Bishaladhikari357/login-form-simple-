import React, { useState } from 'react';
import './RegistrationForm.css'
function RegistrationForm({ onRegister }) {
  
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      // Save credentials to localStorage
      localStorage.setItem('email', email);
      localStorage.setItem('name', name);
      localStorage.setItem('password', password);
      alert('Registration Successful!');
      onRegister();
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Register</h2>

      <input
        type="name"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
