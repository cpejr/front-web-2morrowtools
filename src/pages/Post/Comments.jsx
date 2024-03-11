import { useState, useEffect } from "react";

import {
  BlueButton,
  CommentContainer,
  CommentInput,
  CommentSection,
  LetComment,
  Title,
  ErrorTitle,
} from "./Styles";
import { Comment } from "../../components";
import { useGetComments, usePostComments } from "../../services/ManagerService";
import useAuthStore from "../../stores/auth";

export default function Comments({ postId }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { getUser } = useAuthStore();

  async function postComment() {
    setLoading(true);
    const result = await usePostComments({
      comment,
      id_user: getUser()?._id,
      id_post: postId,
    });
    setLoading(false);
    getComments();
  }
  async function getComments() {
    setLoading(true);
    const comments = await useGetComments(postId);
    setComments(comments);
    setLoading(false);
  }

  useEffect(() => {
    getComments();
  }, []);

  if (loading) {
    return (
      <CommentSection>
        <h2>Carregando...</h2>
      </CommentSection>
    );
  } else if (error) {
    return (
      <CommentSection>
        <h2>Erro ao carregar comentários, tente novamente com outro nome.</h2>
      </CommentSection>
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
            <Comment key={comment?._id} data={comment} onDelete={getComments} />
          ))}
        </CommentContainer>
      </CommentSection>
    );
  }
}
