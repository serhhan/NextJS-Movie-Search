import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  function removeFavorite(item) {
    setFavorites(favorites.filter((element) => element.imdbID !== item.imdbID));
  }

  function addMovie(item) {
    setMovies([item]);
  }

  function addFavorite(item) {
    setFavorites([...favorites, item]);
  }

  let sharedState = {
    movies,
    addMovie,
    favorites,
    addFavorite,
    removeFavorite,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
