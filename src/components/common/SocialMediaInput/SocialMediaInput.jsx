import PropTypes from "prop-types";
import { Container, IconContainer, StyledSelect, StyledInput } from "./Styles";
import {
  FaLinkedin,
  FaDiscord,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaReddit,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { useState } from "react";

export default function SocialMediaInput({ placeholder, icon: Icon }) {
  const [selectedSocialMedia, setSelectedSocialMedia] = useState("linkedin");

  const handleChange = (value) => {
    setSelectedSocialMedia(value);
    console.log(`selected ${value}`);
  };

  const socialMediaOptions = [
    { value: "linkedin", label: <FaLinkedin /> },
    { value: "discord", label: <FaDiscord /> },
    { value: "twitter", label: <FaTwitter /> },
    { value: "instagram", label: <FaInstagram /> },
    { value: "tiktok", label: <FaTiktok /> },
    { value: "facebook", label: <FaFacebook /> },
    { value: "reddit", label: <FaReddit /> },
    { value: "pinterest", label: <FaPinterest /> },
    { value: "youtube", label: <FaYoutube /> },
  ];

  return (
    <Container>
      <StyledSelect
        defaultValue='linkedin'
        style={{ width: 120 }}
        onChange={handleChange}
        options={socialMediaOptions}
      />
      <IconContainer>
        {Icon && <Icon />}
        <StyledInput id={selectedSocialMedia} placeholder={placeholder} />
      </IconContainer>
    </Container>
  );
}

SocialMediaInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
};
