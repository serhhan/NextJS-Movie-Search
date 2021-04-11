import React, { useState, useEffect } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./card";

const CardSlider = () => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  const [popularMovies, setPopularMovies] = useState([]);

  const getData = async () => {
    const res = await fetch(
      `https://www.omdbapi.com/?s=the%20godfather&apikey=9034d9ea`
    );

    const movie = await res.json();

    if (movie.Response !== "False") {
      setPopularMovies(movie.Search);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      centeredSlides={false}
      loop={false}
    >
      {popularMovies.slice(0, 3).map((movie) => (
        <SwiperSlide>
          <Card movie={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSlider;
