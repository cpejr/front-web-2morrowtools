import PropTypes from "prop-types";
import { Container, Label, IconContainer, StyledInput, ErrorMessage } from "./Styles";

export default function FormInput({
  name,
  label,
  placeholder,
  register,
  errors,
  defaultValue,
  icon: Icon,
  ...props
}) {
  const errorMessage = errors?.[name]?.message;

  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <IconContainer>
        {Icon && <Icon />}
        <StyledInput id={name} {...register(name)} defaultValue={defaultValue} placeholder={placeholder} {...props} error={!!errorMessage} />
      </IconContainer>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  errors: PropTypes.object.isRequired,
  defaultValue: PropTypes.string,
};
