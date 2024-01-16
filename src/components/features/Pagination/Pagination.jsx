import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { PageButton, ArrowButton } from "./Styles";
import PropTypes from "prop-types";

const Pagination = ({
  currentPage,
  totalPages,
  handlePrevPage,
  handleNextPage,
  setCurrentPage,
}) => {
  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <>
      <ArrowButton onClick={handlePrevPage} disabled={currentPage === 0}>
        <ArrowLeftOutlined />
      </ArrowButton>

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

      <ArrowButton onClick={handleNextPage} disabled={currentPage === totalPages - 1}>
        <ArrowRightOutlined />
      </ArrowButton>
    </>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handlePrevPage: PropTypes.func.isRequired,
  handleNextPage: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
