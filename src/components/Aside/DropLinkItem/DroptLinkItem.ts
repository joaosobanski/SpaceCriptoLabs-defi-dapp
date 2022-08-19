import styled from "styled-components";

interface IContainerProps {
  rotate: boolean;
}

export const Container = styled.div<IContainerProps>`
  transform: height 1s;
  .arrow {
    position: relative;

    .arrow-click {
      position: absolute;
      z-index: 5;
      right: 5px;
      top: 18px;
      width: 10px;
      height: 10px;

      transform: rotate(${(props) => (props.rotate ? "180" : "0")}deg);
      transition: ease-in-out 0.4s;
    }
  }
`;

export const DropdownDiv = styled.div`
  background-color: #e29609;
  display: flex;
  flex-direction: column;
  transition: height 1s;

  a {
    border: none;
    padding: 0 5px;
    height: 40px;
  }
`;
