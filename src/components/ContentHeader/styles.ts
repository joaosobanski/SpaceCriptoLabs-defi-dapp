import styled from "styled-components";

interface IContainerProps {
  lineColor: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const Title = styled.h3<IContainerProps>``;

export const Controllers = styled.div`
  display: flex;
`;
