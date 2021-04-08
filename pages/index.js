import React from "react";
import Head from "next/head";

import Movies from "../components/movies";
import SearchBar from "../components/searchbar";
import { useAppContext } from "../context/state";

export default function Home(props) {
  const state = useAppContext();

  return (
    <div className="container">
      <Head>
        <title>Movie UP</title>
      </Head>
      <div className="sliderContainer">
        <div className="slider">
          <img
            src="/image/slider.png"
            alt="Picture of people that watches film while eating popcorn"
          />
        </div>
      </div>
      <div className="altContainer">
        <SearchBar />
        <div className="info">
          <h2>Popular Movies</h2> <a href="#">View More ➝</a>
        </div>
      </div>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const res = await fetch("http://www.omdbapi.com/?apikey=9034d9ea&s=god");
//   const movies = await res.json();

//   return {
//     props: { movies },
//   };
// }
