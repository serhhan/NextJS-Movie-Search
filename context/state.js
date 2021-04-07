import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [movies, setMovies] = useState([]);
  let sharedState = {
    movies,
    addMovie,
  };

  function addMovie() {
    setMovies([...movies, "test"]);
  }

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
