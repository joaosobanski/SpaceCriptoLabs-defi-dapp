import React from "react";
import { Container, Connect } from "./style";
import Metamask from "../../../assets/icons/swap/Metamask.png";
import Title from "./Title/Title";
import InputsData from "./Inputs/InputsData";
import { useContextProvider } from "../../../context/UserContext";

const InputField = () => {
  const { isLoggedIn } = useContextProvider();

  const notLogged = (
    <React.Fragment>
      Connect Wallet <img src={Metamask} alt='connect wallet' />
    </React.Fragment>
  );

  return (
    <Container>
      <Title />
      <InputsData />
      <Connect>{isLoggedIn ? "Select a Token" : notLogged}</Connect>
    </Container>
  );
};

export default InputField;
