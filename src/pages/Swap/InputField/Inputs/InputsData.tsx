import React from "react";
import { SwapInput, Container, SwapButton } from "./InputsData.style";
import SwapIcon from "../../../../assets/icons/swap/swapBlack.png";

function Inputs() {
  return (
    <Container>
      <SwapInput type='number' placeholder='0.0' />
      <SwapButton>
        <img src={SwapIcon} alt='swap' />
      </SwapButton>
      <SwapInput type='number' placeholder='0.0' />
    </Container>
  );
}

export default Inputs;
