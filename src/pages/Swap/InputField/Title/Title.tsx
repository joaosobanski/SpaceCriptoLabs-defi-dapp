import React from "react";
import { Title } from "./Title.style";
import Settings from "../../../../assets/icons/swap/settingsWhite.png";

const TopText = () => {
  return (
    <Title>
      <li>
        <h3>Swap</h3>
      </li>
      <li>
        <button>
          <img src={Settings} alt='connect wallet' />
        </button>
      </li>
    </Title>
  );
};

export default TopText;
