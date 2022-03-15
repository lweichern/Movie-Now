import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Title } from "./Carousel.styled";

// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Lazy, Pagination, Navigation } from "swiper";

import api_details from "../../../API_Details";

import { Container } from "../../../commonStyles/Container.styled";

export default function Carousel({ movieList }) {
  return (
    <>
      <Container>
        <Title>Featured Today</Title>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": `${({ theme }) =>
              theme.colors.content1}`,
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
          modules={[Lazy, Pagination, Navigation]}
          className="mySwiper"
        >
          {movieList.map((movie) => {
            return (
              <SwiperSlide style={{ width: "33%" }}>
                <img
                  data-src={`${api_details.IMAGE_BASE_URL}${api_details.BACKDROP_SIZE}${movie.backdrop_path}`}
                  className="swiper-lazy"
                  style={{ width: "100%" }}
                />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </>
  );
}
