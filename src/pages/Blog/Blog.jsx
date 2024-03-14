/* eslint-disable react-hooks/exhaustive-deps */
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

import Pagination from "../../components/features/Pagination/Pagination";
import { Newsletter, FilterAreaBlog } from "../../components";
import { useFilterCategoryPosts } from "../../services/ManagerService";
import useDebounce from "../../services/useDebounce";

export default function Blog() {
  const [postOptions, setPostOptions] = useState([]);
  const [filters, setFilters] = useState({
    sort: "date",
  });
  const [features, setFeatures] = useState([]);
  const [profession, setProfession] = useState([]);
  const [idsArray, setIdsArray] = useState([]);
  const [posts, setPosts] = useState([]);
  const [names, setNames] = useState("");
  const debouncedName = useDebounce(names);

  // Getting posts

  const convertArrayToString = (array) => {
    return array.join(",");
  };

  async function GetFilterCategoy() {
    const idsString = convertArrayToString(idsArray);

    const response = await useFilterCategoryPosts({
      id: idsString,
      name: debouncedName,
      type: filters.sort,
    });
    setPosts(response);
  }
  async function ResetFilter() {
    const response = await useFilterCategoryPosts({});
    setPosts(response);
  }
  useEffect(() => {
    GetFilterCategoy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedName]);
  -useEffect(() => {
    GetFilterCategoy();
  }, []);
  const search = () => {
    const filteredPosts = posts?.map((post) => post.name) || [];
    const filteredPostNames = filteredPosts.filter((name) =>
      name.toLowerCase().includes(names.toLowerCase())
    );
    setPostOptions(filteredPostNames);
  };

  // Pagination

  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 8;
  const totalPages = Math.ceil(posts.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  // Rendering multiples Cards

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
          value={names}
          onChange={(e) => setNames(e.value)}
        />
      </IconWrapper>
      <FilterAreaBlog
        onFilterClick={GetFilterCategoy}
        onFilterReset={ResetFilter}
        filterChanger={setFilters}
        features={features}
        setFeatures={setFeatures}
        profession={profession}
        setProfession={setProfession}
        setArray={setIdsArray}
      />

      <DivLine>
        <Line>
          {posts
            ?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
            .map((content, index) => (
              <Post data={content} key={index} />
            ))}
        </Line>
      </DivLine>
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
