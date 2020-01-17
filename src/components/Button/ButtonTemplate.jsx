import React from "react";
import "./Button.styles.css";
const ButtonTemplate = ({ submitButton, color, onClick }) => {
  return (
    <button
      className="Template__Button"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {submitButton}
    </button>
  );
};
export default ButtonTemplate;
