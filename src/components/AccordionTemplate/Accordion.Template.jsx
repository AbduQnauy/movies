import React from "react";
import Accordion from "./Accordion";

const AccordionTemplate = ({ innerBox, outerBox, parentFont }) => {
  const myData = ["alligator Mississippiensis", "alligator"];
  return (
    <Accordion
      allowMultipleOpen
      innerBox={innerBox}
      outerBox={outerBox}
      parentFont={parentFont}
    >
      {myData.map((datum, index) => {
        return (
          <div categoryName={datum} key={index}>
            <span>
              <strong>Common Name:</strong> American Alligator
            </span>
            <br />
            <span>
              <strong>Distribution:</strong> Texas to North Carolina, US
            </span>
            <br />
            <span>
              <strong>Endangered Status:</strong> Currently Not Endangered
            </span>
          </div>
        );
      })}
      {/* <div categoryName="xxxxxxxxxxxxxxxxxxxxxx">
        <span>
          <strong>Common Name:</strong> American Alligator
        </span>
        <br />
        <span>
          <strong>Distribution:</strong> Texas to North Carolina, US
        </span>
        <br />
        <span>
          <strong>Endangered Status:</strong> Currently Not Endangered
        </span>
      </div> */}

      {/*  */}
      {/* <div categoryName="alligator Mississippiensis">
        <span>
          <strong>Common Name:</strong> American Alligator
        </span>
        <br />
        <span>
          <strong>Distribution:</strong> Texas to North Carolina, US
        </span>
        <br />
        <span>
          <strong>Endangered Status:</strong> Currently Not Endangered
        </span>
      </div> */}
      {/*  */}

      {/* <div categoryName="alligator Sinensis">
        <span>
          <strong>Common Name:</strong> American Alligator
        </span>
        <br />
        <span>
          <strong>Distribution:</strong> Texas to North Carolina, US
        </span>
        <br />
        <span>
          <strong>Endangered Status:</strong> Currently Not Endangered
        </span>
      </div> */}
    </Accordion>
  );
};

export default AccordionTemplate;
