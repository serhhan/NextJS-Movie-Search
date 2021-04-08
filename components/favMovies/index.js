const FavMovies = ({ state }) => {
  return (
    <ul>
      {state.favorites.map((movie, index) => (
        <div>
          <li key={index}>
            <img src={movie.Poster}></img>
            <span>{movie.imdbRating}</span>
            <span>{movie.Year}</span>
            <h2>{movie.Title}</h2>
            <p>{movie.Plot}</p>
            <button onClick={() => state.removeFavorite(movie)}>
              Remove from Favorites
            </button>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default FavMovies;
//poster, imdbRating, Title, Year, Plot//
