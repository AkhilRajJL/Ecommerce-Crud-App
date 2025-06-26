import React, { useState, useEffect } from 'react';
import './Login.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import img from "../../Pages/Login/shopping.jpg";
import { Link} from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

 
  useEffect(() => {
    const savedUser = localStorage.getItem('username');
    if (savedUser) setUsername(savedUser);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      localStorage.setItem('username', username);
      alert(`Welcome back, ${username}!`);
    } else {
      alert('Please enter a username');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
       
        <div className="login-left">
          <img src={img} alt="Shopping" className="login-image" />
          <div className="login-overlay">
            <h2 className="overlay-title">Welcome Back</h2>
            <p className="overlay-subtitle">Login with your social media</p>
            <div className="social-buttons">
              <button type="button" className="social-btn facebook">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button type="button" className="social-btn twitter">
                <i className="fab fa-twitter"></i>
                <span>Login with Twitter</span>
              </button>
            </div>
          </div>
        </div>

       
        <div className="login-right">
          <form className="login-form" onSubmit={handleSubmit}>
            <h1 className="form-title">Login</h1>
            <p className="form-subtitle">
              Don’t have an account? 
              <Link className="form-link" to="/reg">Create one</Link>
            </p>

            <input
              type="text"
              placeholder="Username"
              className="form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="form-options">
              <label className="checkbox-container">
                <input type="checkbox" />
                <span className="checkmark">Remember me</span>
              </label>
              <Link className="forgot-link" to="/pass">Forgot password?</Link>
            </div>

            <button type="submit" className="form-button">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
