import styled from "styled-components";

export const SwapInput = styled.input`
  padding: 20px;
  width: 500px;
  height: 60px;
  border-radius: 8px;
  font-size: 26px;
  font-weight: bold;
  font-family: "Inconsolata", monospace;
`;

export const Container = styled.div`
  position: relative;
  background-color: #218702;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const SwapButton = styled.button`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  background-color: #ffffff;

  border-radius: 50%;

  img {
    transform: rotate(90deg);
    border-radius: 50%;
  }
`;
