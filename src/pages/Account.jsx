// src/pages/Account.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserEdit, FaEnvelope, FaLock } from "react-icons/fa";
import { logout, loginSuccess } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import "../assets/styles/main.css";

const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleSave = () => {
    if (name && email) {
      const updatedUser = {
        ...user,
        name,
        email,
        password: password || user.password,
      };
      localStorage.setItem("registeredUser", JSON.stringify(updatedUser));
      dispatch(loginSuccess(updatedUser));
      setIsEditing(false);
      alert("Account information updated successfully!");
    } else {
      alert("Name and email cannot be empty.");
    }
  };

  return (
    <div className="container">
      <div className="left-panel">
        <h2>Account Information</h2>
        <p>Manage your personal information and account settings</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="right-panel">
        {user ? (
          <div>
            {isEditing ? (
              <form>
                <div>
                  <FaUserEdit className="icon" />
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <FaEnvelope className="icon" />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <FaLock className="icon" />
                  <input
                    type="password"
                    placeholder="New Password (optional)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="button" onClick={handleSave}>
                  Save
                </button>
                <button type="button" onClick={handleEditToggle}>
                  Cancel
                </button>
              </form>
            ) : (
              <div>
                <p>
                  Name: {user.name}{" "}
                  <FaUserEdit
                    className="edit-icon"
                    onClick={handleEditToggle}
                  />
                </p>
                <p>Email: {user.email}</p>
              </div>
            )}
          </div>
        ) : (
          <p>No user data available</p>
        )}
      </div>
    </div>
  );
};

export default Account;
