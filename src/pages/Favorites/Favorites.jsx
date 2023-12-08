import { Container, CardsContainer, CardFavorite, SectionContainer } from "./Styles";
import useAuthStore from "../../stores/auth";
import { useState, useEffect } from "react";
import { useGetFavorites } from "../../services/ManagerService";
import { DiscoverData, DiscoverDiv,DiscoverInputs,DiscoverLine,HalfInput, FullInput, BlueButton } from "../Tools/Styles";

export default function Favorites() {
  const { getUser, getToken } = useAuthStore();
  const [aiTools, setAITools] = useState([]);

  function scrollContainer(component, amount) {
    document.querySelector(`.${component}`).scrollBy({
      left: amount,
      behavior: "smooth",
    });
  }

  let cards = [];
  const noFavorites = <h1>Você ainda não favoritou nenhuma ferramenta.</h1>;
  
  async function getFavorites() {
    if (getUser() !== null) {
      const favorites = await useGetFavorites(getUser()._id);
      setAITools(favorites);
    }
  }

  Object.values(aiTools).map(function (content) {
    cards.push(<CardFavorite data={{ ...content, favorite: true }} key={content?.name} />);
  });

  useEffect(() => {
    if (getToken() === null) {
      window.location.href = "./";
    }
    getFavorites();
  }, []);

  return <Container>
    <DiscoverDiv>
        <DiscoverData>
          <h6>Descubra novas ferramentas de tecnologia toda semana! </h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua
          </p>
        </DiscoverData>
        <DiscoverInputs>
          <DiscoverLine>
            <HalfInput placeholder='Nome:' />
            <HalfInput placeholder='E-mail:' type='email' />
          </DiscoverLine>
          <FullInput placeholder='Mensagem:' />
          <BlueButton type='primary'>ENVIAR</BlueButton>
        </DiscoverInputs>
      </DiscoverDiv>
    <SectionContainer>
    <CardsContainer>
      {cards.length > 0 ? cards : noFavorites}
    </CardsContainer>
    </SectionContainer>

    </Container>;
}
