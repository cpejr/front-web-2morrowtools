import { AutoCompleteInput, Container, HomeImage, IconWrapper, Line, SVGDiv } from "./Styles";
import homeImage from "../../assets/home-image.svg";
import { SearchOutlined } from "@ant-design/icons";
import { Card } from "../../components";
import { useMediaQuery } from "react-responsive";
import FilterArea from "../../components/FilterArea/FilterArea";
import { useGetAITools, useGetAIToolsByName, useGetFavorites } from "../../services/ManagerService";
import { useEffect, useState } from "react";
import useAuthStore from "../../stores/auth";
import useDebounce from "../../services/useDebounce";

export default function Home() {
  const [aiTools, setAITools] = useState({});
  const [aiToolsNames, setAIToolsNames] = useState({});
  const [names, setNames] = useState("");
  const debouncedName = useDebounce(names);
  const [namesArray, setNamesArray] = useState([]);
  const [favoriteAiTools, setFavoriteAITools] = useState([]);
  const { getUser } = useAuthStore();

  // Backend Calls
  async function GettingAIToolsDataByName() {
    const aiTools = await useGetAIToolsByName({ name: debouncedName });
    setAITools(aiTools);
    if(getUser() !== null){
    const favorites = await useGetFavorites(getUser()._id);
    setFavoriteAITools(favorites);
    }
  }
  async function GettingAIToolsNames() {
    const aiTools = await useGetAITools();
    setAIToolsNames(aiTools);
  }

  useEffect(() => {
    GettingAIToolsDataByName();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedName]);
  useEffect(() => {
    GettingAIToolsNames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto Complete
  const search = () => {
    const filteredNames = aiToolsNames?.aiTools?.map((tool) => tool.name) || [];
    const filteredSuggestions = filteredNames.filter((name) =>
      name.toLowerCase().includes(names.toLowerCase())
    );
    setNamesArray(filteredSuggestions);
  };

  // Rendering multiples Cards
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
      <IconWrapper>
        <SVGDiv>
          <SearchOutlined />
        </SVGDiv>
        <AutoCompleteInput
          value={names}
          suggestions={namesArray}
          completeMethod={search}
          onChange={(e) => setNames(e.value)}
        ></AutoCompleteInput>
      </IconWrapper>

      <FilterArea />
      {groupedData.map((group, index) => (
        <Line key={index}>
          {group.map((content) => (
          <Card dados={{...content, favorite: favoriteAiTools.find( favoriteAiTool => favoriteAiTool['_id'] === content._id)}} key={content?.name} />
          ))}
        </Line>
      ))}
    </Container>
  );
}
