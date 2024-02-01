import { IoShareSocial } from "react-icons/io5";
import { RWebShare } from "react-web-share";
import PropTypes from "prop-types";

export default function Share({ url }) {
  return (
    <RWebShare
      data={{
        text: "Verifique essa ferramenta de IA que eu encontrei no 2MorrowTools!",
        url,
        title: "Compartilhar ferramenta",
      }}
    >
      <IoShareSocial />
    </RWebShare>
  );
}

Share.propTypes = {
  url: PropTypes.string.isRequired,
};
