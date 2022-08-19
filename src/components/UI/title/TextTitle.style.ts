import styled from "styled-components";

interface DinamicStyles {
  fontSize: number;
}

export const Title = styled.h2<DinamicStyles>`
  ::selection {
    background: none;
  }
  font-size: ${(props) => props.fontSize}px;
  font-weight: 200;
  color: ${(props) => props.theme.colors.primary};
`;
