import React from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

import { BoxBanner } from "./styles";

const Banner: React.FC = () => {
  return (
    <BoxBanner>
      <h2>Bem Vindo!</h2>
      <p>Esse e meu portfolio</p>
      <div>
        <a href="https://github.com/PeHkp" target="blank">
          <FaGithub size={26} />
        </a>
        <a href="https://www.linkedin.com/in/pedro-kirstein/" target="blank">
          <FaLinkedin size={26} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCcnNKa-3hwmdtZkRP5Iwn-Q?view_as=subscriber"
          target="blank"
        >
          <FaYoutube size={26} />
        </a>
      </div>
      
    </BoxBanner>
  );
};

export default Banner;
