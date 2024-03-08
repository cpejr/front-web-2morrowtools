import { useState, useEffect } from "react";

import { BlueButton, CommentContainer, CommentInput, CommentSection, LetComment } from "./Styles";
import { Comment } from "../../components";
import { useGetComments } from "../../services/ManagerService";

export default function Comments({ postId }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function postComment() {
    console.log(comment);
  }

  async function getComments() {
    //const comments = await useGetComments();
  }

  useEffect(() => {
    getComments();
  }, []);

  if (loading) {
    return (
      <Container>
        <Title>Carregando...</Title>
      </Container>
    );
  } else if (error) {
    return (
      <Container>
        <ErrorTitle>Erro ao carregar post, tente novamente com outro nome.</ErrorTitle>
      </Container>
    );
  } else {
    return (
      <CommentSection>
        <h1>COMENTÁRIOS</h1>
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
        <CommentContainer>
          {comments?.comments?.map((comment) => (
            <Comment key={comment?._id} data={comment} onDelete={gettingComments} />
          ))}
        </CommentContainer>
      </CommentSection>
    );
  }
}
