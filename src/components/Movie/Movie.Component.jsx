import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import Accordion from "../AccordionTemplate/Accordion";
import { removeMovie, editMovie } from "../../redux/movies/actions";
import { calcRate } from "./calsRate";

const Movie = ({ movies, categoryId, removeMovie, editMovie }) => {
  return (
    <Accordion
      allowMultipleOpen
      parentFont={{ fontSize: ".8rem" }}
      outerBox={{
        backgroundColor: "#d6efff",
        border: "1px solid #657ed4"
      }}
      innerBox={{ background: "#e6e6e6" }}
      controls
    >
      {movies.map((movie, index) => {
        const { id, description, rate, name } = movie;

        return (
          <div
            label={name}
            description={description}
            rate={rate}
            key={index}
            onEdit={x => {
              editMovie({ categoryId: categoryId, movieId: id, ...x });
            }}
            onDelete={() =>
              removeMovie({ categoryId: categoryId, movieId: id })
            }
          >
            {
              <div className="movie-details">
                <div>
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    style={{ color: "#aaa", marginRight: ".1em" }}
                  />
                  <span className="movie-description">{description}</span>
                  <FontAwesomeIcon
                    icon={faQuoteRight}
                    style={{ color: "#aaa", marginLeft: ".1em" }}
                  />
                </div>
                <div className="movie-rate">
                  <span>
                    {(x => {
                      return parseFloat(x);
                    })(rate)}
                  </span>
                  {calcRate(rate)}
                </div>
              </div>
            }
          </div>
        );
      })}
    </Accordion>
  );
};
export default connect(
  null,
  { removeMovie, editMovie }
)(Movie);
