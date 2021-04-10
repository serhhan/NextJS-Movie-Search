import React, { useState, useEffect } from "react";
import { useAppContext } from "../../context/state";
import Link from "next/link";
import style from "./searchbar.module.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
  const state = useAppContext();
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("");

  const disableBtn = (value) => {
    document.getElementById("btn").disabled = value;
  };

  const getData = async () => {
    if (!search) return;

    //S parametresi(search) kullanıldığında imdbpuanı vs gelmiyor.

    const res = await fetch(
      `https://www.omdbapi.com/?s=${search}&y=${year}&apikey=9034d9ea`
    );

    const data = await res.json();

    if (data.Response !== "False") {
      state.addMovie(data.Search);
    }

    state.searchHistory(search);
  };

  useEffect(() => {
    getData();
    {
      search.length > 2 ? disableBtn(false) : disableBtn(true);
    }
  }, [search]);

  return (
    <div>
      <div className={style.container}>
        <input
          className={style.number}
          type="number"
          onChange={(e) => setYear(e.target.value)}
          placeholder="Year"
        />
        <select className={style.select}>
          <option disabled selected hidden>
            Type
          </option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>
        <input
          className={style.input}
          type="text"
          placeholder="Enter movie name here"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link href="/result">
          <button className={style.btn} id="btn" type="submit">
            <span className={style.search}>Search</span>
            <div className={style.iconCnt}>
              <FontAwesomeIcon className={style.icon} icon={faSearch} />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
