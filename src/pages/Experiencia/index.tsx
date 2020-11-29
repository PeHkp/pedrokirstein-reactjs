import React, { useEffect, useState } from "react";
import { SiAngular, SiNodeDotJs } from "react-icons/si";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Topbar from '../../components/Topbar';

import { Container, Xp, ListItem } from "./styles";

import experienciaData from "../../assets/json/experiencia.json"

interface DataExperiencia {
  empresa: string;
  cargo: string;
  inicio: string;
  fim: string;
}

const Experiencia: React.FC = () => {
  const [experiencia, setExperiencia] = useState<DataExperiencia[]>([]);

  useEffect(() => {
    setExperiencia(experienciaData);
  }, []);
  return (
    <Container>
      <Sidebar />
      <Topbar/>
      <main>
        <Header
          title="Experiências"
          subTitle="Minhas experiências profissionais!"
        />
        <ListItem>
          {experiencia.map((e) => (
            <Xp>
            <h3>{e.empresa}, {e.cargo}</h3>
            <label>Período {e.inicio} - {e.fim}</label>
            <p>
              Na TUNTS fiz parte de uma equipe que desenvolvia o PWA do{" "}
              <a href="https://www.whats.money/">WhatsMoney </a>o PWA foi feito
              usando Angular 9{" "}
              <SiAngular size={16} title="Angular" color={"#C3002F"} /> para o
              Frontend e Node.js{" "}
              <SiNodeDotJs color={"#026e00"} title="Node.js" size={16} /> para o
              Backend. Ajudei na produção de algumas telas dentro do PWA, na
              integração com REST APIs, e no desenvolvimento do sistema em
              geral.
            </p>
          </Xp>
          ))}
          
        </ListItem>
      </main>
    </Container>
  );
};

export default Experiencia;
