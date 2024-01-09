import PropTypes from "prop-types";

import { Container, Label, StyledTextArea, ErrorMessage } from "./Styles";

export default function FormsTextArea({ name, label, placeholder, register, errors, ...props }) {
  const errorMessage = errors?.[name]?.message;
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <StyledTextArea
        id={name}
        error={!!errorMessage}
        {...register(name)}
        placeholder={placeholder}
        {...props}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
}

FormsTextArea.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  errors: PropTypes.object,
};
