// src/pages/Register.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import Button from "../components/Button";
import Input from "../components/Input";
import "../assets/styles/main.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    const userData = { name, email, password };
    login(userData);
    navigate("/account");
  };

  return (
    <div className="container">
      <div className="left-panel">
        <h2>Create Account</h2>
        <p>Use your email for registration</p>
        <form onSubmit={handleRegister}>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            icon={FaUser}
          />
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
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
      <div className="right-panel">
        <h2>Welcome Back!</h2>
        <p>To keep connected with us please login with your personal info</p>
        <Button onClick={() => navigate("/")}>Sign In</Button>
      </div>
    </div>
  );
};

export default Register;
