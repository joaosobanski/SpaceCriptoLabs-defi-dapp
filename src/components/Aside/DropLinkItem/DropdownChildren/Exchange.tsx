import React from "react";
import LinkItem from "../../LinkItem/LinkItem";

const Exchange: React.FC = () => {
  return (
    <React.Fragment>
      <LinkItem text='Exchange' route='/swap' icon={""} />
      <LinkItem text='Liquidity' route='/liquidity' icon={""} />
    </React.Fragment>
  );
};

export default Exchange;
