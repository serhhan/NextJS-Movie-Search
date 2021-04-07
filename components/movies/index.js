import Link from "next/link";

const Movies = ({ data }) => {
  return (
    <ul>
      {data.Search.map((movie, i) => (
        <li key={i}>
          <img src={movie.Poster}></img>
          <span>{movie.imdbRating}</span>
          <span>{movie.Year}</span>
          <h2>{movie.Title}</h2>
          <p>{movie.Plot}</p>
          <button>Add to favorites</button>
        </li>
      ))}
    </ul>
  );
};

export default Movies;
//poster, imdbRating, Title, Year, Plot//
