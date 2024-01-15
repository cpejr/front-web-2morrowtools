import { CommentCollumn, Container, PhotoCollumn } from "./Styles";
import { BsPersonFill } from "react-icons/bs";
import { useDeleteComments, useGetuser } from "../../services/ManagerService";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function Comments({ data, onDelete }) {
  const [user, setUser] = useState("");

  async function deleteComment() {
    const res = await useDeleteComments(data._id, user);
    onDelete();
  }

  async function GettingUser() {
    const res = await useGetuser(data.id_user);
    setUser(res);
  }

  useEffect(() => {
    GettingUser();
  }, []);
  return (
    <Container>
      <PhotoCollumn>
        <BsPersonFill />
      </PhotoCollumn>
      <CommentCollumn>
        {user.name}
        <p> {data.comment} </p>
      </CommentCollumn>
      <button onClick={deleteComment}></button>
    </Container>
  );
}
Comments.propTypes = {
  data: PropTypes.object.isRequired,
};
