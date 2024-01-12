import { CommentCollumn, Container, PhotoCollumn } from "./Styles";
import { BsPersonFill } from "react-icons/bs";
import { useDeleteComments } from "../../services/ManagerService";
import PropTypes from "prop-types";

export default function Comments({ data }) {
  async function deleteComment() {
    console.log("veio ate aqui2");
    console.log("id:", data._id, "user:", data.id_user);
    const res = await useDeleteComments(data._id, data.id_user);
    console.log(res);
  }
  return (
    <Container>
      <PhotoCollumn>
        <BsPersonFill />
      </PhotoCollumn>
      <CommentCollumn>
        {data.name}
        <p> {data.comment} </p>
      </CommentCollumn>
      <button onClick={deleteComment}></button>
    </Container>
  );
}
Comments.propTypes = {
  data: PropTypes.object.isRequired,
};
