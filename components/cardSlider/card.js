import style from "./card.module.scss";
import { useAppContext } from "../../context/state";

const Card = ({ movie }) => {
  const state = useAppContext();

  function isFavorite(id) {
    return state.favorites && state.favorites.includes(id);
  }

  return (
    <div className={style.container}>
      <div className={style.mainContainer}>
        <img src={movie.Poster} className={style.poster} alt="Movie" />
        <div className={style.rightContainer}>
          <div className={style.topContainer}>
            <img src="./image/imdb.png" width={40} height={20} />

            <div className={style.rate}>8.8</div>
            <div className={style.genre}>Action</div>
            <div className={style.genre}>Biography</div>
          </div>
          <div className={style.midContainer}>
            <h5>{movie.Year}</h5>
            <h3>{movie.Title}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur matinas adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolare.
            </p>
          </div>
          <div className={style.botContainer}>
            {!isFavorite(movie) ? (
              <button
                className={style.addFav}
                onClick={() => state.addFavorite(movie)}
              >
                {" "}
                ♥ Add to Favorite
              </button>
            ) : (
              <button
                className={style.removeFav}
                onClick={() => state.removeFavorite(movie)}
              >
                Added to favorites
              </button>
            )}
            <a href="#">View Details</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
