import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import styled from "styled-components";

SwiperCore.use([Autoplay]);

export function Banner() {
  return (
    <Container>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        loop={true}
      >
        <SwiperSlide>
          <div>slide1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>slide2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>slide3</div>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

const Container = styled.div`
  height: 200px;
  background-color: #c2c2d3;
  border-radius: 10px;
`;
