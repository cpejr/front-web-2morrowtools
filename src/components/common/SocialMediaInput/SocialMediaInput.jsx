import PropTypes from "prop-types";
import { Select, InputContainer, Container } from "./Styles";
import { useState } from "react";
import { FormInputBorder } from "../..";
import { FaTrash } from "react-icons/fa";

export default function SocialMediaInput({ errors, register }) {
  const OPTIONS = [
    "linkedIn",
    "discord",
    "twitterX",
    "instagram",
    "tiktok",
    "facebook",
    "reddit",
    "pinterest",
    "youtube",
  ];
  const SELECT_OPTIONS = OPTIONS.map((option) => {
    return {
      value: option,
      label: option.charAt(0).toUpperCase() + option.slice(1),
    };
  });

  const [shownInputs, setShownInputs] = useState([OPTIONS[0]]);

  const handleSelectChange = (name) => {
    if (!shownInputs.includes(name)) setShownInputs([name, ...shownInputs]);
  };

  const removeInput = (name) => {
    setShownInputs(shownInputs.filter((input) => input != name));
  };

  return (
    <Container>
      <Select
        defaultValue={SELECT_OPTIONS[0]}
        onChange={handleSelectChange}
        options={SELECT_OPTIONS}
      />

      {shownInputs.map((name) => (
        <div key={name}>
          <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>

          <InputContainer>
            <FormInputBorder
              name={name}
              placeholder={`Link para o ${name}`}
              errors={errors}
              register={register}
            />
            <FaTrash color='red' cursor='pointer' onClick={() => removeInput(name)} />
          </InputContainer>
        </div>
      ))}
    </Container>
  );
}

SocialMediaInput.propTypes = {
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
};
