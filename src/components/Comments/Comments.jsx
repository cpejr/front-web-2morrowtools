import { CommentCollumn, Container, PhotoCollumn } from "./Styles";
import { BsPersonFill } from "react-icons/bs";
import { useDeleteComments, useGetuser } from "../../services/ManagerService";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import useAuthStore from "../../stores/auth";

export default function Comments({ data, onDelete }) {
  const { getUser } = useAuthStore();
  const [name, setName] = useState("");
  async function deleteComment() {
    const user = await getUser().userFound;
    const res = await useDeleteComments(data._id, user);
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
      <button onClick={deleteComment}></button>
    </Container>
  );
}
Comments.propTypes = {
  data: PropTypes.object.isRequired,
};
