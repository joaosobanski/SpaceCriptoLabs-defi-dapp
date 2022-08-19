import styled from "styled-components";

export const Container = styled.div`
  grid-area: MH;
  background-color: #e7b22c;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
`;
