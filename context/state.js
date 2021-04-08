import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  let sharedState = {
    movies,
    addMovie,
    favorites,
    addFavorite,
  };

  function addMovie(item) {
    setMovies([item]);
  }

  function addFavorite(item) {
    setFavorites([...favorites, item]);
  }

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
