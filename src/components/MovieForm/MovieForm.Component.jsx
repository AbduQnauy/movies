import React from "react";
import { connect } from "react-redux";
import FormTemplate from "../FormTemplate/Form.Component";
import { addMovie } from "../../redux/movies/actions";

const MovieForm = ({ categoryId, addMovie }) => {
  const onSubmit = e => {
    e.preventDefault();
    //
    addMovie({
      categoryId,
      name: e.target[0].value.toUpperCase(),
      description: e.target[1].value,
      rate: e.target[2].value
    });
    //
    e.target[0].value = e.target[1].value = "";
    e.target[2].value = undefined;
  };
  return (
    <div style={{ padding: "1rem" }}>
      <FormTemplate submitButton="add movie" onSubmit={onSubmit} range />
    </div>
  );
};

export default connect(
  null,
  { addMovie }
)(MovieForm);
