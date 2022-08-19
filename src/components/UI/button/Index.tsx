import React from "react";
import { StyledButton } from "./Style";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

const Button: React.FC<Props> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
