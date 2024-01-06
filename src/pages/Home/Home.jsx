import { AutoCompleteInput, Container, HomeImage, IconWrapper, Line, SVGDiv } from "./Styles";
import homeImage from "../../assets/home-image.svg";
import { SearchOutlined } from "@ant-design/icons";
import { Card } from "../../components";
import { useMediaQuery } from "react-responsive";
import FilterArea from "../../components/FilterArea/FilterArea";
import { useGetFavorites } from "../../services/ManagerService";
import { useEffect, useState } from "react";
import useAuthStore from "../../stores/auth";
import useDebounce from "../../services/useDebounce";
import * as managerService from "../../services/ManagerService";

export default function Home() {
  const [filteredAiTools, setFilteredAiTools] = useState([]);
  const [names, setNames] = useState("");
  const debouncedName = useDebounce(names);
  const [namesArray, setNamesArray] = useState([]);
  const [favoriteAiTools, setFavoriteAITools] = useState([]);
  const { getUser } = useAuthStore();
  const [categoryIDsArrays, setCategoryIDsArrays] = useState([]);

  // Backend Calls

  const convertArrayToString = (array) => {
    return array.join(",");
  };
  async function FilteringAIsByCategoriesIds() {
    const idsString = convertArrayToString(categoryIDsArrays);
    const filteredCategory = await managerService.useGetAIToolsByCategoryId({
      id: idsString,
      name: debouncedName,
    });
    setFilteredAiTools(filteredCategory);
    if (!getUser()) {
      const favorites = await useGetFavorites(getUser()._id);
      setFavoriteAITools(favorites);
    }
  }

  useEffect(() => {
    FilteringAIsByCategoriesIds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedName]);
  useEffect(() => {
    FilteringAIsByCategoriesIds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto Complete

  const search = () => {
    const filteredNames = filteredAiTools?.aiTools?.map((tool) => tool.name) || [];
    const filteredSuggestions = filteredNames.filter((name) =>
      name.toLowerCase().includes(names.toLowerCase())
    );
    setNamesArray(filteredSuggestions);
  };

  //Category Filter

  const handleFilterClick = () => {
    FilteringAIsByCategoriesIds();
  };

  async function handleFilterReset() {
    const filteredCategory = await managerService.useGetAIToolsByCategoryId({});
    setFilteredAiTools(filteredCategory);
    if (!getUser()) {
      const favorites = await useGetFavorites(getUser()._id);
      setFavoriteAITools(favorites);
    }
  }

  // Rendering multiples Cards

  const groupedData = [];
  const isSmallDesktop = useMediaQuery({ maxWidth: 1370 });
  const isTabletScreen = useMediaQuery({ maxWidth: 1130 });
  const isMobileScreen = useMediaQuery({ maxWidth: 700 });
  if (isMobileScreen) {
    for (let i = 0; i < filteredAiTools?.aiTools?.length; i += 1) {
      groupedData.push(filteredAiTools?.aiTools?.slice(i, i + 1));
    }
  } else if (isTabletScreen) {
    for (let i = 0; i < filteredAiTools?.aiTools?.length; i += 2) {
      groupedData.push(filteredAiTools?.aiTools?.slice(i, i + 2));
    }
  } else if (isSmallDesktop) {
    for (let i = 0; i < filteredAiTools?.aiTools?.length; i += 3) {
      groupedData.push(filteredAiTools?.aiTools?.slice(i, i + 3));
    }
  } else {
    for (let i = 0; i < filteredAiTools?.aiTools?.length; i += 3) {
      groupedData.push(filteredAiTools?.aiTools?.slice(i, i + 3));
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

      <FilterArea
        onFilterClick={handleFilterClick}
        idsArray={categoryIDsArrays}
        setArray={setCategoryIDsArrays}
        filterReset={handleFilterReset}
      />
      {groupedData?.map((group, index) => (
        <Line key={index}>
          {group?.map((content) => (
            <Card
              data={{
                ...content,
                favorite: favoriteAiTools.find(
                  (favoriteAiTool) => favoriteAiTool["_id"] === content._id
                ),
              }}
              key={content?._id}
            />
          ))}
        </Line>
      ))}
    </Container>
  );
}
