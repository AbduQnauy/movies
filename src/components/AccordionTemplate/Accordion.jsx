import React from "react";
import AccordionSection from "./AccordionSection";

const Accordion = ({
  children,
  allowMultipleOpen,
  innerBox,
  outerBox,
  parentFont,
  controls,
  onEdit,
  onDelete
}) => {
  const [openSections, setOpenSections] = React.useState({});
  const opens = {};
  if (children.length > 1) {
    children.forEach(child => {
      if (child.props.isOpen) {
        opens[child.props.label] = true;
      }
    });
  }
  const onClick = label => {
    const isOpen = !!openSections[label];
    if (allowMultipleOpen) {
      setOpenSections({
        ...openSections,
        [label]: !isOpen
      });
    } else {
      setOpenSections({
        [label]: !isOpen
      });
    }
  };
  return (
    <div>
      {children.map((child, index) => (
        <AccordionSection
          isOpen={!!openSections[child.props.label]}
          label={child.props.label}
          onClick={onClick}
          innerBox={innerBox}
          outerBox={outerBox}
          parentFont={parentFont}
          controls={controls}
          onDelete={onDelete}
          onEdit={onEdit}
          key={index}
        >
          {child.props.children}
        </AccordionSection>
      ))}
    </div>
  );
};

export default Accordion;
