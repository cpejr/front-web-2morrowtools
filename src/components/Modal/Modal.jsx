import { useState } from "react";
import { Modal, Button } from "antd";
import { StyledModalContent } from "./Styles";

const CustomModal = ({ visible, onClose }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setConfirmLoading(false);
      onClose();
    }, 2000);
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal
      visible={visible}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      footer={[
        <Button key='back' onClick={handleCancel}>
          Cancelar
        </Button>,
        <Button key='submit' type='primary' loading={confirmLoading} onClick={handleOk}>
          Confirmar
        </Button>,
      ]}
    >
      <StyledModalContent>Conteúdo do Modal ...</StyledModalContent>
    </Modal>
  );
};

export default CustomModal;
