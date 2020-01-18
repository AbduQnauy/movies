import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faQuoteRight,
  faStarHalf,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import Accordion from "../AccordionTemplate/Accordion";
// import
import "./Accordion.styles.css";

const AccordionCompoenent = ({ categories }) => {
  //
  console.log(categories);
  //
  return (
    <div className="accordion-component">
      <h2 className="accordion-component__title">movies data</h2>
      <Accordion
        allowMultipleOpen
        parentFont={{ fontSize: "1rem" }}
        outerBox={{
          backgroundColor: "rgb(104, 232, 197, 0.5)",
          border: "1px solid #008f68"
        }}
        innerBox={{ background: "#fff" }}
      >
        {categories.map((movie, index) => {
          const { id, name, description, movies } = movie;
          return (
            <div categoryName={movie.name} key={index}>
              {/* ************************* */}
              {/* form */}
              {movies.length ? (
                <Accordion
                  allowMultipleOpen
                  parentFont={{ fontSize: ".8rem" }}
                  outerBox={{
                    backgroundColor: "#d6efff",
                    border: "1px solid #657ed4"
                  }}
                  innerBox={{ background: "#e6e6e6" }}
                  controls
                  onEdit={() => console.log("Edit from Accordion component")}
                  onDelete={() =>
                    console.log("Delete from Accordion component")
                  }
                >
                  {movies.map((movie, index) => {
                    const { description, rate } = movie;
                    return (
                      <div categoryName={movie.name} key={index}>
                        <div className="movie-details">
                          <div>
                            <FontAwesomeIcon
                              icon={faQuoteLeft}
                              style={{ color: "#aaa", marginRight: ".1em" }}
                            />
                            <span className="movie-description">
                              {description}
                            </span>
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

                            {(x => {
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
                            })(rate)}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Accordion>
              ) : null}
              {/* ******************************* */}
            </div>
          );
        })}
      </Accordion>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    categories: state.movies
  };
};
export default connect(mapStateToProps)(AccordionCompoenent);
