import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import moviesCategories from "./redux/movies/reducer";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  movies: moviesCategories
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: []
  // whitelist: []
};

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedRootReducer);
export const persistor = persistStore(store);
