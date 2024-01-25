import PropTypes from "prop-types";

import { Container } from "./Styles";
import { PlusCircleOutlined, PlusCircleFilled } from "@ant-design/icons";

export default function FormSwitch({ switchValue, setSwitchValue }) {
  return (
    <Container onClick={() => setSwitchValue(!switchValue)}>
      {switchValue ? <PlusCircleFilled /> : <PlusCircleOutlined />}
      <p>Adicionar links e redes sociais</p>
    </Container>
  );
}

FormSwitch.propTypes = {
  switchValue: PropTypes.bool,
  setSwitchValue: PropTypes.func,
};
