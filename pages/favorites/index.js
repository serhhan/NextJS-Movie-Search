import { useAppContext } from "../../context/state";
import FavMovies from "../../components/favMovies";
import Bar from "../../components/bar/bar";
const pageName = "Favorites";

const Favorites = () => {
  const state = useAppContext();
  return (
    <>
      <Bar pageName={pageName} />
      <div className="favoritesContainer">
        <FavMovies state={state} />
      </div>
    </>
  );
};
export default Favorites;
