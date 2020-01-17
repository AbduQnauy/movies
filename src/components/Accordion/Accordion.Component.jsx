import React from "react";
import AccordionTemplate from "../AccordionTemplate/Accordion.Template";
import "./Accordion.styles.css";

const AccordionCompoenent = () => {
  return (
    <div className="accordion-component">
      <h2 className="accordion-component__title">movies data</h2>
      <AccordionTemplate
        parentFont={{ fontSize: "1rem" }}
        outerBox={{
          backgroundColor: "rgb(104, 232, 197, 0.5)",
          border: "1px solid #008f68"
        }}
        innerBox={{ background: "#e6e6e6" }}
      />
    </div>
  );
};
export default AccordionCompoenent;
