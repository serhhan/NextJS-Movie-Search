import { useAppContext } from "../../context/state";
import FavMovies from "../../components/favMovies";
import Bar from "../../components/bar/bar";
const pageName = "Favorites";

const Favorites = () => {
  const state = useAppContext();
  return (
    <>
      <Bar pageName={pageName} />
      <FavMovies state={state} />;
    </>
  );
};
export default Favorites;
