import style from "./favMovies.module.scss";

const favMovies = ({ state }) => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.thread}> Favorites</h2>
      <ul className={style.container}>
        {state.favorites.map((movie, i) => (
          <li className={style.cardContainer} key={i}>
            <img className={style.poster} src={movie.Poster}></img>
            <div className={style.typeNfav}>
              <div className={style.type}>Biography</div>
              <button
                className={style.removeFav}
                onClick={() => state.removeFavorite(movie)}
              >
                <img src="./image/like.png" width="10px" />
              </button>
            </div>
            <div className={style.imdbNrate}>
              <img
                className={style.imdb}
                src="./image/imdb.png"
                alt="imdb logo"
              />
              <span className={style.rate} n>
                8.8
              </span>
            </div>
            <span className={style.year}>{movie.Year}</span>
            <h2 className={style.title}>{movie.Title}</h2>
            <p className={style.plot}>
              Lorem ipsum dolor sit amet, consectetur matinas adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolare.
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default favMovies;
