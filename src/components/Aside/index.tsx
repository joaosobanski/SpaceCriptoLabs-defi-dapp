import React from "react";
import LinkItem from "./LinkItem/LinkItem";
import DropLinkItem from "./DropLinkItem/DropLinkItem";
import { Container, MenuContainer } from "./styles";

//importing sidebar icons
import Trade from "../../assets/icons/sideBar/dark/blackOppositeArrows.png";
import Tractor from "../../assets/icons/sideBar/dark/blackTractor.png";
import Jar from "../../assets/icons/sideBar/dark/blackJar.png";
import Ticket from "../../assets/icons/sideBar/dark/blackTicket.png";
import Graphic from "../../assets/icons/sideBar/dark/blackGraphic.png";
import Dots from "../../assets/icons/sideBar/dark/Dots.png";

//importing dropdown components
import Exchange from "./DropLinkItem/DropdownChildren/Exchange";
import Info from "./DropLinkItem/DropdownChildren/Info";

export const Aside: React.FC = () => {
  return (
    <Container>
      <MenuContainer>
        <DropLinkItem
          title='Trade'
          icon={Trade}
          items={2}
          children={<Exchange />}
        />
        <LinkItem text='Farm' icon={Tractor} route={"/farm"} />
        <LinkItem text='Pool' icon={Jar} route={"/pool"} />
        <LinkItem text='Lottery' icon={Ticket} route={"/lottery"} />
        <LinkItem text='Info' icon={Graphic} route={"/info"} />

        <DropLinkItem title='More' icon={Dots} items={3} children={<Info />} />
      </MenuContainer>
    </Container>
  );
};
