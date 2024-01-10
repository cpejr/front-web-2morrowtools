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
import { FaRegBookmark} from "react-icons/fa";
import { FaStarHalfStroke} from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import { RiStarSLine, RiStarSFill } from "react-icons/ri";
import useAuthStore from "../../stores/auth";
import { usePostAvaliation, usegetByIaId} from "../../services/ManagerService";



export default function Tool({ data }) {
  const [starsValue, setStarsValue] = useState(0);
  const [starsValue2, setStarsValue2] = useState(data.stars || 0);
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
  
  

 

  const handleHoverChange = (value) => {
    setHoverValue(value);
  };

  
  const renderStarIcon2 = (index) => {
    const floatValue =   starsValue2;
    // Se index for menor que o valor (e maior que o valor - 1 para representar uma estrela pela metade)
    if (index < floatValue && index > floatValue - 1) {
      return <FaStarHalfStroke />;
    }
  
    // Se o índice for menor que o valor, renderiza uma estrela preenchida, caso contrário, estrela vazia
    return index < floatValue ? <RiStarSFill /> : <RiStarSLine />;
  };


  const renderStarIcon = (index) => {
    return index <= (hoverValue || starsValue) - 1 ? <RiStarSFill /> : <RiStarSLine />;
  };

 
  const getByIaId = async (toolData) => {
    try {
      const result = await usegetByIaId(toolData._id);
      const averageRate = result?.averagerate || 0;
      const roundedRating = Math.ceil(averageRate.averageRating * 2) / 2; // Arredonda para cima com precisão de 0.5
      setStarsValue2(roundedRating.toFixed(1));
    } catch (error) {
      console.log("erro");
      console.error('Error fetching data:', error);
    }
  };

 
  useEffect(() => {
    getByIaId(data.toolData);
  }, []);
  

  const postAvaliationData = async (body) => {
    try {
      console.log('Body:', body);
      const result = await usePostAvaliation(body);
      console.log('Dados da avaliação postada:', result);
    } catch (error) {
      console.error('Erro ao postar avaliação:', error);
    }
  };

 
  

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
                  count={5} 
                  value={starsValue2} 
                  onChange={() => getByIaId(toolData)}
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
