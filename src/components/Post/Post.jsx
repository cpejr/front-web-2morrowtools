import { ImageHolder, StyledCard, Tag, Title, Text, Link, Tags } from "./Styles";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useGetPostImage } from "../../services/ManagerService";
import { RiLoader2Fill } from "react-icons/ri";

export default function Post({ data }) {
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
    <StyledCard>
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
