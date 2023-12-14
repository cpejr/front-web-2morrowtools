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
import useDebounce from "../../services/useDebounce";
import { usePostAvaliation } from "../../services/ManagerService";



export default function Tool({ data }) {
  const [starsValue, setStarsValue] = useState(0);
  const [starsValue2, setStarsValue2] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);
  const [hoverValue2, setHoverValue2] = useState(0);
  const [names, setNames] = useState("");

  // Debounce logic here...

  const handleStarsChange = async (value) => {
    setStarsValue(value);
    await postAvaliationData({ userId: '656ccb602d3069936d590c74', rate: 1, iaId: '656ccb602d3069936d590c74' });
  };
  
  const handleStarsChange2 = async (value) => {
    setStarsValue2(value);
    await postAvaliationData({ userId: '656ccb602d3069936d590c74', rate: 1, iaId: '656ccb602d3069936d590c74' });
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
                  value={starsValue}
                  // allowClear={false}
                  onChange={handleStarsChange}
                  onHoverChange={handleHoverChange}
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
                  // allowClear={false}
                  onChange={handleStarsChange2}
                  onHoverChange={handleHoverChange2}
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
