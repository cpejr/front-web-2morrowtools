import { CommentCollumn, Container, PhotoCollumn } from "./Styles";
import { BsPersonFill } from "react-icons/bs";
import { useDeleteComments, useGetuser } from "../../services/ManagerService";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function Comments({ data }) {
  const [name, setName] = useState("");

  async function deleteComment() {
    console.log("veio ate aqui2");
    console.log("id:", data._id, "user:", data.id_user);
    const res = await useDeleteComments(data._id, data.id_user);
    console.log(res);
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
