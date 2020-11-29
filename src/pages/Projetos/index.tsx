import React, { useEffect, useState } from "react";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import ProjetosItem from "../../components/ProjetosItem";
import Topbar from '../../components/Topbar';

import { Container,ListItem } from "./styles";

import projetosData from "../../assets/json/projetos.json";

interface DataProjects {
  Name: string;
  VerProjeto: string;
  urlFrontend?: string;
  urlBackend?: string;
}

const Home: React.FC = () => {
  const [projects, setProjects] = useState<DataProjects[]>([]);

  useEffect(() => {

    setProjects(projetosData);
  }, []);

  return (
    <Container>
      <Sidebar />
      <Topbar/>
      <main>
        <Header
          title="Meus Projetos"
          subTitle="Aqui mostro algumas coisas que ja fiz!"
        />
        <ListItem>
          {projects.map((project) => (
          <ProjetosItem
            Name={project.Name}
            VerProjeto={project.VerProjeto}
            urlFrontend={project.urlFrontend}
            urlBackend={project.urlBackend}
          />
        ))}
        </ListItem>
        
      </main>
    </Container>
  );
};

export default Home;
