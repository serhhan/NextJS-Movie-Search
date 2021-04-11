import style from "./movies.module.scss";
import { useState } from "react";

const Movies = ({
  state: { movies, addFavorite, removeFavorite },
  favorites,
}) => {
  function isFavorite(id) {
    return favorites && favorites.includes(id);
  }

  return (
    <ul className={style.container}>
      {console.log("movies", movies)}
      {movies.map((movie, i) => (
        <li className={style.cardContainer} key={i}>
          {console.log(movie)}
          <img className={style.poster} src={movie.Poster}></img>
          <div className={style.typeNfav}>
            <div className={style.type}>Biography</div>
            {!isFavorite(movie) ? (
              <button
                className={style.addFav}
                onClick={() => addFavorite(movie)}
              >
                <img src="./image/like.png" width="10px" />
              </button>
            ) : (
              <button
                className={style.removeFav}
                onClick={() => removeFavorite(movie)}
              >
                <img src="./image/like.png" width="10px" />
              </button>
            )}
          </div>
          <div className={style.imdbNrate}>
            <img
              className={style.imdb}
              src="./image/imdb.png"
              alt="imdb logo"
            />
            <span className={style.rate}>8.8</span>
          </div>
          <span className={style.year}>{movie.Year}</span>
          <h2 className={style.title}>{movie.Title}</h2>
          <p className={style.plot}>
            Lorem ipsum dolor sit amet, consectetur matinas adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolare.
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Movies;
