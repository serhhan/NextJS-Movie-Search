import React from "react";
import Head from "next/head";

import Movies from "../components/movies";
import SearchBar from "../components/searchbar";
import { useAppContext } from "../context/state";

export default function Home(props) {
  const state = useAppContext();

  return (
    <div className="container">
      slider
      <SearchBar />
      <p>{JSON.stringify(state.movies)}</p>
      {/* <Movies data={props.movies} /> */}
      <button onClick={() => state.addMovie()}>Ekle</button>
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
