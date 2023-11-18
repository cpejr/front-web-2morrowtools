import { Container } from "./Styles";
import { useState } from "react";
import CustomModal from "../../components/Modal/modal";
import { Button } from "antd";
import CustomForm from "../../components/Form/Form";

export default function Favorites() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSubmit = (values) => {};

  return (
    <Container>
      <Button onClick={handleOpenModal}>Abrir Modal</Button>
      <CustomModal visible={modalVisible} onClose={handleCloseModal} />
      <CustomForm onSubmit={handleSubmit}></CustomForm>
    </Container>
  );
}
