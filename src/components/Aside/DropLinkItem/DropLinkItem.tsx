import React, { useState } from "react";
import LinkItem from "../LinkItem/LinkItem";
import { DropdownDiv, Container } from "./DroptLinkItem";
import ArrowDown from "../../../assets/icons/sideBar/dark/darkArrowDown.png";
// "white" before the name is no longer necessary since im separating by folder
// need to change it next week!

type Props = {
  title: string;
  icon: string;
  items: number;
  children: React.ReactNode;
};

const DropLinkItem: React.FC<Props> = ({ title, icon, children }) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <Container rotate={isOpen}>
      <div className='arrow' onClick={handleOpen}>
        <LinkItem text={title} icon={icon} />
        <img className='arrow-click' src={ArrowDown} alt='arrow-down' />
      </div>

      {isOpen && (
        <DropdownDiv className='dropdown-container' id='container'>
          {children}
        </DropdownDiv>
      )}
    </Container>
  );
};

export default DropLinkItem;
