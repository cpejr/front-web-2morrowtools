import { Container, HomeImage, InputStyled, Line } from "./Styles";
import homeImage from "../../assets/home-image.svg";
import { SearchOutlined } from "@ant-design/icons";
import { Card } from "../../components";
import { useMediaQuery } from "react-responsive";
import FilterArea from "../../components/FilterArea/FilterArea";
import { useGetAITools } from "../../services/ManagerService";
import { useEffect, useState } from "react";

export default function Home() {
  const [aiTools, setAITools] = useState({});

  async function GettingAIToolsData() {
    const aiTools = await useGetAITools();
    setAITools(aiTools);
  }
  useEffect(() => {
    GettingAIToolsData();
  }, []);

  const groupedData = [];
  const isSmallDesktop = useMediaQuery({ maxWidth: 1370 });
  const isTabletScreen = useMediaQuery({ maxWidth: 1130 });
  const isMobileScreen = useMediaQuery({ maxWidth: 700 });
  if (isMobileScreen) {
    for (let i = 0; i < aiTools?.aiTools?.length; i += 1) {
      groupedData.push(aiTools?.aiTools?.slice(i, i + 1));
    }
  } else if (isTabletScreen) {
    for (let i = 0; i < aiTools?.aiTools?.length; i += 2) {
      groupedData.push(aiTools?.aiTools?.slice(i, i + 2));
    }
  } else if (isSmallDesktop) {
    for (let i = 0; i < aiTools?.aiTools?.length; i += 3) {
      groupedData.push(aiTools?.aiTools?.slice(i, i + 3));
    }
  } else {
    for (let i = 0; i < aiTools?.aiTools?.length; i += 4) {
      groupedData.push(aiTools?.aiTools?.slice(i, i + 4));
    }
  }
  return (
    <Container>
      <HomeImage src={homeImage} />
      <h1>2MORROW TOOLS</h1>
      <h2>O maior acervo de ferramentas e Inteligências Artificiais do Brasil </h2>
      <InputStyled type='primary' prefix={<SearchOutlined />}></InputStyled>
      <FilterArea />

      {groupedData.map((group, index) => (
        <Line key={index}>
          {group.map((content) => (
            <Card dados={content} key={content?._id} />
          ))}
        </Line>
      ))}
    </Container>
  );
}
