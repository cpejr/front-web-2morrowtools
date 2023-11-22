import React from "react";
import { Carousel } from "antd";
import { StyledCarouselContent, StyledCarouselDiv } from "./Styles";


const CustomCarousel = () => {
    
  return (
    <StyledCarouselDiv>
    <Carousel > 
        <div>
            <StyledCarouselContent>
                teste1
            </StyledCarouselContent>
        </div>
        <div>
            <StyledCarouselContent>
                teste2
            </StyledCarouselContent>
        </div>
        <div>
            <StyledCarouselContent>
                teste3
            </StyledCarouselContent>
        </div>
        <div>
            <StyledCarouselContent>
                teste4
            </StyledCarouselContent>
        </div>
    </Carousel>
    </StyledCarouselDiv>
  );
};
export default CustomCarousel;