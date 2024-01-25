import { Alert } from "antd";
import { ImageHolder, StyledCard, LineTags, Tag, Title, Text, Line } from "./Styles";
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
      <Line>Ler mais</Line>
    </StyledCard>
  );
}
