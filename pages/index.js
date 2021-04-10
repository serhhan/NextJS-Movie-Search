import React from "react";
import Head from "next/head";

import SearchBar from "../components/searchbar";
import CardSlider from "../components/cardSlider";

export default function Home(props) {
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
          <h2 className="indexThread">Popular Movies</h2>{" "}
          <a href="#">View More ➝</a>
        </div>
        <div className="cardContainer">
          <CardSlider />
        </div>
      </div>
    </div>
  );
}
