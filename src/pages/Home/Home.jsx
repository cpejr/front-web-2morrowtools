import {
  AutoCompleteInput,
  Container,
  IconWrapper,
  Line,
  ButtonDiv,
  SVGDiv,
  DivLine,
  IANotFound,
  TrendingTools,
  RecentlyAddedTool,
} from "./Styles";
import { SearchOutlined } from "@ant-design/icons";
import { Card } from "../../components";
import FilterArea from "../../components/FilterArea/FilterArea";
import { useGetFavorites } from "../../services/ManagerService";
import { useEffect, useState } from "react";
import useAuthStore from "../../stores/auth";
import useDebounce from "../../services/useDebounce";
import { useMediaQuery } from "react-responsive";
import * as managerService from "../../services/ManagerService";
import Pagination from "../../components/features/Pagination/Pagination";
import { Newsletter } from "../../components";

export default function Home() {
  const [filteredAiTools, setFilteredAiTools] = useState([]);
  const [recentFilteredAiTools, setRecentFilteredAiTools] = useState([]);
  const [highRateFilteredAiTools, setHighRateFilteredAiTools] = useState([]);

  const [names, setNames] = useState("");
  const debouncedName = useDebounce(names);
  const [namesArray, setNamesArray] = useState([]);
  const [favoriteAiTools, setFavoriteAITools] = useState([]);
  const { getUser } = useAuthStore();
  const [features, setFeatures] = useState([]);
  const [prices, setPrices] = useState([]);
  const [profession, setProfession] = useState([]);
  const [categoryIDsArrays, setCategoryIDsArrays] = useState([]);
  const [filter, setFilter] = useState([]);

  // Pagination

  const [currentPage, setCurrentPage] = useState(0);
  const [highRateCurrentPage, setHighRateCurrentPage] = useState(0);
  const [recentCurrentPage, setRecentCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredAiTools?.aiTools?.length / itemsPerPage);
  const highRateTotalPages = Math.ceil(highRateFilteredAiTools?.aiTools?.length / itemsPerPage);
  const recentTotalPages = Math.ceil(recentFilteredAiTools?.aiTools?.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handleHighRatePrevPage = () => {
    setHighRateCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };
  const handleHighRateNextPage = () => {
    setHighRateCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handleRecentPrevPage = () => {
    setRecentCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };
  const handleRecentNextPage = () => {
    setRecentCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  // Rendering multiples Cards

  const groupedData = [];
  const highRateData = [];
  const recentData = [];
  const isLargeDesktopScreen = useMediaQuery({ minWidth: 1371 });
  const isDesktopScreen = useMediaQuery({ minWidth: 1130 });
  const isMobileScreen = useMediaQuery({ maxWidth: 700 });

  const itemsPerRow = isLargeDesktopScreen ? 3 : isDesktopScreen ? 3 : isMobileScreen ? 1 : 2;

  for (let i = 0; i < filteredAiTools?.aiTools?.length; i += itemsPerPage) {
    const pageData = filteredAiTools?.aiTools?.slice(i, i + itemsPerPage);
    const rows = [];

    for (let j = 0; j < itemsPerPage / itemsPerRow; j++) {
      rows.push(pageData.slice(j * itemsPerRow, (j + 1) * itemsPerRow));
    }

    groupedData.push(rows);
  }
  for (let i = 0; i < recentFilteredAiTools?.aiTools?.length; i += itemsPerPage) {
    const pageData = recentFilteredAiTools?.aiTools?.slice(i, i + itemsPerPage);
    const rows = [];

    for (let j = 0; j < itemsPerPage / itemsPerRow; j++) {
      rows.push(pageData.slice(j * itemsPerRow, (j + 1) * itemsPerRow));
    }

    recentData.push(rows);
  }
  for (let i = 0; i < highRateFilteredAiTools?.aiTools?.length; i += itemsPerPage) {
    const pageData = highRateFilteredAiTools?.aiTools?.slice(i, i + itemsPerPage);
    const rows = [];

    for (let j = 0; j < itemsPerPage / itemsPerRow; j++) {
      rows.push(pageData.slice(j * itemsPerRow, (j + 1) * itemsPerRow));
    }

    highRateData.push(rows);
  }

  // Backend Calls
  const convertArrayToString = (array) => {
    return array.join(",");
  };
  async function FilteringAIsByCategoriesIds() {
    const idsString = convertArrayToString(categoryIDsArrays);

    const filteredCategory = await managerService.useGetAIToolsByCategoryId({
      id: idsString,
      name: debouncedName,
      type: filter,
    });
    setFilteredAiTools(filteredCategory);
    if (!getUser()) {
      const favorites = await useGetFavorites(getUser()?._id);
      setFavoriteAITools(favorites);
    }
  }
  async function RecentSection() {
    const filteredCategory = await managerService.useGetAIToolsByCategoryId({
      type: "date",
    });
    setRecentFilteredAiTools(filteredCategory);
  }
  async function HighRateSection() {
    const filteredCategory = await managerService.useGetAIToolsByCategoryId({
      type: "avaliation",
    });
    setHighRateFilteredAiTools(filteredCategory);
  }

  useEffect(() => {
    FilteringAIsByCategoriesIds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedName]);
  useEffect(() => {
    FilteringAIsByCategoriesIds();
    HighRateSection();
    RecentSection();
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

  return (
    <Container>
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
        features={features}
        setFeatures={setFeatures}
        prices={prices}
        setPrices={setPrices}
        profession={profession}
        setProfession={setProfession}
        filter={filter}
        setFilter={setFilter}
      />
      {filteredAiTools?.aiTools && filteredAiTools?.aiTools.length === 0 && (
        <IANotFound>Nenhuma IA encontrada</IANotFound>
      )}
      {groupedData.map((page, pageIndex) => (
        <DivLine key={pageIndex} style={{ display: pageIndex === currentPage ? "flex" : "none" }}>
          {page.map((row, rowIndex) => (
            <Line key={rowIndex}>
              {row.map((content) => (
                <Card
                  data={{
                    ...content,
                    favorite: favoriteAiTools.find(
                      (favoriteAiTool) => favoriteAiTool["_id"] === content._id
                    ),
                  }}
                  key={content?.name}
                />
              ))}
            </Line>
          ))}
        </DivLine>
      ))}
      <ButtonDiv>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          setCurrentPage={setCurrentPage}
        />
      </ButtonDiv>
      <TrendingTools>
        <h1>Em Alta</h1>
        {highRateData.map((page, pageIndex) => (
          <DivLine key={pageIndex} style={{ display: pageIndex === currentPage ? "flex" : "none" }}>
            {page.map((row, rowIndex) => (
              <Line key={rowIndex}>
                {row.map((content) => (
                  <Card
                    data={{
                      ...content,
                      favorite: favoriteAiTools.find(
                        (favoriteAiTool) => favoriteAiTool["_id"] === content._id
                      ),
                    }}
                    key={content?.name}
                  />
                ))}
              </Line>
            ))}
          </DivLine>
        ))}
        <ButtonDiv>
          <Pagination
            currentPage={highRateCurrentPage}
            totalPages={highRateTotalPages}
            handlePrevPage={handleHighRatePrevPage}
            handleNextPage={handleHighRateNextPage}
            setCurrentPage={setHighRateCurrentPage}
          />
        </ButtonDiv>
      </TrendingTools>
      <RecentlyAddedTool>
        <h1>Adicionados Recentemente</h1>
        {recentData.map((page, pageIndex) => (
          <DivLine key={pageIndex} style={{ display: pageIndex === currentPage ? "flex" : "none" }}>
            {page.map((row, rowIndex) => (
              <Line key={rowIndex}>
                {row.map((content) => (
                  <Card
                    data={{
                      ...content,
                      favorite: favoriteAiTools.find(
                        (favoriteAiTool) => favoriteAiTool["_id"] === content._id
                      ),
                    }}
                    key={content?.name}
                  />
                ))}
              </Line>
            ))}
          </DivLine>
        ))}
        <ButtonDiv>
          <Pagination
            currentPage={recentCurrentPage}
            totalPages={recentTotalPages}
            handlePrevPage={handleRecentPrevPage}
            handleNextPage={handleRecentNextPage}
            setCurrentPage={setRecentCurrentPage}
          />
        </ButtonDiv>
      </RecentlyAddedTool>
      <Newsletter />
    </Container>
  );
}
