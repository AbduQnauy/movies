import { categories } from "./initialData";
import { CREATE_CATEGORY, ADD_MOVIE, REMOVE_MOVIE, EDIT_MOVIE } from "../types";

export default (state = categories, action) => {
  switch (action.type) {
    //
    case CREATE_CATEGORY:
      if (
        !state.some(cat => {
          return (
            cat["name"].toLowerCase() === action.payload.name.toLowerCase()
          );
        })
      ) {
        const lastId = state[state.length - 1].id + 1;
        return [
          ...state,
          {
            id: lastId,
            name:
              action.payload["name"].charAt(0).toUpperCase() +
              action.payload["name"].slice(1),
            description: action.payload["description"],
            movies: []
          }
        ];
      } else return state;
    //
    case ADD_MOVIE: {
      const { categoryId, name, description, rate } = action.payload;
      let categoryOfMovie = state.filter(cat => {
        return cat.id === categoryId;
      });

      const moviesArray = categoryOfMovie[0].movies;
      let lastObjectOfMovies;
      let lastMovieId;
      if (moviesArray.length) {
        lastObjectOfMovies = moviesArray[moviesArray.length - 1];
        lastMovieId = lastObjectOfMovies.id + 1;
      } else {
        lastMovieId = 0;
      }
      const myMovie = {
        id: lastMovieId,
        name,
        description,
        rate: rate.toString()
      };
      categoryOfMovie[0].movies = [...categoryOfMovie[0].movies, myMovie];

      return [
        ...state.filter(cat => {
          return cat.id !== categoryId;
        }),
        categoryOfMovie[0]
      ];
    }
    //
    case REMOVE_MOVIE:
      let categoryOfDeletedMovie = state.filter(cat => {
        return cat.id === action.payload.categoryId;
      });
      categoryOfDeletedMovie = categoryOfDeletedMovie[0];
      let wantedMoviesOnly = categoryOfDeletedMovie.movies.filter(movie => {
        return movie.id !== action.payload.movieId;
      });
      categoryOfDeletedMovie.movies = wantedMoviesOnly;
      return [
        ...state.filter(cat => cat.id !== action.payload.categoryId),
        categoryOfDeletedMovie
      ];
    //
    case EDIT_MOVIE:
      // const updated =
      return state.map(cat => {
        // if this is category of updated movie
        if (cat.id === action.payload.categoryId) {
          const newMovies = cat.movies.map(movie => {
            // if this is movie to be update
            if (movie.id === action.payload.movieId) {
              // then update here
              return {
                id: movie.id,
                name: action.payload.name.toUpperCase(),
                description: action.payload.description,
                rate: action.payload.rate.toString()
              };
            } else {
              // return other movies
              return movie;
            }
          });
          return {
            id: cat.id,
            name: cat.name,
            description: cat.description,
            movies: newMovies
          };
        } else {
          // return other categories
          return cat;
        }
      });

    default:
      return state;
  }
};
