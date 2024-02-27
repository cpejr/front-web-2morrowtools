import { ImageHolder, StyledCard, Tag, Title, Text, Link, Tags } from "./Styles";
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
    <StyledCard onClick={() => navigate(`/post/${name}`)}>
      <ImageHolder>{loading ? <RiLoader2Fill /> : <img src={image} alt={name} />}</ImageHolder>
      <Tags>
        {categories?.map((category, index) => (
          <Tag key={index} onClick={(event) => event.stopPropagation()}>
            {category?.name}
          </Tag>
        ))}
      </Tags>
      <Title>{name}</Title>
      <Text>{shortDescription}</Text>
      <Link>Ler mais</Link>
    </StyledCard>
  );
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
};
