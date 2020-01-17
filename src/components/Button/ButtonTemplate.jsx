import React from "react";
import "./Button.styles.css";
const ButtonTemplate = ({ submitButton, submitType, color }) => {
  return (
    <input
      className="Template__Button"
      type={submitType}
      value={submitButton}
      style={{ backgroundColor: color }}
    />
  );
};
ButtonTemplate.defaultProps = {
  submitType: "text"
};
export default ButtonTemplate;
