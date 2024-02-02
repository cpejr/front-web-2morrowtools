import {
  Container,
  Section,
  Title,
  Categories,
  SmallDescription,
  Image,
  LargeDescription,
} from "./Styles";

export default function Post() {
  const posts = [
    {
      title: "Ferramenta 1",
      categories: "IA/Visão computacional/Processamento de audio",
      shortDescription: "Descrição curta",
      imageUrl: "https://picsum.photos/id/237/536/354",
      longDescription:
        "Sed ut perspiciatis unde omnis iste natus error sit Sed ut perspiciatis unde omnis iste natus error sit Sed ut perspiciatis unde omnis iste natus error sit",
    },
    {
      title: "Ferramenta 2",
      categories: "IA/Visão computacional/Processamento de audio",
      shortDescription: "Descrição curta",
      imageUrl: "https://picsum.photos/id/237/536/354",
      longDescription:
        "Sed ut perspiciatis unde omnis iste natus error sit Sed ut perspiciatis unde omnis iste natus error sit Sed ut perspiciatis unde omnis iste natus error sit",
    },
    {
      title: "Ferramenta 3",
      categories: "IA/Visão computacional/Processamento de audio",
      shortDescription: "Descrição curta",
      imageUrl: "https://picsum.photos/id/237/536/354",
      longDescription:
        "Sed ut perspiciatis unde omnis iste natus error sit Sed ut perspiciatis unde omnis iste natus error sit Sed ut perspiciatis unde omnis iste natus error sit",
    },
  ];

  return (
    <Container>
      <div>Página específica de post</div>

      {posts.map((post, index) => (
        <div key={index}>
          <Section>
            <Title>{post.title}</Title>
            <Categories>{post.categories}</Categories>
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
        </div>
      ))}
    </Container>
  );
}
