/* eslint-disable react-hooks/rules-of-hooks */
import {
  BlueButton,
  CommentContainer,
  CommentSection,
  CommentInput,
  Container,
  DivLine,
  LetComment,
  Line,
  OtherTools,
  ToolCollumn,
} from "./Styles";
import { Card, Comment, Newsletter, Tool } from "../../components";
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

export default function Tools() {
  // Variables

  const { getUser } = useAuthStore();
  const { name } = useParams();
  const [aiTools, setAITools] = useState({});
  const [aiToolsByName, setAIToolsByName] = useState({});
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const similarIDs = [
    ...(aiToolsByName?.aiTools?.[0]?.id_categoryfeatures || []),
    ...(aiToolsByName?.aiTools?.[0]?.id_categoryprices || []),
    ...(aiToolsByName?.aiTools?.[0]?.id_categoryprofessions || []),
  ];

  const extractedIDs = similarIDs.flatMap((obj) => obj._id);

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
    const idsString = convertArrayToString(extractedIDs);
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

  return (
    <Container>
      <ToolCollumn>{aiToolsByName.aiTools && <Tool data={aiToolsByName} />}</ToolCollumn>
      <Newsletter />
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
        {aiTools?.aiTools && aiTools.aiTools.length > 0 ? (
          <div>
            <DivLine>
              <Line>
                {aiTools?.aiTools
                  ?.slice(0, 8) // Aqui estamos renderizando apenas os primeiros 8 elementos
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
          </div>
        ) : (
          <h2>Nenhuma IA semelhante encontrada</h2>
        )}
      </OtherTools>
    </Container>
  );
}
