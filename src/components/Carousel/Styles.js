import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Content = styled.div`
  color: white;
  background: #364d79;
  text-align: center;
  border-radius: 5px;
  font-size: 18px;
  height: 20rem;
  margin: 2rem;
  width: 16rem;
`;

export const StyledCarouselDiv = styled.div`
  height: 300px;
  width: 70%;
  line-height: 160px;
  margin-top: 100px;
`;

export const StyledCarousel = styled(Carousel)`
  width: 70vw;
  .control-dots {
    display: none;
  }
`;
