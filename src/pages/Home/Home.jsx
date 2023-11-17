import { Container, HomeImage, InputStyled, Line } from "./Styles";
import homeImage from "../../assets/home-image.svg";
import { SearchOutlined } from "@ant-design/icons";
import { Card } from "../../components";
import techImage from "../../assets/tech.jpeg";
import { useMediaQuery } from "react-responsive";
import FilterArea from "../../components/FilterArea/FilterArea";

const data = [
  {
    image: techImage,
    name: "NOME",
    stars: 5,
    description:
      "Descrição Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet est mauris.",
    tags: ["tag lorem impsum", "tag lorem impsum", "tag lorem impsum"],
  },
  {
    image: techImage,
    name: "NOME",
    stars: 4,
    description:
      "Descrição Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet est mauris.",
    tags: ["tag lorem impsum", "tag lorem impsum"],
  },
  {
    image: techImage,
    name: "NOME",
    stars: 2,
    description:
      "Descrição Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet est mauris.",
    tags: ["tag lorem impsum"],
  },
  {
    image: techImage,
    name: "NOME",
    stars: 3,
    description:
      "Descrição Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet est mauris.",
    tags: ["tag lorem impsum", "tag lorem impsum", "tag lorem impsum"],
  },
];
export default function Home() {
  const groupedData = [];
  const isMobileScreen = useMediaQuery({ maxWidth: 700 });
  if (isMobileScreen) {
    for (let i = 0; i < data.length; i += 1) {
      groupedData.push(data.slice(i, i + 1));
    }
  } else {
    for (let i = 0; i < data.length; i += 2) {
      groupedData.push(data.slice(i, i + 2));
    }
  }
  return (
    <Container>
      <HomeImage src={homeImage} />
      <h1>2MORROW TOOLS</h1>
      <h2>O maior acervo de ferramentas e Inteligências Artificiais do Brasil </h2>
      <InputStyled type='primary' prefix={<SearchOutlined />}></InputStyled>
      <FilterArea></FilterArea>
      {groupedData.map((group) => (
        <Line key={group?.name}>
          {group.map((content) => (
            <Card dados={content} key={content?.name} />
          ))}
        </Line>
      ))}
    </Container>
  );
}
