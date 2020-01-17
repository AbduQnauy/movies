import React from "react";
import FormTemplate from "../FormTemplate/Form.Component";

const CategoryForm = () => {
  const onSubmit = e => {
    e.preventDefault();
    console.log(e.target[0].value, e.target[1].value);
  };
  return (
    <div style={{ backgroundColor: "#fff", padding: "1rem" }}>
      <h3 style={{ marginTop: 0, fontWeight: "normal" }}>Add Category</h3>
      <FormTemplate
        submitType="submit"
        submitButton="create category"
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default CategoryForm;
