import React from "react";

const SearchBar = () => {
  const [search, setSearch] = React.useState("");
  const [movies, setMovies] = React.useState([]);

  const getData = async () => {
    if (!search) return;

    const res = await fetch(
      `https://www.omdbapi.com/?s=${search}&apikey=9034d9ea`
    );

    const data = await res.json();

    if (data.Response !== "False") {
      setMovies(data.Search);
      // redirect to result page with data.Search
    }
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
      </div>
      <ul>
        {movies.map((movie, i) => (
          <li key={i}>
            <h6>{movie.Title}</h6>
          </li>
        ))}
      </ul>
      {!movies.length < 1 && <span>{movies.length} tane sonuç getirildi.</span>}
    </div>
  );
};

export default SearchBar;
