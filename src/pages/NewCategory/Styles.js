import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 0rem 3rem 0rem 3rem;
  height: auto;
  padding-bottom: 15rem;
  padding-top: 8rem;
`;

export const Title = styled.p`
  display: flex;
  align-items: center;
  font-size: 4rem;
  color: white;
  font-weight: 600;
  margin: 0;
  text-align: center;
  padding-bottom: 2rem;

  @media (max-width: 700px) {
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 3.9rem;
    height: 3.9rem;
  }

  @media (max-width: 370px) {
    font-size: 2.5rem;
  }
`;

export const DivNew = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  align-self: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
  gap: 1.5rem;
`;

export const CategoryList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 50%;
  height: fit-content;
  font-size: 2rem;
  margin-left: 4rem;
  color: white;
`;

export const CategoryListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const CategoryButtons = styled.div`
  display: flex;
  gap: 8px;

  svg {
    cursor: pointer;
  }
`;
