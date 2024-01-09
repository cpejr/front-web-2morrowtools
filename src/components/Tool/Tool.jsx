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

import { useState,useEffect } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { RiStarSLine, RiStarSFill } from "react-icons/ri";
import useAuthStore from "../../stores/auth";
import { usePostAvaliation} from "../../services/ManagerService";



export default function Tool({ data }) {
  const [starsValue, setStarsValue] = useState(0);
  const [starsValue2, setStarsValue2] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);
  const [hoverValue2, setHoverValue2] = useState(0);
  const { setToken, getToken, getUser, clearAuth } = useAuthStore();
  const  user = getUser()._id;

  // Debounce logic here...

  const handleStarsChange = async (value,toolData) => {
    setStarsValue(value);
    const iaId = toolData._id;
    await postAvaliationData({ userId: user, rate: value, iaId: iaId });
  };
  
  const handleStarsChange2 = async (value, toolData) => {
    setStarsValue2(2);
    const iaId = toolData._id;
    await postAvaliationData({ userId: user, rate: value, iaId: iaId});
  };

  const handleHoverChange = (value) => {
    setHoverValue(value);
  };

  const handleHoverChange2 = (value) => {
    setHoverValue2(value);
  };

  const renderStarIcon = (index) => {
    return index <= (hoverValue || starsValue) - 1 ? <RiStarSFill /> : <RiStarSLine />;
  };

  const renderStarIcon2 = (index) => {
    return index <= (hoverValue2 || starsValue2) - 1 ? <RiStarSFill /> : <RiStarSLine />;
  };

  const postAvaliationData = async (body) => {
    try {
      console.log('Body:', body);
      const result = await usePostAvaliation(body);
      console.log('Dados da avaliação postada:', result);
    } catch (error) {
      console.error('Erro ao postar avaliação:', error);
    }
  };

  //  const getIaId = async () => {
  //   try {
  //     const result = await usegetIaId();
  //     console.log('Dados do IaId:', result);
  //     return result;
  //   } catch (error) {
  //     console.error('Erro ao obter o IaId:', error);
  //     throw error; 
  //   }
  // };
  

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
              value={starsValue2}
              onChange={(value) => handleStarsChange(value, toolData)}
              onHoverChange={(value) => handleHoverChange(value, toolData)}
              character={({ index }) => renderStarIcon(index)}
            />
                <span>({starsValue})</span>
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
              value={starsValue2}
              onChange={(value) => handleStarsChange2(value, toolData)}
              onHoverChange={(value) => handleHoverChange2(value, toolData)}
              character={({ index }) => renderStarIcon2(index)}
            />
                <span>({starsValue2})</span>
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
                src={toolData.youtubeVideoLink}
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
  data: PropTypes.object.isRequired,
  comments: PropTypes.object.isRequired,
  cards: PropTypes.object.isRequired,
};
