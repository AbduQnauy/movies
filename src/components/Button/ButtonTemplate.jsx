import React from "react";
import "./Button.styles.css";
const ButtonTemplate = ({ submitButton, color, onClick, children }) => {
  return (
    <button
      className="Template__Button"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {children}
      {submitButton}
    </button>
  );
};
export default ButtonTemplate;
