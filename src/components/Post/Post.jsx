import { ImageHolder, StyledCard, Tag, Title, Text, Link, Tags, Card, Container } from "./Styles";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useGetPostImage } from "../../services/ManagerService";
import { RiLoader2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function Post({ data }) {
  const navigate = useNavigate();
  const { name, imageUrl, shortDescription } = data;
  const categories = [...data.id_categoryprofessions, ...data.id_categoryfeatures];
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  // Get Image
  const getImage = async () => {
    setLoading(true);
    const { data } = await useGetPostImage(imageUrl);
    setImage(data.image);
    setLoading(false);
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <Card onClick={() => navigate(`/post/${name}`)}>
      <ImageHolder>{loading ? <RiLoader2Fill /> : <img src={image} alt={name} />}</ImageHolder>
      <Container>
        <Title>{name}</Title>
        <Text>{shortDescription}</Text>
        <Tags>
          {categories?.map((category, index) => (
            <Tag key={index} onClick={(event) => event.stopPropagation()}>
              {category?.name}
            </Tag>
          ))}
        </Tags>
        <Link>Ler mais</Link>
      </Container>
    </Card>
  );
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
};
