import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding-bottom: 4rem;

  @media (max-width: 700px) {
    height: auto;
    padding-top: 3rem;
    padding-bottom: 3rem;
    margin-bottom: 3rem;
  }
`;

export const Title = styled.p`
  display: flex;
  align-items: center;
  font-size: 4rem;
  color: white;
  font-weight: 600;
  height: 20%;
  padding-bottom: 1rem;
  padding-top: 4rem;
  text-align: center;
  margin-left: 5%;

  @media (max-width: 700px) {
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 3.9sarem;
    height: 3.9rem;
  }

  @media (max-width: 370px) {
    font-size: 2.5rem;
  }
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  height: 100%;

  @media (max-width: 700px) {
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 0%;
  }

  @media (min-width: 1440px) {
    max-width: 144rem;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  gap: 2rem;

  @media (max-width: 700px) {
    width: 80%;
  }
`;
export const Section2 = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 2rem;

  @media (max-width: 700px) {
    width: 80%;
  }
`;
