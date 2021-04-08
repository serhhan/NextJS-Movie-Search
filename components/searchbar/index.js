import React from "react";
import { useAppContext } from "../../context/state";
import Link from "next/link";

const SearchBar = () => {
  const state = useAppContext();
  const [search, setSearch] = React.useState("");

  const getData = async () => {
    if (!search) return;

    //S parametresi(search) kullanıldığında imdbpuanı vs gelmiyor.
    const res = await fetch(
      `https://www.omdbapi.com/?s=${search}&apikey=9034d9ea`
    );

    const data = await res.json();

    if (data.Response !== "False") {
      state.addMovie(data.Search);
      // redirect to result page with data.Search
    }
    state.addMovie(data.Search);
  };

  React.useEffect(() => {
    getData();
  }, [search]);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <input type="number" placeholder="Year"></input>
        <select>
          <option disabled selected hidden>
            Type
          </option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>
        <input
          type="text"
          placeholder="Enter movie name here"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link href="/result">
          <button>Search</button>
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
