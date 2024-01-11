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
import { usePostAvaliation, usegetByIaId, useGetAvaliation, useUpdateAvaliation} from "../../services/ManagerService";



export default function Tool({ data }) {
  const [starsValue, setStarsValue] = useState(0);
  const [starsValue2, setStarsValue2] = useState(data.stars || 0);
  const [hoverValue, setHoverValue] = useState(0);
  const [hoverValue2, setHoverValue2] = useState(0);
  
  const { setToken, getToken, getUser, clearAuth } = useAuthStore();
  const  user = getUser()._id;

  const handleStarsChange = async (value, toolData) => {
    setStarsValue(value);
    const iaId = toolData._id;
  
    try {
      const resultado = await getAvaliation();
      const idAvaliation = await getIdAvaliation();
      console.log('id avaliation', idAvaliation);
      const body =  { userId: user, rate: value, iaId: iaId };
  
      if (resultado) {
        updateAvaliation(idAvaliation, body);
        console.log('Verdadeiro', resultado);
      } else {
        await postAvaliationData(body);
        console.log('Avaliação postada com sucesso!');
      }
    } catch (error) {
      console.error('Erro ao verificar a avaliação:', error);
    }
  };

  const handleHoverChange = (value) => {
    setHoverValue(value);
  };

  
  const renderStarIcon2 = (index) => {
    const floatValue =   starsValue2;
    if (index < floatValue && index > floatValue - 1) {
      return <FaStarHalfStroke />;
    }
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

  const getAvaliation = async () => {
    try {
      const { avaliation } = await useGetAvaliation();
  
      if (avaliation && Array.isArray(avaliation)) {
        // Verificar se há alguma avaliação com o mesmo userID
        const userAvaliation = avaliation.find((aval) => aval.userId === getUser()._id);
  
        if (userAvaliation) {
          // Aqui você tem a avaliação do usuário atual
          console.log('Avaliação do usuário:', userAvaliation._id, userAvaliation );
          return true;
        } else {
          console.log('Nenhuma avaliação encontrada para o usuário atual.');
          return false;
        }
      } else {
        console.log('Propriedade "avaliations" não é uma array ou está indefinida no objeto retornado.');
        return false;
      }
    } catch (error) {
      console.error('Erro ao buscar dados de avaliação:', error);
      return false;
    }
  };

  const getIdAvaliation  = async () => {
      const { avaliation } = await useGetAvaliation();
  
      if (avaliation && Array.isArray(avaliation)) {
        // Verificar se há alguma avaliação com o mesmo userID
        const userAvaliation = avaliation.find((aval) => aval.userId === getUser()._id);
  
        if (userAvaliation) {
          return userAvaliation._id;
        } 
      } 
    
  };

  useEffect(() => {
    getByIaId();
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

  const updateAvaliation  = async (id, body) => {
      console.log('_id atualizando:', id);
      const result = await useUpdateAvaliation(id, body);
      console.log('Dados da avaliação update:', result);
   
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
