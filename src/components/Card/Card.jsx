/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import {
  StyledCard,
  BlueButton,
  Line,
  Tags,
  Tag,
  Image,
  Stars,
  LineSVG,
  Group,
  ButtonDiv,
} from "./Styles";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark, FaStarHalfStroke } from "react-icons/fa6";
import { RiStarSLine, RiStarSFill, RiLoader2Fill } from "react-icons/ri";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useGetTrueOrFalse, usePostFavorite } from "../../services/ManagerService";
import { signInWithGooglePopup } from "./../../services/firebase";
import { usePostUser, useGetAvaliationByAIId, useGetImage } from "../../services/ManagerService";
import useAuthStore from "../../stores/auth";
export default function Card({ data }) {
  const [starsValue, setStarsValue] = useState(0);
  const [favoriteIcon, setFavoriteIcon] = useState(
    data.favorite ? (
      <FaBookmark className='favoriteIcon' />
    ) : (
      <FaRegBookmark className='favoriteIcon' />
    )
  );
  const [hasPrevRating, setHasPrevRating] = useState(false);
  const navigate = useNavigate();
  const [image, setImage] = useState(data?.imageURL);
  const [loading, setLoading] = useState(false);

  const getImage = async () => {
    try {
      if (data?.imageURL.includes("2morrowstorage.blob.core.windows.net")) {
        setLoading(true);
        const azureImage = await useGetImage(data.imageURL);
        setImage(azureImage.data.image);
        setLoading(false);
      }
    } catch (error) {
      console.error("Erro ao buscar imagem de ferramenta", error);
    }
  };

  const { setToken, getUser, getToken } = useAuthStore();

  const getByIaId = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    if (hasPrevRating) {
      const result = await useGetAvaliationByAIId(data?._id);
      const averageRate = result?.averagerate || 0;
      const roundedRating = Math?.ceil(averageRate.averageRating * 2) / 2;
      setStarsValue(roundedRating?.toFixed(1));
    }
  };
  async function GetTrueOrFalse() {
    const { result } = await useGetTrueOrFalse(data?._id);
    setHasPrevRating(result);
  }
  useEffect(() => {
    GetTrueOrFalse();
  }, []);
  useEffect(() => {
    getByIaId();
    getImage();
  }, [data]);

  const saveFavorite = async () => {
    if (getToken() === null) {
      await logGoogleUser();
    }
    await usePostFavorite({
      userId: getUser()?._id || " ",
      toolId: data?._id,
    });
    data.favorite = !data?.favorite;
    setFavoriteIcon(
      data.favorite ? (
        <FaBookmark className='favoriteIcon' />
      ) : (
        <FaRegBookmark className='favoriteIcon' />
      )
    );
  };

  const logGoogleUser = async () => {
    if (getToken() === null) {
      const response = await signInWithGooglePopup();
      const tokenObject = await usePostUser({
        name: response?.user?.displayName,
        email: response?.user?.email,
        imageURL: response?.user?.photoURL,
        type: "User",
      });

      setToken(tokenObject.token);

      window.location.reload();
    }
  };

  const renderStarIcon = (index) => {
    const floatValue = starsValue;
    if (index < floatValue && index > floatValue - 1) {
      return <FaStarHalfStroke />;
    }
    return index < floatValue ? <RiStarSFill /> : <RiStarSLine />;
  };

  const groupedTags = [];
  for (let i = 0; i < data?.tags?.length; i += 2) {
    groupedTags.push(data?.tags?.slice(i, i + 2));
  }

  const handleLineClick = () => {
    navigate(`/ferramenta/${data?.name}`);
    window.location.reload();
    window.scrollTo(0, 0);
  };
  return (
    <StyledCard>
      <Image>{loading ? <RiLoader2Fill /> : <img src={image} alt={data?.name} />}</Image>
      <Group>
        <Line onClick={handleLineClick}>{data?.name}</Line>
        <LineSVG onClick={saveFavorite}>{favoriteIcon}</LineSVG>
      </Group>
      <Line>
        <Stars count={5} value={starsValue} character={({ index }) => renderStarIcon(index)} />
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
      <ButtonDiv>
        <BlueButton
          type='primary'
          onClick={() => {
            window.open(data?.link, "_blank");
          }}
        >
          Acesse Agora
        </BlueButton>
      </ButtonDiv>
    </StyledCard>
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
};
