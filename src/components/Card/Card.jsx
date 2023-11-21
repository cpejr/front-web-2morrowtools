import { useState } from "react";
import { StyledCard, BlueButton, Line, Tags, Tag, Image, Stars, LineSVG, Group } from "./Styles";
import { FaRegBookmark } from "react-icons/fa";
import { RiStarSLine, RiStarSFill } from "react-icons/ri";
import PropTypes from "prop-types";

export default function Card({ dados }) {
  const [starsValue, setStarsValue] = useState(dados.stars || 0);
  const [hoverValue, setHoverValue] = useState(0);

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

  return (
    <StyledCard>
      <Image>
        <img src={dados?.image} alt={dados?.name} />
      </Image>
      <Group>
        <Line>{dados?.name}:</Line>
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
      {groupedTags.map((tags, index) => (
        <Tags key={index}>
          {tags.map((content, i) => (
            <Tag key={i}>{content}</Tag>
          ))}
        </Tags>
      ))}
      <BlueButton type='primary'>BOTÃO</BlueButton>
    </StyledCard>
  );
}

Card.propTypes = {
  dados: PropTypes.object.isRequired,
};
