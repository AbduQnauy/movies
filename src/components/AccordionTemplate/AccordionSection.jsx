import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./AccordionSection.styles.css";
import ButtonTemplate from "../Button/ButtonTemplate";

const AccordionSection = ({
  onClick,
  categoryName,
  isOpen,
  children,
  innerBox,
  outerBox,
  parentFont,
  controls
}) => {
  return (
    <div className="accordion-section" style={parentFont}>
      <div
        onClick={() => onClick(categoryName)}
        className="accordion-section-outer-box"
        style={outerBox}
      >
        <div className={`accordion__icon`}>
          {!isOpen && <FontAwesomeIcon icon={faBars} />}
          {isOpen && <FontAwesomeIcon icon={faTimes} />}
        </div>
        <div>{categoryName}</div>

        {controls ? (
          <div className="accordion__controls">
            <ButtonTemplate
              submitButton="edit"
              color="#FFA500"
              onClick={() => console.log("Edit is clicked")}
            />
            <ButtonTemplate
              submitButton="delete"
              color="red"
              onClick={() => console.log("Delete is clicked")}
            />
          </div>
        ) : null}
      </div>
      {isOpen && (
        <div className="accordion-section-inner-box" style={innerBox}>
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionSection;
