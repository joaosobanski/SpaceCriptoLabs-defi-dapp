import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  .input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    background-color: #b26161;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

export const Connect = styled.button`
  width: 500px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;

  img {
    height: 30px;
    width: 30px;
  }
`;
