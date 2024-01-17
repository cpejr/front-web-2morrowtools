import { Container, CardsContainer, CardFavorite, SectionContainer, DivLine, Line, ButtonDiv } from "./Styles";
import useAuthStore from "../../stores/auth";
import { Card } from "../../components";
import { useState, useEffect } from "react";
import { useGetFavorites } from "../../services/ManagerService";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import Pagination from "../../components/features/Pagination/Pagination";
import { useMediaQuery } from "react-responsive";

export default function Favorites() {
  const { getUser, getToken } = useAuthStore();
  const [aiTools, setAITools] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(aiTools?.length / itemsPerPage);
  const isLargeDesktopScreen = useMediaQuery({ minWidth: 1371 });
  const isDesktopScreen = useMediaQuery({ minWidth: 1130 });
  const isMobileScreen = useMediaQuery({ maxWidth: 700 });
  const itemsPerRow = isLargeDesktopScreen ? 4 : isDesktopScreen ? 3 : isMobileScreen ? 1 : 2;
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };
  function scrollContainer(component, amount) {
    document.querySelector(`.${component}`).scrollBy({
      left: amount,
      behavior: "smooth",
    });
  }

  let cards = [];
  async function getFavorites() {
    if (getUser() !== null) {
      const favorites = await useGetFavorites(getUser()?._id);
      setAITools(favorites);
    }
  }
  const groupedData = [];
  for (let i = 0; i < aiTools?.length; i += itemsPerPage) {
    const pageData = aiTools?.slice(i, i + itemsPerPage);
    const rows = [];

    for (let j = 0; j < itemsPerPage / itemsPerRow; j++) {
      rows.push(pageData.slice(j * itemsPerRow, (j + 1) * itemsPerRow));
    }

    groupedData.push(rows);
  }

  Object.values(aiTools).map(function (content) {
    cards.push(<CardFavorite data={{ ...content, favorite: true }} key={content?.name} />);
  });

  useEffect(() => {
    if (getToken() === null) {
      window.location.href = "./";
    }
    getFavorites();
  }, []);

  return (
    <Container>
      <h1>SEUS FAVORITOS</h1>
      {aiTools.length == 0 ? (<h2>Nenhum Favorito foi encontrado!</h2>) : (<>
        {groupedData.map((page, pageIndex) => (
          <DivLine key={pageIndex} style={{ display: pageIndex === currentPage ? "flex" : "none" }}>
            {page.map((row, rowIndex) => (
              <Line key={rowIndex}>
                {row.map((content) => (
                  <Card
                    data={{
                      ...content,
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
      </>)}
    </Container>
  );
}
