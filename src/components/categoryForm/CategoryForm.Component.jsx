import React from "react";
import { connect } from "react-redux";
import FormTemplate from "../FormTemplate/Form.Component";
import { createCategory } from "../../redux/movies/actions";

const CategoryForm = ({ createCategory }) => {
  const onSubmit = e => {
    e.preventDefault();
    createCategory({ name: e.target[0].value, description: e.target[1].value });
    e.target[0].value = e.target[1].value = "";
  };
  return (
    <div style={{ backgroundColor: "#fff", padding: "1rem" }}>
      <h3 style={{ marginTop: 0, fontWeight: "normal" }}>Add Category</h3>
      <FormTemplate submitButton="create category" onSubmit={onSubmit} />
    </div>
  );
};

export default connect(
  null,
  { createCategory }
)(CategoryForm);
