import {
  Container,
  Section,
  Title,
  SmallDescription,
  Image,
  LargeDescription,
  Card,
  Categories,
  Tags,
} from "./Styles";

export default function Post() {
  const posts = [
    {
      title: "Ferramenta 1",
      tag: "Grátis",
      shortDescription: "Descrição curta",
      imageUrl: "https://picsum.photos/id/237/536/354",
      longDescription:
        "Sed ut perspiciatis unde omnis iste natus error sit Sed ut perspiciatis unde omnis iste natus error sit Sed ut perspiciatis unde omnis iste natus error sit",
    },
    {
      title: "Ferramenta 2",
      tag: "Artes",
      shortDescription: "Descrição curta",
      imageUrl: "https://picsum.photos/id/237/536/354",
      longDescription:
        "Sed ut perspiciatis unde omnis iste natus error sit Sed ut perspiciatis unde omnis iste natus error sit Sed ut perspiciatis unde omnis iste natus error sit",
    },
    {
      title: "Ferramenta 3",
      tag: "Computação",
      shortDescription: "Descrição curta",
      imageUrl: "https://picsum.photos/id/237/536/354",
      longDescription:
        "Sed ut perspiciatis unde omnis iste natus error sit Sed ut perspiciatis unde omnis iste natus error sit Sed ut perspiciatis unde omnis iste natus error sit",
    },
  ];

  return (
    <Container>
      {posts.map((post, index) => (
        <div key={index}>
          <Card>
            <Section>
              <Title>{post.title}</Title>
              <Tags>
                <Categories>{post.tag}</Categories>
                <Categories>{post.tag}</Categories>
              </Tags>
            </Section>

            <Section>
              <SmallDescription>{post.shortDescription}</SmallDescription>
            </Section>

            <Section>
              <Image src={post.imageUrl} alt={`Post Image ${index}`} />
            </Section>

            <Section>
              <LargeDescription>{post.longDescription}</LargeDescription>
            </Section>
          </Card>
        </div>
      ))}
    </Container>
  );
}
