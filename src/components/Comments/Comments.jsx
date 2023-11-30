import { CommentCollumn, Container, PhotoCollumn } from "./Styles";
import { BsPersonFill } from "react-icons/bs";
import PropTypes from "prop-types";

export default function Comments({ data }) {
  return (
    <Container>
      <PhotoCollumn>
        <BsPersonFill />
      </PhotoCollumn>
      <CommentCollumn>
        {data.name}
        <p> {data.comment} </p>
      </CommentCollumn>
    </Container>
  );
}
Comments.propTypes = {
  data: PropTypes.object.isRequired,
};
