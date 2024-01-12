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
import { Card, Comments, Tool } from "../../components";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { useEffect } from "react";
import {
  useGetAITools,
  useGetAIToolsByName,
  useGetComments,
  usePostComments,
} from "../../services/ManagerService";
import { useParams } from "react-router-dom";
import useAuthStore from "../../stores/auth";
import { Affix } from "antd";

const comments = [
  {
    name: "Arthur",
    comment:
      "Descrição breve Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet est mauris. Descrição breve Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
];
var text;
export default function Tools() {
  const { getUser } = useAuthStore();
  const [aiToolsByName, setAIToolsByName] = useState({});
  const [commments, setComments] = useState([]);

  //backend calls
  const { name } = useParams();
  async function GettingAIToolsDataByName() {
    const aiTools = await useGetAIToolsByName({ name });
    setAIToolsByName(aiTools);
  }

  async function PostComment() {
    usePostComments({
      comment: text,
      id_user: getUser()?._id,
      id_ia: aiToolsByName.aiTools[0]._id,
    });
  }
  async function GettingComments() {
    const res = await useGetComments({ name });
    setComments(res);
  }
  console.log("isso é um", commments);
  useEffect(() => {
    GettingAIToolsDataByName();
    GettingAIToolsData();
    GettingComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [aiTools, setAITools] = useState({});

  async function GettingAIToolsData() {
    const aiTools = await useGetAITools();
    setAITools(aiTools);
  }

  // Grouping Data
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
      <ToolCollumn>
        <Tool data={aiToolsByName} />
      </ToolCollumn>

      <LetComment>
        <h2>Deixe seu comentário</h2>
        <CommentInput
          onChange={(e) => (text = e.target.value)}
          placeholder='Escreva seu Comentário:'
        />
        <BlueButton onClick={PostComment} type='primary'>
          ENVIAR
        </BlueButton>
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
          <CardLine key={groupIndex}>
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
