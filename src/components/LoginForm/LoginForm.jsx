import React, { useState, useEffect } from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const fixedUsername = 'ameni';  // Username fixe
  const fixedPassword = 'password123';  // Password fixe

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Login';
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      setError('Username field required');
    } else if (username !== fixedUsername) {
      setError('Incorrect username');
    } else if (!password) {
      setError('Password field required');
    } else if (password !== fixedPassword) {
      setError('Incorrect password');
    } else {
      navigate('/notes');  // Redirection vers la page des notes
    }
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box">
          <input 
            type="text" 
            placeholder='Username' 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required 
          />
          <FaUser className='icon' />
        </div>
        <div className="input-box">
          <input 
            type="password" 
            placeholder='Password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <FaLock className='icon' />
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="remember-forget">
          <label><input type="checkbox" />Remember me</label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>Don't have an account? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;





