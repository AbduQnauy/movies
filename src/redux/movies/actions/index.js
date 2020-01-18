import { CREATE_CATEGORY, ADD_MOVIE, REMOVE_MOVIE, EDIT_MOVIE } from "../types";

// payload = {name: '', description: ''}
export const createCategory = category => ({
  type: CREATE_CATEGORY,
  payload: category
});

// payload = {categoryId, name, description, rate}
export const addMovie = object => ({
  type: ADD_MOVIE,
  payload: object
});

// payload = {categoryId: categoryId, movieId: movieId}
export const removeMovie = object => ({
  type: REMOVE_MOVIE,
  payload: object
});

// payload = {categoryId: categoryId, movieId: movieId}
export const editMovie = object => ({
  type: EDIT_MOVIE,
  payload: object
});
