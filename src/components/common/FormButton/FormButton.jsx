import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { ButtonContainer, Container, ErrorMessage, Label, StyledButton } from "./Styles"; // Supondo que você tenha um estilo para o botão

export default function FormButton({
  data,
  name,
  control,
  onChange,
  defaultValue,
  errors,
  ...props
}) {
  const errorMessage = errors?.[name]?.message;

  return (
    <Container error={errorMessage ? 1 : 0}>
      <Label htmlFor={name}></Label>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field: { onChange: onControllerChange, value: currValue } }) => (
          <ButtonContainer>
            {data.map(({ label, value }) => (
              <StyledButton
                key={value}
                onClick={() => {
                  onControllerChange(value);
                  if (onChange) {
                    onChange(value);
                  }
                }}
                active={currValue === value}
                {...props}
              >
                {label}
              </StyledButton>
            ))}
          </ButtonContainer>
        )}
      />
      <ErrorMessage error={errorMessage ? 1 : 0}>{errorMessage}</ErrorMessage>
    </Container>
  );
}

FormButton.defaultProps = {
  data: [],
};
FormButton.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.array,
  onChange: PropTypes.func,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  defaultValue: PropTypes.any,
};
