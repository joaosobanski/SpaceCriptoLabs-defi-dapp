import React from "react";
import Card from "../../components/UI/card/Card";
import { Container } from "./styles";
import Inputs from "./InputField";

export const Swap: React.FC = () => {
  return (
    <Container>
      <Card>
        <Inputs />
      </Card>
    </Container>
  );
};
