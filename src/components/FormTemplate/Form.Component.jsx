import React from "react";
import "./form.styles.css";
import ButtonTemplate from "../Button/ButtonTemplate";

const FormTemplate = ({ submitButton, onSubmit, range }) => {
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
      {/*  */}
      {range ? (
        <input type="range" min="0" max="5" name="range" className="slider" />
      ) : null}
      {/*  */}
      <ButtonTemplate submitButton={submitButton} color="#12a029" />
    </form>
  );
};

export default FormTemplate;
