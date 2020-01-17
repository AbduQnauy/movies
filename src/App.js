import React from "react";
import CategoryForm from "./components/categoryForm/CategoryForm.Component";
import AccordionCompoenent from "./components/Accordion/Accordion.Component";

function App() {
  return (
    <div className="main__app" style={{ padding: "0 1rem" }}>
      <CategoryForm />
      <AccordionCompoenent />
    </div>
  );
}

export default App;
