import './Register.css'; // Import the CSS file
import React, { useState } from 'react';
import { app } from './firebase-config.js';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from 'react-router-dom'; // Import necessary modules

function Register() {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(""); // Error state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      console.log("User registered successfully:", userCredential.user);
      setSubmitted(true);
      setError(""); // Clear error if any
      navigate('/login');
    } catch (error) {
      console.error("Error registering user:", error.message);
      setError("Failed to register. Please try again."); // Friendly error message
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Register</h1>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          onChange={handleChange}
          className="form-input"
        />
        <button className="register-btn" onClick={handleSubmit}>Register</button>
        {submitted && (
          <p className="success-message">Successfully registered! Email: {data.email}</p>
        )}
        {error && <p className="error-message">{error}</p>}
        <p className="login-text">
          Already have an account? <Link to="/" className="login-link">Log in here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
