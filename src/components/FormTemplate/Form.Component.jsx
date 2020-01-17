import React from "react";
import "./form.styles.css";
import ButtonTemplate from "../Button/ButtonTemplate";

const FormTemplate = ({ submitType, submitButton, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="template-form">
      <span className="form--input">
        <input type="text" name="name" placeholder="english name" required />
      </span>
      <textarea
        id="story"
        name="description"
        placeholder="english description"
        rows="2"
        cols="30"
      />
      <ButtonTemplate
        submitType={submitType}
        submitButton={submitButton}
        color="#12a029"
      />
    </form>
  );
};

export default FormTemplate;
