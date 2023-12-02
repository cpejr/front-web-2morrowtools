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

import { useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { RiStarSLine, RiStarSFill } from "react-icons/ri";
export default function Tool({ data }) {
  const [starsValue, setStarsValue] = useState(0);
  const [starsValue2, setStarsValue2] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);
  const [hoverValue2, setHoverValue2] = useState(0);

  const handleStarsChange = (value) => {
    setStarsValue(value);
  };
  const handleStarsChange2 = (value) => {
    setStarsValue2(value);
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
  return (
    <>
      {data?.aiTools?.map((dados, index) => (
        <>
          <Row key={index}>
            <ImageCollumn>
              <Image>
                <img src={dados?.imageURL} alt={`ToolImage ${index}`} />
              </Image>
              <TagsLine key={`line-${index}`}>
                <Tag>{dados?.id_categoryfeature?.name}</Tag>
                <Tag>{dados?.id_categoryprice?.name}</Tag>
                <Tag>{dados?.id_categoryprofession?.name}</Tag>
              </TagsLine>
            </ImageCollumn>
            <DataCollumn>
              <Group>
                <Line>{dados.name}</Line>
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
              <p>{dados?.shortDescription}</p>
              <TabletTagsLine key={`line-${index}`}>
                <Tag>{dados?.id_categoryfeature?.name}</Tag>
                <Tag>{dados?.id_categoryprice?.name}</Tag>
                <Tag>{dados?.id_categoryprofession?.name}</Tag>
              </TabletTagsLine>
              <BlueButton
                type='primary'
                onClick={() => {
                  window.open(dados?.link, "_blank");
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
            <p>{dados?.longDescription}</p>
            <VideoDiv>
              <iframe
                width='100%'
                height='100%'
                src={dados.youtubeVideoLink}
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
