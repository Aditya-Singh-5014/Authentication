// src/components/Input.jsx
import React from "react";
import PropTypes from "prop-types";

const Input = ({
  type = "text",
  placeholder = "",
  value = "",
  onChange = () => {},
  icon: Icon,
  ...props
}) => (
  <div className="input-container">
    {Icon && <Icon className="icon" />} {/* Render icon if provided */}
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  </div>
);

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  icon: PropTypes.elementType, // Expecting a React component type for icon
};

export default Input;
