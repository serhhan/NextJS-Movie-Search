import { useAppContext } from "../../context/state";
import FavMovies from "../../components/favMovies";

const Favorites = () => {
  const state = useAppContext();
  return <FavMovies state={state} />;
};
export default Favorites;
