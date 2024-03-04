import {
  AutoCompleteInput,
  Container,
  IconWrapper,
  Line,
  ButtonDiv,
  SVGDiv,
  DivLine,
} from "./Styles";
import { SearchOutlined } from "@ant-design/icons";
import { Post } from "../../components";

import { useEffect, useState } from "react";

import { useMediaQuery } from "react-responsive";
import Pagination from "../../components/features/Pagination/Pagination";
import { Newsletter, FilterAreaBlog } from "../../components";
import { useGetAllPosts } from "../../services/ManagerService";
import { toast } from "react-toastify";

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [postOptions, setPostOptions] = useState([]);
  const [nameQuery, setNameQuery] = useState("");
  const [filters, setFilters] = useState({
    sort: "date",
  });

  // Getting posts
  const getPosts = async (filters) => {
    const { response, error } = await useGetAllPosts(filters);
    if (error) {
      toast.error("Não foi possível receber os posts.");
    } else {
      setBlogPosts(response.data);
      setFilteredPosts(response.data);
    }
  };

  useEffect(() => {
    getPosts(filters);
  }, [filters]);
  const search = ({ query }) => {
    const filteredPosts = blogPosts.filter((post) =>
      post.name.toLowerCase().includes(query.toLowerCase())
    );
    const filteredPostNames = filteredPosts.map((post) => post.name);
    setPostOptions(filteredPostNames);
    setFilteredPosts(filteredPosts);
  };

  useEffect(() => {
    search({ query: nameQuery });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nameQuery]);

  // Pagination

  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  // Rendering multiples Cards

  const [groupedData, setGroupedData] = useState([]);
  const isLargeDesktopScreen = useMediaQuery({ minWidth: 1371 });
  const isDesktopScreen = useMediaQuery({ minWidth: 1130 });
  const isMobileScreen = useMediaQuery({ maxWidth: 700 });

  const setVisiblePosts = () => {
    setGroupedData([]);
    const itemsPerRow = isLargeDesktopScreen ? 2 : isDesktopScreen ? 2 : isMobileScreen ? 1 : 1;

    for (let i = 0; i < filteredPosts.length; i += itemsPerPage) {
      const pageData = filteredPosts.slice(i, i + itemsPerPage);
      let rows = [];

      for (let j = 0; j < itemsPerPage / itemsPerRow; j++) {
        rows.push(pageData.slice(j * itemsPerRow, (j + 1) * itemsPerRow));
        rows = rows.filter((item) => item[0]);
      }
      setGroupedData((prev) => [...prev, rows]);
    }
  };

  useEffect(() => {
    setVisiblePosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredPosts, isLargeDesktopScreen, isDesktopScreen, isMobileScreen]);
  return (
    <Container>
      <h1>Posts do Nosso Blog</h1>
      <IconWrapper>
        <SVGDiv>
          <SearchOutlined />
        </SVGDiv>
        <AutoCompleteInput
          suggestions={postOptions}
          completeMethod={search}
          value={nameQuery}
          onChange={(e) => setNameQuery(e.value)}
        />
      </IconWrapper>
      <FilterAreaBlog filterChanger={setFilters} />

      {groupedData.map((page, pageIndex) => (
        <DivLine key={pageIndex} isCurrentPage={pageIndex === currentPage}>
          {page.map((row, rowIndex) => (
            <Line key={rowIndex}>
              {row.map((content) => (
                <Post data={content} key={content._id} />
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
      <Newsletter />
    </Container>
  );
}
