import PropTypes from "prop-types";
import { Container, StyledInput, Select } from "./Styles";
import { useState } from "react";
import { FormInputBorder } from "../..";

export default function SocialMediaInput({ errors, register }) {
  const [selectedSocialMedia, setSelectedSocialMedia] = useState({
    value: "linkedin",
    label: "Linkedin",
  });

  const socialMediaOptions = [
    { value: "linkedin", label: "Linkedin" },
    { value: "discord", label: "Discord" },
    { value: "twitterX", label: "Twitter" },
    { value: "instagram", label: "Instagram" },
    { value: "tiktok", label: "Tiktok" },
    { value: "facebook", label: "Facebook" },
    { value: "reddit", label: "Reddit" },
    { value: "pinterest", label: "Pinterest" },
    { value: "youtube", label: "Youtube" },
  ];

  const handleChange = (value) => {
    setSelectedSocialMedia({ value, label: value.charAt(0).toUpperCase() + value.slice(1) });
  };

  return (
    <Container>
      <Select
        defaultValue={selectedSocialMedia}
        onChange={handleChange}
        options={socialMediaOptions}
      />
      <FormInputBorder
        name={selectedSocialMedia.value}
        placeholder={`Link para o ${selectedSocialMedia.label}`}
        errors={errors}
        register={register}
      />
    </Container>
  );
}

SocialMediaInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
};
