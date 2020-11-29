import React from "react";

import { BoxBanner } from "./styles";

interface Props {
  title: string;
  subTitle: string;
}

const Header: React.FC<Props> = ({ title, subTitle }) => {
  return (
    <BoxBanner>
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </BoxBanner>
  );
};

export default Header;
