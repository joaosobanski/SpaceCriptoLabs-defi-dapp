import React from "react";
import { Title } from "./TextTitle.style";

type Props = {
  name: string;
  fontSizeNum: number;
};

const TextTitle: React.FC<Props> = ({ name, fontSizeNum }) => {
  return <Title fontSize={fontSizeNum}>{name}</Title>;
};

export default TextTitle;
