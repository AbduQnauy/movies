import React from "react";
import AccordionSection from "./AccordionSection";

const Accordion = ({
  children,
  allowMultipleOpen,
  innerBox,
  outerBox,
  parentFont,
  controls
}) => {
  const [openSections, setOpenSections] = React.useState({});
  const opens = {};
  if (children.length > 1) {
    children.forEach(child => {
      if (child.props.isOpen) {
        opens[child.props.categoryName] = true;
      }
    });
  }
  const onClick = categoryName => {
    const isOpen = !!openSections[categoryName];
    if (allowMultipleOpen) {
      setOpenSections({
        ...openSections,
        [categoryName]: !isOpen
      });
    } else {
      setOpenSections({
        [categoryName]: !isOpen
      });
    }
  };
  return (
    <div>
      {children.map((child, index) => (
        <AccordionSection
          isOpen={!!openSections[child.props.categoryName]}
          categoryName={child.props.categoryName}
          onClick={onClick}
          innerBox={innerBox}
          outerBox={outerBox}
          parentFont={parentFont}
          controls={controls}
          key={index}
        >
          {child.props.children}
        </AccordionSection>
      ))}
    </div>
  );
};

export default Accordion;
