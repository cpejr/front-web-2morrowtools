import {
  BlueButton,
  CardLine,
  Comment,
  CommentDiv,
  CommentInput,
  Container,
  DiscoverData,
  DiscoverDiv,
  DiscoverInputs,
  DiscoverLine,
  FullInput,
  HalfInput,
  LetComment,
  OtherTools,
  ToolCollumn,
} from "./Styles";
import techImage from "../../assets/tech.png";
import { Card, Comments, Tool } from "../../components";
import { useMediaQuery } from "react-responsive";

const dataTools = [
  {
    image: techImage,
    name: "[ NOME ]",
    stars: 5,
    description:
      "Descrição breve Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet est mauris. Descrição breve Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet est mauris.",
    longDescription:
      "Descrição detalhada Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet est mauris. Descrição detalhada Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet est mauris. Descrição detalhada Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet est mauris. Descrição detalhada Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet est mauris. Descrição detalhada Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet est mauris. Descrição detalhada Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet est mauris. Descrição detalhada Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet est mauris.",
    videosrc:
      "https://www.youtube.com/embed/watch?v=nbibsxYbVlI&list=PLFrEPFZUBIjck5Q6oVs_5vR0qkz2X4lH1&index=3",
    videoTitle: "Ferramenta",
    categoryFeatures: "Lorem",
    categoryPrices: "Free",
    categoryProfessions: "Chat GPT",
  },
];

const comments = [
  {
    name: "Arthur",
    comment:
      "Descrição breve Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet est mauris. Descrição breve Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    name: "Lucas",
    comment:
      "Descrição breve Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet est mauris. Descrição breve Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    name: "Breno",
    comment:
      "Descrição breve Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet est mauris. Descrição breve Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    name: "Arthur",
    comment:
      "Descrição breve Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet est mauris. Descrição breve Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    name: "Lucas",
    comment:
      "Descrição breve Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet est mauris. Descrição breve Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    name: "Breno",
    comment:
      "Descrição breve Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet est mauris. Descrição breve Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    name: "Arthur",
    comment:
      "Descrição breve Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet est mauris. Descrição breve Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    name: "Lucas",
    comment:
      "Descrição breve Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet est mauris. Descrição breve Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    name: "Breno",
    comment:
      "Descrição breve Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet est mauris. Descrição breve Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
];
const dataCards = [
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
export default function Tools() {
  const groupedData = [];
  const isTabletScreen = useMediaQuery({ maxWidth: 1130 });
  const isMobileScreen = useMediaQuery({ maxWidth: 700 });
  if (isMobileScreen) {
    for (let i = 0; i < dataCards.length; i += 1) {
      groupedData.push(dataCards.slice(i, i + 1));
    }
  } else if (isTabletScreen) {
    for (let i = 0; i < dataCards.length; i += 2) {
      groupedData.push(dataCards.slice(i, i + 2));
    }
  } else {
    for (let i = 0; i < dataCards.length; i += 4) {
      groupedData.push(dataCards.slice(i, i + 4));
    }
  }
  return (
    <Container>
      <ToolCollumn>
        <Tool data={dataTools} />
      </ToolCollumn>

      <LetComment>
        <h2>Deixe seu comentário</h2>
        <CommentInput placeholder='Escreva seu Comentário:' />
        <BlueButton type='primary'>ENVIAR</BlueButton>
      </LetComment>
      <CommentDiv>
        <h1>COMENTÁRIOS</h1>
        <Comment>
          {comments.map((data) => (
            <Comments key={data?.name} data={data} />
          ))}
        </Comment>
      </CommentDiv>
      <OtherTools>
        <h1>OUTRAS FERRAMENTAS SIMILARES:</h1>
        {groupedData.map((group, groupIndex) => (
          <CardLine onClick={() => console.log(group)} key={groupIndex}>
            {group.map((content, contentIndex) => (
              <Card dados={content} key={contentIndex} />
            ))}
          </CardLine>
        ))}
      </OtherTools>
      <DiscoverDiv>
        <DiscoverData>
          <h6>Descubra novas ferramentas de tecnologia toda semana! </h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua
          </p>
        </DiscoverData>
        <DiscoverInputs>
          <DiscoverLine>
            <HalfInput placeholder='Nome:' />
            <HalfInput placeholder='E-mail:' type='email' />
          </DiscoverLine>
          <FullInput placeholder='Mensagem:' />
          <BlueButton type='primary'>ENVIAR</BlueButton>
        </DiscoverInputs>
      </DiscoverDiv>
    </Container>
  );
}
