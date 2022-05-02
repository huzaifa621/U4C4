import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  width: 70%;
  margin: auto;
`;

export const Select = styled.select`
  height: 40px;
  width: 250px;
  background-color: skyblue;
  border: transparent;
  border-radius: 10px;
  margin: 20px;
`;

export const Flex = styled.div`
  padding: 20px;
  border: 1px solid black;
`;
