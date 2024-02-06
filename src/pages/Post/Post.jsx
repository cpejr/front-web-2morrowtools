import { useParams } from "react-router-dom";
import {
  Container,
  Section,
  Title,
  SmallDescription,
  Image,
  LargeDescription,
  TagsLine,
  Tag,
} from "./Styles";

export default function Post() {
  const { name } = useParams();

  const post = {
    title: "Ferramenta 1",
    tag: "Grátis",
    shortDescription: "Descrição curta",
    imageUrl: "https://picsum.photos/id/237/536/354",
    longDescription:
      "Sed ut perspiciatis unde omnis iste natus error sit Sed ut perspiciatis unde omnis iste natus error sit Sed ut perspiciatis unde omnis iste natus error sit",
  };

  return (
    <Container>
      <Section>
        <Title>{post.title}</Title>
        <TagsLine>
          <Tag> {post.tag} </Tag>
          <Tag> {post.tag} </Tag>
        </TagsLine>
      </Section>

      <SmallDescription>{post.shortDescription}</SmallDescription>

      <Image src={post.imageUrl} />

      <LargeDescription>{post.longDescription}</LargeDescription>
    </Container>
  );
}
