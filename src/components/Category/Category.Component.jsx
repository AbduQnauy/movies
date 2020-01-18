import React from "react";
import { connect } from "react-redux";
import Accordion from "../AccordionTemplate/Accordion";
import Movie from "../Movie/Movie.Component";
import MovieForm from "../MovieForm/MovieForm.Component";

import "./Category.styles.css";

const AccordionCompoenent = ({ categories }) => {
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
        {categories.map((categoty, index) => {
          const { id, name, movies } = categoty;
          return (
            <div label={name} key={index}>
              {/* ************************* */}
              <MovieForm categoryId={id} />
              {movies.length ? <Movie movies={movies} categoryId={id} /> : null}
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
