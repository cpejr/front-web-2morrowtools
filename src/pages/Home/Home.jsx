import {
  AutoCompleteInput,
  Container,
  HomeImage,
  IconWrapper,
  Line,
  PageButton,
  SVGDiv,
} from "./Styles";
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

  // Pagination
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(aiTools?.aiTools?.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  // Backend Calls
  async function GettingAIToolsDataByName() {
    const aiTools = await useGetAIToolsByName({ name: debouncedName });
    setAITools(aiTools);
    if (!getUser()) {
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
        <Line key={index} style={{ display: index === currentPage ? "flex" : "none" }}>
          {group.map((content) => (
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

      <div>
        {/* Botão "Anterior" */}
        <button onClick={handlePrevPage} disabled={currentPage === 0}>
          Anterior
        </button>

        {/* Botão da página 1 */}
        {currentPage !== 0 && currentPage > 3 && (
          <PageButton key={1} onClick={() => setCurrentPage(0)} isActive={0 === currentPage}>
            1
          </PageButton>
        )}

        {currentPage >= 5 && <span>...</span>}

        {generatePageNumbers()
          .slice(Math.max(0, currentPage - 3), currentPage)
          .map((page) => (
            <PageButton
              key={page}
              onClick={() => setCurrentPage(page - 1)}
              isActive={page - 1 === currentPage}
            >
              {page}
            </PageButton>
          ))}

        <PageButton isActive={true}>{currentPage + 1}</PageButton>

        {generatePageNumbers()
          .slice(currentPage + 1, currentPage + 4)
          .map((page) => (
            <PageButton
              key={page}
              onClick={() => setCurrentPage(page - 1)}
              isActive={page - 1 === currentPage}
            >
              {page}
            </PageButton>
          ))}

        {currentPage <= totalPages - 6 && <span>...</span>}

        {currentPage !== totalPages - 1 && currentPage <= totalPages - 5 && (
          <PageButton
            key={totalPages}
            onClick={() => setCurrentPage(totalPages - 1)}
            isActive={totalPages - 1 === currentPage}
          >
            {totalPages}
          </PageButton>
        )}

        <button onClick={handleNextPage} disabled={currentPage === totalPages - 1}>
          Próximo
        </button>
      </div>
    </Container>
  );
}
