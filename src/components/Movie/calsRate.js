import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalf, faStar } from "@fortawesome/free-solid-svg-icons";
//
export const calcRate = x => {
  let integer = parseInt(x);
  let fraction = parseFloat(x) - integer;

  let stars = [];
  for (let i = 0; i < integer; i++) {
    stars.push(
      <FontAwesomeIcon
        icon={faStar}
        key={i}
        style={{
          color: "#bb4d00",
          marginLeft: ".1em"
        }}
      />
    );
  }

  if (fraction >= 0.5) {
    stars.push(
      <FontAwesomeIcon
        icon={faStarHalf}
        key="0.5"
        style={{
          color: "#bb4d009",
          marginLeft: ".1em"
        }}
      />
    );
  }
  return stars;
};
