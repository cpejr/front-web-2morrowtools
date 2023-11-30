import { useState } from "react";
import { StyledCard, BlueButton, Line, Tags, Tag, Image, Stars, LineSVG, Group } from "./Styles";
import { FaRegBookmark } from "react-icons/fa";
import { RiStarSLine, RiStarSFill } from "react-icons/ri";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export default function Card({ dados }) {
  const [starsValue, setStarsValue] = useState(dados.stars || 0);
  const [hoverValue, setHoverValue] = useState(0);
  const navigate = useNavigate();

  const handleStarsChange = (value) => {
    setStarsValue(value);
  };

  const handleHoverChange = (value) => {
    setHoverValue(value);
  };

  const renderStarIcon = (index) => {
    return index <= (hoverValue || starsValue) - 1 ? <RiStarSFill /> : <RiStarSLine />;
  };

  const groupedTags = [];
  for (let i = 0; i < dados?.tags?.length; i += 2) {
    groupedTags.push(dados?.tags?.slice(i, i + 2));
  }

  const handleLineClick = useCallback(() => {
    navigate(`/ferramenta/${dados?.name}`);
    window.location.reload();
    window.scrollTo(0, 0);
  }, [navigate, dados?.name]);

  return (
    <StyledCard>
      <Image>
        <img src={dados?.imageURL} alt={dados?.name} />
      </Image>
      <Group>
        <Line onClick={handleLineClick}>{dados?.name}:</Line>
        <LineSVG>
          <FaRegBookmark />
        </LineSVG>
      </Group>
      <Line>
        <Stars
          value={starsValue}
          // allowClear={false}
          onChange={handleStarsChange}
          onHoverChange={handleHoverChange}
          character={({ index }) => renderStarIcon(index)}
        />
        <span>({starsValue})</span>
      </Line>
      <Line>
        <p>{dados?.description}</p>
      </Line>

      <Tags>
        <Tag>{dados?.id_categoryfeature?.name} </Tag>
        <Tag>{dados?.id_categoryprice?.name} </Tag>
      </Tags>
      <Tags>
        <Tag>{dados?.id_categoryprofession?.name} </Tag>
      </Tags>
      <BlueButton type='primary'>BOTÃO</BlueButton>
    </StyledCard>
  );
}

Card.propTypes = {
  dados: PropTypes.object.isRequired,
};
