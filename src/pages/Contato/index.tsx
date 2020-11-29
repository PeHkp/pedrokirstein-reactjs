import React from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Topbar from "../../components/Topbar";

import { Container, ListItem } from "./styles";

const Contato: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Topbar />
      <main>
        <Header title="Contato" subTitle="Aonde você pode me encontrar" />
        <ListItem>
          <h3>E-mail</h3>
          <div>
            <a
              href="mailto:pedro.kirstein@outlook.com.com?subject=Contato pelo site."
              target="blank"
            >
              <FiMail size={26} />
            </a>
          </div>
        </ListItem>
        <ListItem>
          <h3>Redes Sociais</h3>
          <div>
            <a href="https://github.com/PeHkp" target="blank">
              <FaGithub size={26} />
            </a>
            <a
              href="https://www.linkedin.com/in/pedro-kirstein/"
              target="blank"
            >
              <FaLinkedin size={26} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCcnNKa-3hwmdtZkRP5Iwn-Q?view_as=subscriber"
              target="blank"
            >
              <FaYoutube size={26} />
            </a>
          </div>
        </ListItem>
      </main>
    </Container>
  );
};

export default Contato;
