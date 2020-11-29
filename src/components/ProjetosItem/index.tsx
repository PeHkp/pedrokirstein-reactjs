import React from "react";
import { SiReact, SiNodeDotJs } from "react-icons/si";

import { Techs, IconsElement, Listagem } from "./styles";

interface DataProjects {
  Name: string;
  VerProjeto: string;
  urlFrontend?: string;
  urlBackend?: string;
}

const ProjetosItem: React.FC<DataProjects> = ({
  Name,
  VerProjeto,
  urlFrontend,
  urlBackend,
}) => {
  return (
    <Listagem>
      <h3>{Name}</h3>
      <Techs>
        {urlFrontend && (
          <a href={urlFrontend}>
            <p>Código front-end</p>
          </a>
        )}
        {VerProjeto && (
          <a href={VerProjeto}>
            <p>Testar aplicação</p>
          </a>
        )}
        {urlBackend && (
          <a href={urlBackend}>
            <p>Código back-end</p>
          </a>
        )}
      </Techs>
      <IconsElement>
        <SiReact title="React.js" size={22} color={"#61dafb"} />
        <SiNodeDotJs title="Node.js" size={22} color={"#026e00"} />
      </IconsElement>
    </Listagem>
  );
};

export default ProjetosItem;
