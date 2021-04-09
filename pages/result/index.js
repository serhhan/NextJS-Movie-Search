import { useAppContext } from "../../context/state";
import Movies from "../../components/movies";
import Bar from "../../components/bar/bar";
import SearchBar from "../../components/searchbar";
const Result = () => {
  const pageName = "Search results";
  const state = useAppContext();
  return (
    <>
      <Bar pageName={pageName} />
      <SearchBar />
      <Movies state={state} />
    </>
  );
};

export default Result;
