import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as managerService from "../../services/ManagerService";
import {
  Tag,
  Title,
  Image,
  TagsLine,
  Container,
  ErrorTitle,
  HtmlContainer,
  SmallDescription,
  OtherTools,
  DivLine,
  Line,
} from "./Styles";
import DOMPurify from "dompurify";
import Comments from "./Comments";
import { Card, Post as PostCard } from "../../components";

export default function Post() {
  const { name } = useParams();
  const [post, setPost] = useState({});
  const [similarPost, setSimilarPost] = useState({});
  const [similarTool, setSimilarTool] = useState({});
  const [erro, setErro] = useState(false);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(post?.imageURL);

  const convertArrayToString = (array) => {
    return array.join(",");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tempPost = await managerService.useGetPosts(name);
        setPost(tempPost.Post);
        const postImage = await managerService.useGetPostImage(tempPost.Post.imageUrl);
        setImage(postImage.data.image);
        const ids = [
          ...(tempPost.Post.id_categoryfeatures || []),
          ...(tempPost.Post.id_categoryprofessions || []),
        ].flatMap((obj) => obj._id);
        const idsString = convertArrayToString(ids);
        const filterdPosts = await managerService.useGetPostsByID({ id: idsString });
        const filteredSimilarPosts = filterdPosts.filter(
          (similar) => similar._id !== tempPost.Post._id
        );
        setSimilarPost(filteredSimilarPosts);
        const filteredTools = await managerService.useGetAIToolsByCategoryId({ id: idsString });
        setSimilarTool(filteredTools);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar post", error);
        setErro(true);
      }
    };

    fetchData();
  }, [name]); // Adicione name como uma dependência se você estiver usando-o dentro de fetchData

  if (loading) {
    return (
      <Container>
        <Title>Carregando...</Title>
      </Container>
    );
  } else if (erro) {
    return (
      <Container>
        <ErrorTitle>Erro ao carregar post, tente novamente com outro nome.</ErrorTitle>
      </Container>
    );
  } else {
    return (
      <Container>
        <Image src={image} alt='Main post image' />
        <Title>{post.name}</Title>
        <TagsLine>
          {post.id_categoryfeatures?.map((category) => (
            <Tag key={category._id}>{category.name}</Tag>
          ))}
          {post.id_categoryprofessions?.map((category) => (
            <Tag key={category._id}>{category.name}</Tag>
          ))}
        </TagsLine>
        <SmallDescription>{post.shortDescription}</SmallDescription>
        <HtmlContainer dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.html) }} />
        <Comments postId={post?._id} />
        <OtherTools>
          <h1>OUTROS POSTS SIMILARES:</h1>
          {similarPost && similarPost.length > 0 ? (
            <div>
              <DivLine>
                <Line>
                  {similarPost?.slice(0, 4).map((content, index) => (
                    <PostCard
                      data={{
                        ...content,
                      }}
                      key={index}
                    />
                  ))}
                </Line>
              </DivLine>
            </div>
          ) : (
            <h2>Nenhum Post semelhante encontrado</h2>
          )}
        </OtherTools>
        <OtherTools>
          <h1>Ferramentas Similares</h1>
          {similarTool?.aiTools && similarTool.aiTools.length > 0 ? (
            <div>
              <DivLine>
                <Line>
                  {similarTool?.aiTools?.slice(0, 8).map((content, index) => (
                    <Card
                      data={{
                        ...content,
                      }}
                      key={index}
                    />
                  ))}
                </Line>
              </DivLine>
            </div>
          ) : (
            <h2>Nenhuma IA semelhante encontrada</h2>
          )}
        </OtherTools>
      </Container>
    );
  }
}
