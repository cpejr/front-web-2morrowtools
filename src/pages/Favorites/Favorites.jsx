import { Container } from "./Styles";
import { useState } from "react";
import CustomModal from "../../components/Modal/modal";
import { Button } from "antd";
import CustomForm from "../../components/Form/Form";
import CustomCarousel from "../../components/Carousel/Carousel";

function Favorites() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <Container>
      <Button onClick={handleOpenModal}>Abrir Modal</Button>
      <CustomCarousel />
      <CustomModal visible={modalVisible} onClose={handleCloseModal} />
      <CustomForm />
    </Container>
  );
}

export default Favorites;