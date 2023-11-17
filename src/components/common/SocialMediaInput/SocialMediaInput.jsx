import PropTypes from "prop-types";
import { Container, Input, IconContainer } from "./Styles";
import { Select } from "antd";
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

export default function SocialMediaInput({ name, placeholder, icon: Icon }) {
  const handleChange = (value) => {
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
      <Select
        defaultValue='linkedin'
        style={{ width: 120 }}
        onChange={handleChange}
        options={socialMediaOptions}
      />
      <IconContainer>
        {Icon && <Icon />}
        <Input id={name} placeholder={placeholder} />
      </IconContainer>
    </Container>
  );
}

SocialMediaInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
};
