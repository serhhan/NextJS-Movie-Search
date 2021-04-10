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
      <div className="resultContainer">
        <div className="searcBar">
          <SearchBar />
        </div>
        <div className="searchResultContainer">
          <h1>
            Search result <span>{state.lastSearch}</span>
          </h1>
        </div>
        <Movies state={state} />
      </div>
    </>
  );
};

export default Result;
