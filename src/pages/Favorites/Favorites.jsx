import { Container, CardsContainer, CardFavorite, SectionContainer } from "./Styles";
import  useAuthStore  from "../../stores/auth";
import { useState , useEffect } from "react";
import { useGetFavorites } from "../../services/ManagerService";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons"

export default function Favorites() {

  const { getUser, getToken } = useAuthStore();
  const [aiTools, setAITools] = useState([]);
  
  function scrollContainer(component, amount) {
    document.querySelector(`.${component}`).scrollBy({
      left: amount,
      behavior: "smooth",
  })
  }

  let cards = [];
  const noFavorites = <h1>Você ainda não favoritou nenhuma ferramenta.</h1>;
  
  async function getFavorites() {
    if(getUser() !== null){
    const favorites = await useGetFavorites(getUser()._id);
    setAITools(favorites);
  }
  }

  Object.values(aiTools).map(function(content) {
    cards.push(<CardFavorite dados={{...content, favorite: true}} key={content?.name} />);
  });

  useEffect(() => {
    if(getToken() === null){
      window.location.href = "./";
    }
    getFavorites();
  }, []);

  return <Container>
    <SectionContainer>
    <CardsContainer>
      {cards.length > 0 ? cards : noFavorites}
    </CardsContainer>
    </SectionContainer>

    </Container>;
}