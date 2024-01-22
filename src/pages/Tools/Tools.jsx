/* eslint-disable react-hooks/rules-of-hooks */
import {
  BlueButton,
  ButtonDiv,
  CardLine,
  Comment,
  CommentDiv,
  CommentInput,
  Container,
  DiscoverData,
  DiscoverDiv,
  DiscoverInputs,
  DiscoverLine,
  DivLine,
  FullInput,
  HalfInput,
  LetComment,
  Line,
  OtherTools,
  ToolCollumn,
} from "./Styles";
import { Card, Comments, Tool } from "../../components";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { useEffect } from "react";
import {
  useGetAIToolsByCategoryId,
  useGetAIToolsByName,
  useGetComments,
  usePostComments,
} from "../../services/ManagerService";
import { useParams } from "react-router-dom";
import useAuthStore from "../../stores/auth";
import Pagination from "../../components/features/Pagination/Pagination";

export default function Tools() {
  // Variables

  const { getUser } = useAuthStore();
  const { name } = useParams();
  const [aiTools, setAITools] = useState({});
  const [aiToolsByName, setAIToolsByName] = useState({});
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const similarIDs = [
    aiToolsByName?.aiTools?.[0]?.id_categoryfeature?._id,
    aiToolsByName?.aiTools?.[0]?.id_categoryprice?._id,
    aiToolsByName?.aiTools?.[0]?.id_categoryprofession?._id,
  ];

  //Backend calls

  async function gettingAIToolsDataByName() {
    const aiTools = await useGetAIToolsByName({ name });
    setAIToolsByName(aiTools);
  }

  async function postComment() {
    usePostComments({
      comment,
      id_user: getUser()?._id,
      id_ia: aiToolsByName.aiTools[0]._id,
    });
    gettingComments();
  }
  async function gettingComments() {
    const res = await useGetComments(aiToolsByName?.aiTools[0]?._id);
    setComments(res);
  }

  const convertArrayToString = (array) => {
    return array.join(",");
  };
  async function similarAITools() {
    const idsString = convertArrayToString(similarIDs);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const aiTools = await useGetAIToolsByCategoryId({
      id: idsString,
    });
    setAITools(aiTools);
  }

  useEffect(() => {
    gettingAIToolsDataByName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    gettingComments();
    similarAITools();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aiToolsByName]);

  // Grouping Data

  const groupedData = [];
  const isLargeDesktopScreen = useMediaQuery({ minWidth: 1371 });
  const isDesktopScreen = useMediaQuery({ minWidth: 1130 });
  const isMobileScreen = useMediaQuery({ maxWidth: 700 });
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(aiTools?.aiTools?.length / itemsPerPage);
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };
  const itemsPerRow = isLargeDesktopScreen ? 3 : isDesktopScreen ? 3 : isMobileScreen ? 1 : 2;
  for (let i = 0; i < aiTools?.aiTools?.length; i += itemsPerPage) {
    const pageData = aiTools?.aiTools?.slice(i, i + itemsPerPage);
    const rows = [];

    for (let j = 0; j < itemsPerPage / itemsPerRow; j++) {
      rows.push(pageData.slice(j * itemsPerRow, (j + 1) * itemsPerRow));
    }

    groupedData.push(rows);
  }

  return (
    <Container>
      <ToolCollumn>
        <Tool data={aiToolsByName} />
      </ToolCollumn>
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
      <LetComment>
        <h2>Deixe seu comentário</h2>
        <CommentInput
          onChange={(e) => setComment(e.target.value)}
          placeholder='Escreva seu Comentário:'
        />
        <BlueButton onClick={postComment} type='primary'>
          ENVIAR
        </BlueButton>
      </LetComment>
      <CommentDiv>
        <h1>COMENTÁRIOS</h1>
        <Comment>
          {comments?.comments?.map((comment) => (
            <Comments key={comment?._id} data={comment} onDelete={gettingComments} />
          ))}
        </Comment>
      </CommentDiv>
      <OtherTools>
        <h1>OUTRAS FERRAMENTAS SIMILARES:</h1>
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
      </OtherTools>
    </Container>
  );
}
