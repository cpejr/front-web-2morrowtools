import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as managerService from "../../services/ManagerService";
import {
  Tag,
  Title,
  Image,
  Section,
  TagsLine,
  Container,
  ErrorTitle,
  SmallDescription,
  LargeDescription,
} from "./Styles";


export default function Post() {
  
  const { name } = useParams();
  const [post,setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);
  const [image, setImage] = useState(post?.imageURL);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tempPost = await managerService.useGetPostByName(name);
        setPost(tempPost.Post);
        const postImage = await managerService.useGetPostImage(tempPost.Post.imageUrl);
        setImage(postImage.data.image);
        
      } catch (error) {
        console.error("Erro ao carregar post", error);
        setErro(true);
      }
    }
    fetchData();
    setLoading(false);  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  if(loading) {

  return (
    <Container>
      <Title>Carregando...</Title>
    </Container>
  )

  } else if(erro) {

    return (
      <Container>
        <ErrorTitle>Erro ao carregar post, tente novamente com outro nome.</ErrorTitle>
      </Container>
    )

  } else {
  return (

    <Container>
      <Section>
        <Title>{post.name}</Title>
        
        <Image src={image} />

        <TagsLine>
          {post.id_categoryfeatures?.map((category) => (
            <Tag key = {category._id}>{category.name}</Tag>
          ))}
          {post.id_categoryprofessions?.map((category) => (
            <Tag key = {category._id}>{category.name}</Tag>
          ))}
        </TagsLine>
      </Section>

      <SmallDescription>{post.shortDescription}</SmallDescription>

      <LargeDescription>{post.longDescription}</LargeDescription>

    </Container>
  )
 }
  
}
