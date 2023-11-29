// requires a loader
import { Content, StyledCarousel } from "./Styles";

export default function Carousel() {
  return (
    <StyledCarousel
      autoPlay
      infiniteLoop
      interval={7000}
      showStatus={false}
      centerMode
      centerSlidePercentage={30}
    >
      <div>
        <Content>teste1</Content>
      </div>
      <div>
        <Content>teste2</Content>
      </div>
      <div>
        <Content>teste3</Content>
      </div>
      <div>
        <Content>teste4</Content>
      </div>
    </StyledCarousel>
  );
}
