/* eslint-disable react-hooks/rules-of-hooks */
import {
  BlueButton,
  ButtonDiv,
  CommentContainer,
  CommentSection,
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
import { Card, Comment, Tool } from "../../components";
import { useState } from "react";
import { useEffect } from "react";
import {
  useGetAIToolsByCategoryId,
  useGetAIToolsByName,
  useGetComments,
  usePostComments,
  usePostNewsletter,
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
  const [nameInput, setNameInput] = useState("");
  const [email, setEmail] = useState("");
  const [message, SetMessage] = useState("");
  const similarIDs = [
    aiToolsByName?.aiTools?.[0]?.id_categoryfeature?._id,
    aiToolsByName?.aiTools?.[0]?.id_categoryprice?._id,
    aiToolsByName?.aiTools?.[0]?.id_categoryprofession?._id,
  ];

  //Backend calls

  async function PostNewsletter() {
    await usePostNewsletter({
      name: nameInput,
      email: email,
      message: message,
    });
  }

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

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(aiTools?.aiTools?.length / itemsPerPage);
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  return (
    <Container>
      <ToolCollumn>{aiToolsByName.aiTools && <Tool data={aiToolsByName} />}</ToolCollumn>
      <DiscoverDiv style={{ display: "none" }}>
        <DiscoverData>
          <h6>Descubra novas ferramentas de tecnologia toda semana! </h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua
          </p>
        </DiscoverData>
        <DiscoverInputs>
          <DiscoverLine>
            <HalfInput onChange={(e) => setNameInput(e.target.value)} placeholder='Nome:' />
            <HalfInput
              onChange={(e) => setEmail(e.target.value)}
              placeholder='E-mail:'
              type='email'
            />
          </DiscoverLine>
          <FullInput onChange={(e) => SetMessage(e.target.value)} placeholder='Mensagem:' />
          <BlueButton onClick={PostNewsletter} type='primary'>
            ENVIAR
          </BlueButton>
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
      <CommentSection>
        <h1>COMENTÁRIOS</h1>
        <CommentContainer>
          {comments?.comments?.map((comment) => (
            <Comment key={comment?._id} data={comment} onDelete={gettingComments} />
          ))}
        </CommentContainer>
      </CommentSection>
      <OtherTools>
        <h1>OUTRAS FERRAMENTAS SIMILARES:</h1>
        <DivLine>
          <Line>
            {aiTools?.aiTools
              ?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
              .map((content, index) => (
                <Card
                  data={{
                    ...content,
                  }}
                  key={index}
                />
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
      </OtherTools>
    </Container>
  );
}
