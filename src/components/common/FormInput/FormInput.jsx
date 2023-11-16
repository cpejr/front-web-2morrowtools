import PropTypes from "prop-types";
import { Container, Label, Input, IconContainer } from "./Styles";

export default function FormInput({ name, label, placeholder, icon: Icon }) {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <IconContainer>
        {Icon && <Icon />}
        <Input id={name} placeholder={placeholder} />
      </IconContainer>
    </Container>
  );
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
};
