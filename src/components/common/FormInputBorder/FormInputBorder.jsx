import PropTypes from "prop-types";
import { Container, Label, IconContainer, StyledInput, ErrorMessage } from "./Styles";

export default function FormInput({
  name,
  label,
  placeholder,
  errors,
  register,
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
        <StyledInput
          id={name}
          {...register(name)}
          placeholder={placeholder}
          defaultValue={defaultValue}
          {...props}
          error={!!errorMessage}
        />
      </IconContainer>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  icon: PropTypes.elementType,
  errors: PropTypes.object.isRequired,
  defaultValue: PropTypes.string,
};
