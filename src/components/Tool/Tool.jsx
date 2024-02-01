/* eslint-disable react-hooks/rules-of-hooks */
import {
  BlueButton,
  DataCollumn,
  Group,
  Image,
  ImageCollumn,
  KnowMore,
  Line,
  LineSVG,
  RateDiv,
  Row,
  Stars,
  TabletTagsLine,
  Tag,
  TagsLine,
  VideoDiv,
  Icon,
  IconContainer,
} from "./Styles";
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
  FaBookmark,
} from "react-icons/fa";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { RiStarSLine, RiStarSFill } from "react-icons/ri";
import useAuthStore from "../../stores/auth";
import {
  usePostAvaliation,
  useGetAvaliationByAIId,
  useUpdateAvaliation,
  useGetImage,
  useGetUserTrueOrFalse,
  useGetAvaliationID,
  usePostUser,
  usePostFavorite,
  useGetFavorites,
  useDeleteFavorite,
} from "../../services/ManagerService";
import { toast } from "react-toastify";
import { Share } from "../";
import { signInWithGooglePopup } from "../../services/firebase";
export default function Tool({ data }) {
  const { setToken, getUser, getToken } = useAuthStore();
  const [starsValue, setStarsValue] = useState(0);
  const [starsValue2, setStarsValue2] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);
  const [userHasPrevRating, setUserHasPrevRating] = useState(false);
  const [avaliationID, setAvaliationID] = useState({});
  const ID = data?.aiTools?.[0]?._id;
  let categories = [
    ...data.aiTools[0].id_categoryprices,
    ...data.aiTools[0].id_categoryfeatures,
    ...data.aiTools[0].id_categoryprofessions,
  ];

  //images
  const [image, setImage] = useState("");
  const getImage = async () => {
    try {
      if (data.aiTools) {
        setImage(data?.aiTools[0]?.imageURL);
        const azureImage = await useGetImage(data?.aiTools[0]?.imageURL);
        setImage(azureImage.data.image);
      }
    } catch (error) {
      console.error("Erro ao buscar imagem de ferramenta", error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getImage();
    getIsFavorite();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  //avaliation and comments
  const userID = getUser()?._id;
  async function GetUserTrueOrFalse() {
    if (ID && userID) {
      const { result } = await useGetUserTrueOrFalse({ userId: userID, iaId: ID });
      setUserHasPrevRating(result);
    }
  }
  async function GetUserAvaliationID() {
    const { ai } = await useGetAvaliationID({ iaId: ID, userId: userID });
    setAvaliationID(ai);
  }
  const handleStarsChange = async (value) => {
    setStarsValue(value);
    GetByIaId();
    switch (userHasPrevRating) {
      case true:
        try {
          const result = useUpdateAvaliation(avaliationID?._id, {
            userId: userID,
            rate: value,
            iaId: ID,
          });
          toast.success("Dados da avaliação atualizados", result);
        } catch (error) {
          toast.error("Erro ao atualizar avaliação:", error);
        }
        break;

      default:
        try {
          const result = usePostAvaliation({ userId: userID, rate: value, iaId: ID });
          toast.success("Avaliação Registrada", result);
        } catch (error) {
          toast.error("Error ao registrar a avaliação", error);
        }
        break;
    }
  };
  const renderStarIcon2 = (index) => {
    const floatValue = starsValue2;
    if (index < floatValue && index > floatValue - 1) {
      return <FaStarHalfStroke />;
    }
    return index < floatValue ? <RiStarSFill /> : <RiStarSLine />;
  };

  const renderStarIcon = (index) => {
    return index <= (hoverValue || starsValue) - 1 ? <RiStarSFill /> : <RiStarSLine />;
  };

  const handleHoverChange = (value) => {
    setHoverValue(value);
  };

  //avaliaion
  async function GetByIaId() {
    const result = await useGetAvaliationByAIId(ID);
    const averageRate = result?.averagerate || 0;
    const roundedRating = Math?.ceil(averageRate.averageRating * 2) / 2;
    setStarsValue2(roundedRating?.toFixed(1));
  }
  useEffect(() => {
    GetByIaId();
    GetUserTrueOrFalse();
    GetUserAvaliationID();
    setStarsValue(avaliationID?.rate || 0);
  }, [data, avaliationID]);

  //icons
  const iconOptions = {
    linkedIn: <FaLinkedin />,
    discord: <FaDiscord />,
    twitterX: <FaTwitter />,
    instagram: <FaInstagram />,
    tiktok: <FaTiktok />,
    facebook: <FaFacebook />,
    reddit: <FaReddit />,
    pinterest: <FaPinterest />,
    youtube: <FaYoutube />,
  };

  //favorites
  //TODO->MOVE ALL OF THIS TO A COMPONENT
  const [favorite, setFavorite] = useState();

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
  const getIsFavorite = async () => {
    if (getUser()) {
      const favorites = await useGetFavorites(getUser()._id);
      const result = favorites.find((tool) => tool._id === data.aiTools[0]._id);
      setFavorite(result);
    } else {
      setFavorite(undefined);
    }
  };

  const changeFavorite = async () => {
    if (getToken() === null) {
      await logGoogleUser();
    }
    if (favorite) {
      await useDeleteFavorite({ toolId: data?.aiTools[0]._id, userId: getUser()._id });
      getIsFavorite();
    } else {
      await usePostFavorite({
        userId: getUser()?._id || " ",
        toolId: data?.aiTools[0]?._id,
      });
      getIsFavorite();
    }
  };
  const [favoriteIcon, setFavoriteIcon] = useState(
    favorite && getUser() ? (
      <FaBookmark className='favoriteIcon' onClick={changeFavorite} />
    ) : (
      <FaRegBookmark className='favoriteIcon' onClick={changeFavorite} />
    )
  );

  useEffect(
    () =>
      setFavoriteIcon(
        favorite ? (
          <FaBookmark className='favoriteIcon' onClick={changeFavorite} />
        ) : (
          <FaRegBookmark className='favoriteIcon' onClick={changeFavorite} />
        )
      ),
    [favorite]
  );
  return (
    <>
      {data?.aiTools?.map((toolData, index) => (
        <>
          <Row key={index}>
            <ImageCollumn>
              <Image>
                <img src={image} alt={`ToolImage ${index}`} />
              </Image>
              <TagsLine key={`line-${index}`}>
                {categories?.map((category, index) => (
                  <Tag key={index}>{category?.name}</Tag>
                ))}
              </TagsLine>
            </ImageCollumn>
            <DataCollumn>
              <Group>
                <Line>{toolData.name}</Line>
                <LineSVG>
                  {favoriteIcon}
                  <Share url={window.location.href} />
                </LineSVG>
              </Group>
              <Line>
                <Stars
                  count={5}
                  value={starsValue2}
                  character={({ index }) => renderStarIcon2(index)}
                />
                <span>({starsValue2})</span>
              </Line>
              <p>{toolData?.shortDescription}</p>
              <TabletTagsLine key={`line-${index}`}>
                {categories?.map((category, index) => (
                  <Tag key={index}>{category?.name}</Tag>
                ))}
              </TabletTagsLine>
              <BlueButton
                type='primary'
                onClick={() => {
                  window.open(toolData?.link, "_blank");
                }}
              >
                ACESSE JÁ!
              </BlueButton>
              <IconContainer>
                {Object.entries(iconOptions)
                  .filter(([name]) => data.aiTools[0][name])
                  .map(([name]) => (
                    <Icon href={data.aiTools[0][name]} target='_blank' rel='noreferrer' key={name}>
                      {iconOptions[name]}
                    </Icon>
                  ))}
              </IconContainer>
            </DataCollumn>
          </Row>
          <Row>
            <RateDiv>
              <p>Você recomendaria essa ferramenta?</p>
              <Line>
                <Stars
                  value={starsValue}
                  onChange={(value) => handleStarsChange(value)}
                  onHoverChange={(value) => handleHoverChange(value, toolData)}
                  character={({ index }) => renderStarIcon(index)}
                />
                <span>({starsValue})</span>
              </Line>
            </RateDiv>
          </Row>
          <KnowMore>
            <h1>PARA SABER MAIS</h1>
            <p>{toolData?.longDescription}</p>
            <VideoDiv>
              <iframe
                width='100%'
                height='100%'
                src={toolData?.youtubeVideoLink}
                title={"Video"}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              ></iframe>
            </VideoDiv>
          </KnowMore>
        </>
      ))}
    </>
  );
}
Tool.propTypes = {
  data: PropTypes.object,
  comments: PropTypes.object,
  cards: PropTypes.object,
};
