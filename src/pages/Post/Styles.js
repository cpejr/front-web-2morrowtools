import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  margin-bottom: 6rem;
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
  font-size: 2rem;
  margin-bottom: 0.625rem;
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
  font-size: 0.875rem;
  border: 1px solid;
  padding: 0.625rem;
  border-radius: 0.31rem;
  cursor: pointer;
`;

export const SmallDescription = styled.div`
  font-size: 1.125rem;
  line-height: 1.5;
  text-align: left;
  width: 80%;
  margin-left: 10%;
  margin-top: 50px;
`;

export const Image = styled.img`
  width: 80%;
  max-height: 25rem;
  object-fit: cover;
  border-radius: 0.5rem;
  width: 80%;
  margin-top: 50px;
`;

export const LargeDescription = styled.div`
  font-size: 1.25rem;
  line-height: 1.6;
  text-align: left;
  width: 80%;
  margin-left: 10%;
  margin-top: 50px;
`;
