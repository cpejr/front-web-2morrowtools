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
  const [postNames, setPostNames] = useState([]);
  const posts = [
    {
      title: "Conheça essas 5novas funçoes do chat GPT",
      shortDescription:
        "O chat Glorem ipsonlorem ipson lorem ipsonlorem ipson lorem ipsonlorem ipson lorem ipson",
      imageUrl: "https://picsum.photos/id/237/536/354",
      longDescription: "textotextotextotextotexto",
      tagProfession: "engenharia",
      tagPrice: "10",
      tagFeature: "review de codigo",
    },
    {
      title: "Conheça essas 5novas funçoes do chat GPT",
      shortDescription:
        "O chat GPt amplamente utilizado nos dias de hj possui  funçoes que vc nao faz ideia lorem ipson lorem ipsonlorem ipson lorem ipsonlorem ipson lorem ipsonlorem ipson lorem ipsonlorem ipson lorem ipsonlorem ipson lorem ipson",
      imageUrl: "https://picsum.photos/id/237/536/354",
      longDescription: "textotextotextotextotexto",
      tagProfession: "engenharia",
      tagPrice: "10",
      tagFeature: "review de codigo",
    },
    {
      title: "Conheça essas 5novas funçoes do chat GPT",
      shortDescription: "bem pequeno pra ver",
      imageUrl: "https://picsum.photos/id/237/536/354",
      longDescription: "textotextotextotextotexto",
      tagProfession: "engenharia",
      tagPrice: "10",
      tagFeature: "review de codigo",
    },
    {
      title: "Conheça essas 5novas funçoes do chat GPT",
      shortDescription:
        "O chat GPt amplamente utilizado nos dias de hj possui  funçoes que vc nao faz ideia lorem ipson lorem ipsonlorem ipson lorem ipsonlorem ipson lorem ipsonlorem ipson lorem ipsonlorem ipson lorem ipsonlorem ipson lorem ipson",
      imageUrl: "https://picsum.photos/id/237/536/354",
      longDescription: "textotextotextotextotexto",
      tagProfession: "engenharia",
      tagPrice: "10",
      tagFeature: "review de codigo",
    },
    {
      title: "Conheça essas 5novas funçoes do chat GPT",
      shortDescription:
        "O chat GPt amplamente utilizado nos dias de hj possui  funçoes que vc nao faz ideia lorem ipson lorem ipsonlorem ipson lorem ipsonlorem ipson lorem ipsonlorem ipson lorem ipsonlorem ipson lorem ipsonlorem ipson lorem ipson",
      imageUrl: "https://picsum.photos/id/237/536/354",
      longDescription: "textotextotextotextotexto",
      tagProfession: "engenharia",
      tagPrice: "10",
      tagFeature: "review de codigo",
    },
    {
      title: "Conheça essas 5novas funçoes do chat GPT",
      shortDescription:
        "O chat GPt amplamente utilizado nos dias de hj possui  funçoes que vc nao faz ideia lorem ipson lorem ipsonlorem ipson lorem ipsonlorem ipson lorem ipsonlorem ipson lorem ipsonlorem ipson lorem ipsonlorem ipson lorem ipson",
      imageUrl: "https://picsum.photos/id/237/536/354",
      longDescription: "textotextotextotextotexto",
      tagProfession: "engenharia",
      tagPrice: "10",
      tagFeature: "review de codigo",
    },
    {
      title: "Conheça essas 5novas funçoes do chat GPT",
      shortDescription:
        "O chat GPt amplamente utilizado nos dias de hj possui  funçoes que vc nao faz ideia lorem ipson lorem ipsonlorem ipson lorem ipsonlorem ipson lorem ipsonlorem ipson lorem ipsonlorem ipson lorem ipsonlorem ipson lorem ipson",
      imageUrl: "https://picsum.photos/id/237/536/354",
      longDescription: "textotextotextotextotexto",
      tagProfession: "engenharia",
      tagPrice: "10",
      tagFeature: "review de codigo",
    },
    {
      title: "Conheça essas 5novas funçoes do chat GPT",
      shortDescription:
        "O chat GPt amplamente utilizado nos dias de hj possui  funçoes que vc nao faz ideia lorem ipson lorem ipsonlorem ipson lorem ipsonlorem ipson lorem ipsonlorem ipson lorem ipsonlorem ipson lorem ipsonlorem ipson lorem ipson",
      imageUrl: "https://picsum.photos/id/237/536/354",
      longDescription: "textotextotextotextotexto",
      tagProfession: "engenharia",
      tagPrice: "10",
      tagFeature: "review de codigo",
    },
    {
      title: "Conheça essas 5novas funçoes do chat GPT",
      shortDescription:
        "O chat GPt amplamente utilizado nos dias de hj possui  funçoes que vc nao faz ideia lorem ipson lorem ipsonlorem ipson lorem ipsonlorem ipson lorem ipsonlorem ipson lorem ipsonlorem ipson lorem ipsonlorem ipson lorem ipson",
      imageUrl: "https://picsum.photos/id/237/536/354",
      longDescription: "textotextotextotextotexto",
      tagProfession: "engenharia",
      tagPrice: "10",
      tagFeature: "review de codigo",
    },
  ];

  // Getting posts
  const getPosts = async () => {
    const { response, error } = await useGetAllPosts();
    if (error) {
      toast.error("Não foi possível receber os posts.");
    } else {
      setBlogPosts(response.data);
      setPostNames(response.data.map((post) => post.name));
    }
  };
  console.log("BlogPosts", blogPosts);
  console.log("postNames", postNames);

  useEffect(() => {
    getPosts();
  }, []);

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

  const groupedData = [];
  const isLargeDesktopScreen = useMediaQuery({ minWidth: 1371 });
  const isDesktopScreen = useMediaQuery({ minWidth: 1130 });
  const isMobileScreen = useMediaQuery({ maxWidth: 700 });

  const itemsPerRow = isLargeDesktopScreen ? 2 : isDesktopScreen ? 2 : isMobileScreen ? 1 : 1;

  for (let i = 0; i < posts.length; i += itemsPerPage) {
    const pageData = posts.slice(i, i + itemsPerPage);
    const rows = [];

    for (let j = 0; j < itemsPerPage / itemsPerRow; j++) {
      rows.push(pageData.slice(j * itemsPerRow, (j + 1) * itemsPerRow));
    }

    groupedData.push(rows);
  }

  return (
    <Container>
      <h1>Posts do Nosso Blog</h1>
      <IconWrapper>
        <SVGDiv>
          <SearchOutlined />
        </SVGDiv>
        <AutoCompleteInput />
      </IconWrapper>
      <FilterAreaBlog />

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
