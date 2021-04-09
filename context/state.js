import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [lastSearch, setLastSearch] = useState("");

  useEffect(() => {
    const favLocal = localStorage.getItem("favorites");
    setFavorites(JSON.parse(favLocal));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites)), [favorites];
  });

  function removeFavorite(item) {
    setFavorites(favorites.filter((element) => element.imdbID !== item.imdbID));
  }

  function addMovie(item) {
    setMovies([item]);
  }

  function addFavorite(item) {
    setFavorites([...favorites, item]);
  }

  function searchHistory(item) {
    setLastSearch(item);
  }

  let sharedState = {
    movies,
    addMovie,
    favorites,
    lastSearch,
    addFavorite,
    searchHistory,
    removeFavorite,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
