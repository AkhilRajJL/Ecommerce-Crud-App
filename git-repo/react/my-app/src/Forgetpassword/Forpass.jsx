import React, { useState } from 'react';
import './Forpass.css';
import { Link } from 'react-router-dom';

function ForgetPassword() {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const validateInput = (value) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex = /^\d{10}$/;

    if (!value) return "This field is required";

    if (!emailRegex.test(value) && !phoneRegex.test(value)) {
      return "Enter a valid email or 10-digit phone number";
    }

    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateInput(inputValue);
    if (validationError) {
      setError(validationError);
      setMessage('');
    } else {
      setMessage("OTP has been sent to your email or phone number.");
      setError('');
      setInputValue('');
    }
  };

  return (
    <div className="main-forget">
      <form className="form-forget" onSubmit={handleSubmit}>
        <h1 className="forget-title">Forgot Password?</h1>
        <p className="instruction">Enter your email or phone number to receive an OTP</p>

        <input
          type="text"
          placeholder="Enter email or phone number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {error && <div className="error">{error}</div>}
        {message && <div className="success">{message}</div>}

        <button type="submit" className="reset-btn">Send OTP</button>

        <p className="last_content">
          Back to <Link className="login" to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default ForgetPassword;
