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
} from "./Styles";
import PropTypes from "prop-types";

import { useState, useEffect } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import { RiStarSLine, RiStarSFill } from "react-icons/ri";
import useAuthStore from "../../stores/auth";
import {
  usePostAvaliation,
  useGetAvaliationByAIId,
  useUpdateAvaliation,
  useGetUserTrueOrFalse,
  useGetAvaliationID,
} from "../../services/ManagerService";
import { toast } from "react-toastify";

export default function Tool({ data }) {
  const [starsValue, setStarsValue] = useState(0);
  const [starsValue2, setStarsValue2] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);
  const [userHasPrevRating, setUserHasPrevRating] = useState(false);
  const [avaliationID, setAvaliationID] = useState({});
  const ID = data?.aiTools?.[0]?._id;

  const { getUser } = useAuthStore();
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

  const handleHoverChange = (value) => {
    setHoverValue(value);
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

  return (
    <>
      {data?.aiTools?.map((toolData, index) => (
        <>
          <Row key={index}>
            <ImageCollumn>
              <Image>
                <img src={toolData?.imageURL} alt={`ToolImage ${index}`} />
              </Image>
              <TagsLine key={`line-${index}`}>
                <Tag>{toolData?.id_categoryfeature?.name}</Tag>
                <Tag>{toolData?.id_categoryprice?.name}</Tag>
                <Tag>{toolData?.id_categoryprofession?.name}</Tag>
              </TagsLine>
            </ImageCollumn>
            <DataCollumn>
              <Group>
                <Line>{toolData.name}</Line>
                <LineSVG>
                  <FaRegBookmark />
                  <IoShareSocial />
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
                <Tag>{toolData?.id_categoryfeature?.name}</Tag>
                <Tag>{toolData?.id_categoryprice?.name}</Tag>
                <Tag>{toolData?.id_categoryprofession?.name}</Tag>
              </TabletTagsLine>
              <BlueButton
                type='primary'
                onClick={() => {
                  window.open(toolData?.link, "_blank");
                }}
              >
                ACESSE JÁ!
              </BlueButton>
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
