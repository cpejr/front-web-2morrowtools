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
  Tag,
  VideoDiv,
} from "./Styles";
import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";

export default function Tool({ data }) {
  return (
    <>
      {data.map((dados, index) => (
        <>
          <Row key={index}>
            <ImageCollumn>
              <Image>
                <img src={dados.image} alt={`ToolImage ${index}`} />
              </Image>
              <Line key={`line-${index}`}>
                <Tag>{dados?.categoryFeatures}</Tag>
                <Tag>{dados?.categoryPrices}</Tag>
                <Tag>{dados?.categoryProfessions}</Tag>
              </Line>
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
                <Stars disabled defaultValue={dados?.stars} />
                <span>({dados?.stars})</span>
              </Line>
              <p>{dados?.description}</p>
              <BlueButton type='primary'>ACESSE JÁ!</BlueButton>
            </DataCollumn>
          </Row>
          <Row>
            <RateDiv>
              <p>Você recomendaria essa ferramenta?</p>
              <Line>
                <Stars disabled defaultValue={dados?.stars} />
                <span>({dados?.stars})</span>
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
                src={dados.videosrc}
                title={dados?.videoTitle}
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
