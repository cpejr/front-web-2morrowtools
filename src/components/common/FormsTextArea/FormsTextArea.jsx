import PropTypes from "prop-types";

import { Container, Label, StyledTextArea, ErrorMessage } from "./Styles";

export default function FormsTextArea({ name, label, placeholder, errors, ...props }) {
  const errorMessage = errors?.[name]?.message;
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <StyledTextArea id={name} error={!!errorMessage} placeholder={placeholder} {...props} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
}

FormsTextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
};
