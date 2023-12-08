import { useState } from "react";
import { StyledCard, BlueButton, Line, Tags, Tag, Image, Stars, LineSVG, Group } from "./Styles";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { RiStarSLine, RiStarSFill } from "react-icons/ri";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { usePostFavorite } from "../../services/ManagerService";
import { signInWithGooglePopup } from "./../../services/firebase";
import { usePostUser } from "../../services/ManagerService";
import useAuthStore from "../../stores/auth";

export default function Card({ data }) {
  const [starsValue, setStarsValue] = useState(data.stars || 0);
  const [hoverValue, setHoverValue] = useState(0);
  const [favoriteIcon, setFavoriteIcon] = useState(
    data.favorite ? (
      <FaBookmark className='favoriteIcon' />
    ) : (
      <FaRegBookmark className='favoriteIcon' />
    )
  );
  const navigate = useNavigate();
  const { setToken, getUser, getToken } = useAuthStore();
  const handleStarsChange = (value) => {
    setStarsValue(value);
  };

  async function saveFavorite() {
    if (getToken() === null) {
      await logGoogleUser();
    }
    await usePostFavorite({
      userId: getUser()._id || " ",
      toolId: data._id
    })
    data.favorite = !data.favorite;
    setFavoriteIcon(data.favorite ? <FaBookmark className="favoriteIcon"/> : <FaRegBookmark className="favoriteIcon"/>);
  }

  let favorite = <span onClick={saveFavorite} style={{cursor:"pointer"}}>{data.favorite ? <FaBookmark className="favoriteIcon"/> : <FaRegBookmark className="favoriteIcon"/>}</span>;
  
  const logGoogleUser = async () => {
    if (getToken() === null) {
      const response = await signInWithGooglePopup();
      const tokenObject = await usePostUser({
        name: response.user.displayName,
        email: response.user.email,
        imageURL: response.user.photoURL,
        type: "Admin",
      });
      
      setToken(tokenObject.token);

      window.location.reload();
    }
  };

  const handleHoverChange = (value) => {
    setHoverValue(value);
  };

  const renderStarIcon = (index) => {
    return index <= (hoverValue || starsValue) - 1 ? <RiStarSFill /> : <RiStarSLine />;
  };

  const groupedTags = [];
  for (let i = 0; i < data?.tags?.length; i += 2) {
    groupedTags.push(data?.tags?.slice(i, i + 2));
  }

  const handleLineClick = useCallback(() => {
    navigate(`/ferramenta/${data?.name}`);
    window.location.reload();
    window.scrollTo(0, 0);
  }, [navigate, data?.name]);

  return (
    <StyledCard>
      <Image>
        <img src={data?.imageURL} alt={data?.name} />
      </Image>
      <Group>
        <Line onClick={handleLineClick}>{data?.name}:</Line>
        <LineSVG>{favorite}</LineSVG>
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
        <p>{data?.description}</p>
      </Line>

      <Tags>
        <Tag>{data?.id_categoryfeature?.name} </Tag>
        <Tag>{data?.id_categoryprice?.name} </Tag>
      </Tags>
      <Tags>
        <Tag>{data?.id_categoryprofession?.name} </Tag>
      </Tags>
      <BlueButton type='primary'>BOTÃO</BlueButton>
    </StyledCard>
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
};
