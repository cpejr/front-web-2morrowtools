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
    <h1>FAVORITOS</h1>
    <SectionContainer>
    <CaretLeftOutlined className="arrow" onClick={() =>scrollContainer("favorites", -250) }/>
    <CardsContainer className="favorites">
      {cards}
    </CardsContainer>
    <CaretRightOutlined className="arrow" onClick={() =>scrollContainer("favorites", 250)}/>
    </SectionContainer>

    </Container>;
}