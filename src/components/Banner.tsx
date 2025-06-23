import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import styled from "styled-components";

SwiperCore.use([Autoplay, Pagination]);

export function Banner() {
  return (
    <Container>
      <StyledSwiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        loop={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <SlideContent>slide1</SlideContent>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent>slide2</SlideContent>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent>slide3</SlideContent>
        </SwiperSlide>
      </StyledSwiper>
    </Container>
  );
}

const Container = styled.div`
  height: 200px;
  background-color: #c2c2d3;
  border-radius: 10px;
`;

const StyledSwiper = styled(Swiper)`
  height: 100%;

  .swiper-pagination {
    position: absolute;
    bottom: 10px;
    width: 100%;
    text-align: center;
    z-index: 10;
  }

  .swiper-pagination-bullet {
    background: #fff;
    opacity: 0.7;
  }

  .swiper-pagination-bullet-active {
    background: #000;
    opacity: 1;
  }
`;

const SlideContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;
