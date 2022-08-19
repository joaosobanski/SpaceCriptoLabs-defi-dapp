import React, { useEffect } from "react";
import { useContextProvider } from "../../context/UserContext";
import Button from "../UI/button/Index";
import { Title } from "../UI/title/TextTitle.style";
import { Container } from "./styles";

//Needed to use window.ethereum for some reason
declare var window: any;

export const MainHeader: React.FC = () => {
  // importing global states from the context
  const {
    isLoading,
    setIsLoading,
    isLoggedIn,
    setIsLoggedIn,
    userAccount,
    setUserAccount,
    errorAlert,
    setErrorAlert,
  } = useContextProvider();

  const shortAddress = userAccount.slice(0, 4) + "..." + userAccount.slice(-3);

  const handleConnect = () => {
    // if (isLoggedIn) return;
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res: string) => {
          storeAccountHandler(res[0]);
        });
      return;
    }
    console.log("install metamask");
  };

  const storeAccountHandler = (account: string) => {
    setUserAccount(account);
    localStorage.setItem("userAddress", account);

    setIsLoggedIn(true);
    localStorage.setItem("loggedIn", "true");
  };

  useEffect(() => {
    console.log(window.ethereum.isConnected());
  });

  return (
    <Container>
      <Title fontSize={40}>Logo</Title>
      <Button onClick={handleConnect}>
        <Title fontSize={20}>
          {isLoggedIn ? shortAddress : "Connect Wallet"}
        </Title>
      </Button>
    </Container>
  );
};
