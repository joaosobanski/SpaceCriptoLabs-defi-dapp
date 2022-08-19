import styled from "styled-components";

export const Container = styled.div`
  grid-area: AS;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) =>
    props.theme.colors.tertiary}; // props vem da styles/styled.d.ts
  border-right: 1px solid ${(props) => props.theme.colors.gray};
  border-radius: 1px solid ${(props) => props.theme.colors.gray};
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Header = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
`;

export const MenuContainer = styled.nav`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;
