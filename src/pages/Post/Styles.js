import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 90px;
  margin-bottom: 100px;
  gap: 2rem;
  text-align: center;

  div {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #240079;
  }
`;

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  border-color: #240079;
`;

export const Section = styled.div`
  width: 80%;
  margin-bottom: 20px;
  margin-left: 10%;
  margin-top: 50px;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
`;

export const Categories = styled.p`
  font-size: 14px;
  color: #666;
`;

export const SmallDescription = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
`;

export const LargeDescription = styled.p`
  font-size: 20px;
  line-height: 1.6;
`;
