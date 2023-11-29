import { Container } from "./Styles";

import CustomForm from "../../components/Form/Form";
import CustomCarousel from "../../components/Carousel/Carousel";

function Favorites() {
  return (
    <Container>
      <CustomCarousel />
      <CustomForm />
    </Container>
  );
}

export default Favorites;
