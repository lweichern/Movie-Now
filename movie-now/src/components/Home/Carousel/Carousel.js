import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Title,
  SwiperImage,
  SwiperMovieTitleContainer,
  SwiperMovieTitle,
  SwiperSlideContainer,
} from "./Carousel.styled";
import { useTheme } from "styled-components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Lazy, Pagination, Navigation, Autoplay } from "swiper";

import api_details from "../../../API_Details";

import { Container } from "../../../commonStyles/Container.styled";
import { Link } from "react-router-dom";

export default function Carousel({ movieList, carouselTitle, autoplay }) {
  const [stopCarousel, setStopCarousel] = useState(false);
  const swiperRef = useRef(null);

  // Use theme from App.js
  const theme = useTheme();

  // Stop and start carousel when mouse hover
  useEffect(() => {
    if (autoplay) {
      if (stopCarousel) {
        swiperRef.current.swiper.autoplay.stop();
      } else {
        swiperRef.current.swiper.autoplay.start();
      }
    }
  }, [stopCarousel]);

  // Framer motion variants
  const imageVariants = {
    rest: {
      opacity: 1,
    },
    hover: {
      opacity: 0.3,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    rest: {
      opacity: 0,
      y: "-30%",
      x: "-50%",
    },
    hover: {
      opacity: 1,
      y: "-50%",
      x: "-50%",
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <Title>{carouselTitle}</Title>
      <Swiper
        style={{
          "--swiper-navigation-color": theme.colors.content1,
          "--swiper-pagination-color": theme.colors.content1,
        }}
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        lazy={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={
          autoplay
            ? [Lazy, Pagination, Navigation, Autoplay]
            : [Lazy, Pagination, Navigation]
        }
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
        ref={swiperRef}
      >
        {movieList.map((movie) => {
          return (
            <SwiperSlide
              style={{ width: "33%" }}
              key={movie.id}
              onMouseOver={() => setStopCarousel(true)}
              onMouseOut={() => setStopCarousel(false)}
            >
              <Link to={`/movies/movie-details/${movie.id}`}>
                <SwiperSlideContainer
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <SwiperImage
                    data-src={`${api_details.IMAGE_BASE_URL}${api_details.BACKDROP_SIZE}${movie.backdrop_path}`}
                    className="swiper-lazy"
                    style={{ width: "100%", overflow: "visible" }}
                    variants={imageVariants}
                  />
                  <SwiperMovieTitleContainer variants={textVariants}>
                    {console.log(movie)}
                    <SwiperMovieTitle>
                      {movie.title !== undefined ? movie.title : movie.name}
                    </SwiperMovieTitle>
                  </SwiperMovieTitleContainer>
                  <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </SwiperSlideContainer>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
