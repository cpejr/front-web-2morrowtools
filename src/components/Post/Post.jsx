import { ImageHolder, StyledCard, LineTags, Tag, Title, Text, Link } from "./Styles";
import PropTypes from "prop-types";
export default function Post({ data }) {
  return (
    <StyledCard>
      <ImageHolder>{<img src={data.imageUrl} alt={data?.title} />}</ImageHolder>
      <LineTags>
        <Tag>{data.tagFeature}</Tag>
        <Tag>{data.tagProfession}</Tag>
        <Tag>{data.tagPrice}</Tag>
      </LineTags>
      <Title>{data.title}</Title>
      <Text>{data.shortDescription}</Text>
      <Link>Ler mais</Link>
    </StyledCard>
  );
}

Post.propTypes = {
  data: PropTypes.func.isRequired,
};
