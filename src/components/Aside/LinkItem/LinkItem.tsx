import React from "react";
import { LogImg, MenuItemLink } from "./LinkItem.style";
import TextTitle from "../../UI/title/TextTitle";
import { useNavigate } from "react-router-dom";

type Props = {
  text: string;
  icon: string;
  route?: string | null;
  link?: string;
};

const LinkItem: React.FC<Props> = ({ text, icon, route, link }) => {
  const nav = useNavigate();

  // Preventing the "a" tag to refresh the page and passing a route to it.
  const handleeClick = () => {
    if (route != null) {
      nav(route);
    }
  };

  return (
    <MenuItemLink href={link} target={"_BLANK"} onClick={handleeClick}>
      {icon && <LogImg src={icon} />}
      <TextTitle name={text} fontSizeNum={18} />
    </MenuItemLink>
  );
};

export default LinkItem;
