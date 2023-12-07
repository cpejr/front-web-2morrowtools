import styled from "styled-components";
import { IoMdAddCircleOutline } from "react-icons/io";

export const Text = styled.div`
  align-items: center;
  justify-content: center;
  font-size: 2.1rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Icon = styled(IoMdAddCircleOutline)`
  color: #007bff;
  font-size: 2rem;
  cursor: pointer;
  margin-right: 8px;
`;
