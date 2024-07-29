// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { getUser } from "../utils/localStorageUtils"; // Import the function
import { FaEnvelope, FaLock } from "react-icons/fa";
import Button from "../components/Button";
import Input from "../components/Input";
import "../assets/styles/main.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const predefinedUser = {
      email: "user@example.com",
      password: "password123",
    };
    const registeredUser = getUser();

    if (
      (registeredUser &&
        email === registeredUser.email &&
        password === registeredUser.password) ||
      (email === predefinedUser.email && password === predefinedUser.password)
    ) {
      login({ name: registeredUser?.name || "User", email });
      navigate("/account");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container">
      <div className="left-panel">
        <h2>Welcome Back!</h2>
        <p>To keep connected with us please login with your personal info</p>
        <Button onClick={() => navigate("/register")}>Sign Up</Button>
      </div>
      <div className="right-panel">
        <form onSubmit={handleLogin}>
          <h2>Sign In</h2>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={FaEnvelope}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={FaLock}
          />
          <Button onClick={handleLogin}>Sign In</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
