import { CommentCollumn, Container, DeleteButton, PhotoCollumn } from "./Styles";
import { BsPersonFill } from "react-icons/bs";
import { useDeleteComments, useGetuser } from "../../services/ManagerService";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import useAuthStore from "../../stores/auth";
import { FaTrashCan } from "react-icons/fa6";

export default function Comments({ data, onDelete }) {
  const { getUser } = useAuthStore();
  const [name, setName] = useState("");
  async function deleteComment() {
    const user = await getUser();
    await useDeleteComments(data._id, user);
    onDelete();
  }

  async function GettingName() {
    const res = await useGetuser(data.id_user);
    setName(res.name);
  }

  useEffect(() => {
    GettingName();
  }, []);
  return (
    <Container>
      <PhotoCollumn>
        <BsPersonFill />
      </PhotoCollumn>
      <CommentCollumn>
        {name}
        <p> {data.comment} </p>
      </CommentCollumn>
      <DeleteButton onClick={deleteComment}>
        <FaTrashCan size='20px' />
      </DeleteButton>
    </Container>
  );
}
Comments.propTypes = {
  data: PropTypes.object.isRequired,
};
