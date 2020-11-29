import React from "react";
import {
  SiAngular,
  SiReact,
  SiNodeDotJs,
  SiPython,
  SiFlutter,
  SiTypescript,
  SiCss3,
} from "react-icons/si";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Topbar from "../../components/Topbar";

import { Container, Xp, ListItem, Sk } from "./styles";

const Sobre: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Topbar />
      <main>
        <Header
          title="Sobre"
          subTitle={
            "Esforce-se para não ser um sucesso, mas sim para ser valioso"
          }
        />
        <ListItem>
          <Xp>
            <h3>Quem sou eu?</h3>
            <p>
              Sou Pedro Kirstein, tenho 19 Anos, estudante de Engenharia de
              Software na PUCPR. Eu amo tecnologia, trabalhar com ela e como se
              fosse um super poder pois podemos resolver qualquer problema com
              ela.
            </p>
            <p>
              Busco sempre estar antenado em novas tecnologias, adoro estudar
              programação não importando a linguagem, pois programar e o método
              de resolver problemas e a linguagem é apenas ferramenta, e se você
              conhece o fundamento não importa a ferramenta você vai conseguir
              desenvolver.
            </p>
          </Xp>
          <Xp>
            <h3>Soft Skill</h3>
            <p>
              Sou muito comunicativo, criativo, colaborativo e sou muito bom em
              resolver problemas, tenho um ótimo relacionamento interpessoal e
              sou bem flexível.
            </p>
            <p>
              Sou muito determinado quando tenho algo para fazer eu faço do
              começo ao fim não importa o tempo que leve e o quanto eu tenha que
              aprender, eu sempre dou meu máximo para resolver qualquer
              problema.
            </p>
          </Xp>
          <Xp>
            <h3>Skills</h3>
            <Sk>
              <div>
                <p><SiReact title="React.js" size={22} color={"#61dafb"} /> React.js</p>
                <label>Intermediário</label>
              </div>
              <div>
                <p><SiAngular size={16} title="Angular" color={"#C3002F"}/> Angular</p>
                <label>Intermediário</label>
              </div>
            </Sk>
            <Sk>
              <div>
                <p><SiNodeDotJs color={"#026e00"} title="Node.js" size={16} />Node.js</p>
                <label>Intermediário</label>
              </div>
              <div>
                <p><SiPython color={"#F7C400"} title="Python" size={16}/>Python</p>
                <label>Básico</label>
              </div>
            </Sk>
            <Sk>
              <div>
                <p><SiReact title="React.js" size={22} color={"#7147B6"} />React-Native</p>
                <label>Intermediário</label>
              </div>
              <div>
                <p><SiFlutter color={'#075B9A'} title="Flutter" size={16}/>Flutter</p>
                <label>Básico</label>
              </div>
            </Sk>
            <Sk>
              <div>
                <p><SiTypescript color={'#3178C6'} title="TypeScript" size={16}/>TypeScript</p>
                <label>Intermediário</label>
              </div>
              <div>
                <p><SiCss3 color={'#264DE4'} title="CSS3" size={16}/>CSS</p>
                <label>Intermediário</label>
              </div>
            </Sk>
          </Xp>
        </ListItem>
      </main>
    </Container>
  );
};

export default Sobre;
