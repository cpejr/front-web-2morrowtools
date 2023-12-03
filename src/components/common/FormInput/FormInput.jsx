import PropTypes from "prop-types";
import { Container, Label, IconContainer, StyledInput, ErrorMessage } from "./Styles";

export default function FormInput({ name, label, placeholder, errors, icon: Icon, ...props }) {
  const errorMessage = errors?.[name]?.message;

  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <IconContainer>
        {Icon && <Icon />}
        <StyledInput id={name} placeholder={placeholder} {...props} />
      </IconContainer>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  errors: PropTypes.object.isRequired,
};
