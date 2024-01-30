import { CommentCollumn, Container, DeleteButton, Image, ImageContainer } from "./Styles";
import { useDeleteComments } from "../../services/ManagerService";
import PropTypes from "prop-types";
import useAuthStore from "../../stores/auth";
import { FaTrashCan } from "react-icons/fa6";
import { colors } from "../../styles/styleVariables";

export default function Comment({ data, onDelete }) {
  const { getUser } = useAuthStore();

  async function deleteComment() {
    const user = await getUser();
    await useDeleteComments(data._id, user);
    onDelete();
  }

  return (
    <Container>
      <ImageContainer>
        <Image src={data.id_user.imageURL} alt='Commenter image'></Image>
      </ImageContainer>

      <CommentCollumn>
        {data.id_user.name}
        <p> {data.comment} </p>
      </CommentCollumn>
      {getUser()?.type === "Admin" || name === getUser()?.name ? (
        <DeleteButton onClick={deleteComment}>
          <FaTrashCan size='20px' color={colors.white} />
        </DeleteButton>
      ) : null}
    </Container>
  );
}

Comment.propTypes = {
  data: PropTypes.object.isRequired,
  onDelete: PropTypes.func,
};
