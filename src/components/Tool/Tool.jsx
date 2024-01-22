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
  useGetAvaliation,
  useUpdateAvaliation,
  useGetImage,
} from "../../services/ManagerService";
import { toast } from "react-toastify";
import { LoadingOutlined } from "@ant-design/icons";

export default function Tool({ data }) {
  const [starsValue, setStarsValue] = useState(0);
  const [starsValue2, setStarsValue2] = useState(data.stars || 0);
  const [hoverValue, setHoverValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(data?.imageURL);

  const getImage = async () => {
    try {
      if (
        data.aiTools &&
        data?.aiTools[0]?.imageURL.includes("2morrowstorage.blob.core.windows.net")
      ) {
        setLoading(true);

        const azureImage = await useGetImage(data?.aiTools[0]?.imageURL);

        setImage(azureImage.data.image);
        setLoading(false);
      }
    } catch (error) {
      console.error("Erro ao buscar imagem de ferramenta", error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const { getUser } = useAuthStore();
  const user = getUser()?._id;
  const handleStarsChange = async (value, toolData) => {
    setStarsValue(value);
    const iaId = toolData._id;

    try {
      const result = await getAvaliation();
      const idAvaliation = await getIdAvaliation();
      const body = { userId: user, rate: value, iaId: iaId };
      if (result) {
        updateAvaliation(idAvaliation, body);
        toast.success("Avaliação alterada com sucesso!");
      } else {
        await postAvaliationData(body);
        toast.success("Avaliação realizada com sucesso!");
      }
    } catch (error) {
      toast.error("Erro ao fazer a avaliação", error);
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

  const getByIaId = async (toolData) => {
    const result = await useGetAvaliationByAIId(toolData?._id);
    const averageRate = result?.averagerate || 0;
    const roundedRating = Math?.ceil(averageRate.averageRating * 2) / 2;
    setStarsValue2(roundedRating?.toFixed(1));
  };
  useEffect(() => {
    if (data?.aiTools) {
      data.aiTools.forEach((toolData) => {
        getByIaId(toolData);
      });
    }
  }, [data]);

  const getAvaliation = async () => {
    try {
      const { avaliation } = await useGetAvaliation();
      if (avaliation && Array.isArray(avaliation)) {
        const userAvaliation = avaliation.find((aval) => aval.userId === getUser()?._id);

        if (userAvaliation) return true;
        else {
          toast.message("Nenhuma avaliação encontrada para o usuário atual.");
          return false;
        }
      } else return false;
    } catch (error) {
      console.error("Erro ao buscar dados de avaliação:", error);
      return false;
    }
  };

  const getIdAvaliation = async () => {
    const { avaliation } = await useGetAvaliation();

    if (avaliation && Array.isArray(avaliation)) {
      const userAvaliation = avaliation.find((aval) => aval.userId === getUser()?._id);
      if (userAvaliation) {
        return userAvaliation._id;
      }
    }
  };

  const postAvaliationData = async (body) => {
    try {
      const result = await usePostAvaliation(body);
      toast.success("Dados da avaliação postados", result);
    } catch (error) {
      toast.error("Erro ao postar avaliação:", error);
    }
  };

  const updateAvaliation = async (id, body) => {
    const result = await useUpdateAvaliation(id, body);
    return result;
  };

  return (
    <>
      {data?.aiTools?.map((toolData, index) => (
        <>
          <Row key={index}>
            <ImageCollumn>
              <Image>
                {loading ? <LoadingOutlined /> : <img src={image} alt={`ToolImage ${index}`} />}
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
                  character={({ index }) => renderStarIcon2(index)}
                  onChange={() => getByIaId()}
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
