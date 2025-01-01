import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { app } from "./firebase-config";
import "./Login.css"; // Import the CSS file for styling

function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const auth = getAuth(app); // Initialize Firebase Auth

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleLogin = async () => {
    try {
      // Authenticate user with Firebase
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      console.log("User logged in:", userCredential.user);
      setError(""); // Clear any previous errors
      navigate("/dashboard"); // Redirect to dashboard or another page after login
    } catch (error) {
      console.error("Error logging in:", error.message);
      setError("Invalid email or password. Please try again."); // Friendly error message
    }
  };


  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Welcome Back :3</h1>
        <p className="login-subtitle">Log in to see our memories!</p>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={data.email}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={data.password}
          onChange={handleChange}
          className="form-input"
        />
        <button className="login-btn" onClick={handleLogin}>
          Login!
        </button>
        {error && <p className="error-message">{error}</p>}
        {/* <p className="register-text"> */}
          {/* Don't have an account?  */}
          {/* <Link to="/register" className="register-link">Register here</Link> */}
        {/* </p> */}
      </div>
    </div>
  );
}

export default Login;
