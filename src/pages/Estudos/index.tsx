import React, { useEffect, useState } from "react";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Topbar from '../../components/Topbar';

import { Container, Xa, ListItem } from "./styles";

import estudosData from "../../assets/json/estudos.json";

interface DataEstudo {
  escola: string;
  curso: string;
  inicio: string;
  fim: string;
  techs?: string;
}

const Estudos: React.FC = () => {
  const [estudos, getEstudos] = useState<DataEstudo[]>([]);

  useEffect(() => {
    estudosData.reverse()
    getEstudos(estudosData);
  }, []);
  return (
    <Container>
      <Sidebar />
      <Topbar/>
      <main>
        <Header title="Estudos" subTitle="Minhas experiências acadêmicas!" />
        <ListItem>
          {estudos.map((e) => (
            <Xa key={e.curso}>
              <h3>
                {e.escola}, {e.curso}
              </h3>
              <label>
                Período {e.inicio} - {e.fim}
              </label>
              {e.techs && <p>{e.techs}</p>}
            </Xa>
          ))}
        </ListItem>
      </main>
    </Container>
  );
};

export default Estudos;
