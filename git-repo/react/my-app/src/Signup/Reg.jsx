import React, { useState } from 'react';
import './Reg.css';
import { Link } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    address: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      Object.entries(formData).forEach(([key, value]) => {
        localStorage.setItem(key, value);
      });

      alert("Form submitted successfully");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        tel: "",
        address: "",
        password: ""
      });
      setErrors({});
    }
  };

  const validateForm = () => {
    const formErrors = {};
    let isValid = true;

    if (!formData.firstName) {
      formErrors.firstName = "First name is required";
      isValid = false;
    }
    if (!formData.lastName) {
      formErrors.lastName = "Last name is required";
      isValid = false;
    }
    if (!formData.email) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Invalid email format";
      isValid = false;
    }
    if (!formData.tel) {
      formErrors.tel = "Mobile number is required";
      isValid = false;
    }
    if (!formData.address) {
      formErrors.address = "Address is required";
      isValid = false;
    }
    if (!formData.password) {
      formErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  return (
    <div className="main1">
      <form className="form-container" onSubmit={handleSubmit}>
        <h1 className="log">Create Account</h1>

        {[
          { name: "firstName", placeholder: "First Name" },
          { name: "lastName", placeholder: "Last Name" },
          { name: "email", placeholder: "Email", type: "email" },
          { name: "tel", placeholder: "Mobile Number", type: "tel" },
          { name: "address", placeholder: "Address" }
        ].map(({ name, placeholder, type = "text" }) => (
          <div key={name}>
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              value={formData[name]}
              onChange={handleChange}
            />
            {errors[name] && <div className="error">{errors[name]}</div>}
          </div>
        ))}

        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(prev => !prev)}
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>
        {errors.password && <div className="error">{errors.password}</div>}

        <button type="submit" className="sign_up">Sign Up</button>

        <p className="last_content">
          Already have an account? <Link className="login" to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
