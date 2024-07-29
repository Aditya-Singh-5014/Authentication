// src/components/Button.jsx
import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick = () => {}, children, ...props }) => (
  <button onClick={onClick} {...props}>
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
