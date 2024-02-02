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
`;

export const Card = styled.div``;

export const Section = styled.div`
  width: 80%;
  margin-bottom: 20px;
  margin-left: 10%;
  margin-top: 50px;
`;

export const Title = styled.div`
  font-size: 32px;
  margin-bottom: 10px;
`;

export const Tags = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  text-align: center;
`;

export const Categories = styled.div`
  font-size: 14px;
  border: 1px solid;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

export const SmallDescription = styled.div`
  font-size: 18px;
  line-height: 1.5;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
`;

export const LargeDescription = styled.div`
  font-size: 20px;
  line-height: 1.6;
`;
