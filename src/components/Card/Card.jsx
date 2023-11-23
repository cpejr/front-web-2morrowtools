import { useState } from "react";
import { StyledCard, BlueButton, Line, Tags, Tag, Image, Stars, LineSVG, Group } from "./Styles";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { RiStarSLine, RiStarSFill } from "react-icons/ri";
import PropTypes from "prop-types";
import { usePostFavorite } from "../../services/ManagerService"
import  useAuthStore  from "../../stores/auth";

export default function Card({ dados }) {
  const [starsValue, setStarsValue] = useState(dados.stars || 0);
  const [hoverValue, setHoverValue] = useState(0);
  const { getUser } = useAuthStore();
  const handleStarsChange = (value) => {
    setStarsValue(value);
  };

  async function saveFavorite() {
    const fav = await usePostFavorite({
      userId: getUser().userFound._id || " ",
      toolId: dados._id
    })
  }
  const favoriteIcon = dados.favorite ? <FaBookmark className="favoriteIcon" onClick={saveFavorite}/> : <FaRegBookmark className="favoriteIcon" onClick={saveFavorite}/>;


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
        <img src={dados?.imageURL} alt={dados?.name} />
      </Image>
      <Group>
        <Line>{dados?.name}:</Line>
        <LineSVG>
          {favoriteIcon}
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