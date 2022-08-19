import styled from "styled-components";

export const MenuItemLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${(props) => props.theme.colors.info};
  text-decoration: none;
  transition: opacity 0.3s;
  background-color: aliceblue;
  border: 1px solid black;
  height: 45px;
  gap: 7px;
  padding: 10px 10px;
  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: 18px;
  }
`;

export const LogImg = styled.img`
  width: 20px;
  height: 20px;
`;
