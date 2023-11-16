import PropTypes from "prop-types";

import { Container, Label, Input } from "./Styles";

export default function FormInput({ name, label, placeholder }) {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} placeholder={placeholder} />
    </Container>
  );
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
