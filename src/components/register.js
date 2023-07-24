import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user={
      name:name,
      email:email,
      password:password
    }
    axios.post('http://localhost:8181/api/v1/auth/register',user)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
  };

  return (
    <div className='box'>
        <div className='login-content'>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" class='bt' ><Link to="/home" className='logbut'>Register</Link></button>
      </form>
      </div>
    </div>
  );
};

export default RegisterPage;
