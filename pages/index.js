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
