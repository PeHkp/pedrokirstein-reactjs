import React from "react";
import { FaLaptopCode, FaRegFileCode, FaDraftingCompass } from "react-icons/fa";
import "./style.css";

// importando json de informacoes
import Pedro from "../../assets/Projetos.json";

// importando componentes
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// importando Imagems
import FotoPerfil from "../../img/fotoPerfil.jpeg";

function Home() {
  return (
    <div>
      <Header></Header>
      <div className="BannerImage">
        <div className="textos">
          <h1>Pedro Kirstein</h1>
          <p>Desenvolvedor Web - Mobile - Engenheiro de Software</p>
          <a className="BotaoBanner" href="#projetos">
            O que Faço
          </a>
        </div>
      </div>
      <div className="titulos">
        <h1>Habilidades</h1>
        <p>Algumas das minha habilidades</p>
      </div>
      <div className="skils">
        <div className="frontendSkils boxSkils">
          <ul>
            <FaLaptopCode size="50" color="#303030"></FaLaptopCode>
            <h1>Front-End</h1>
            <li>Flutter - Intermediário</li>
            <li>React.Js - Intermediário</li>
            <li>JavaScript - Intermediário</li>
            <li>HTML - Intermediário</li>
            <li>CSS - Intermediário</li>
          </ul>
        </div>
        <div className="backendSkils boxSkils">
          <ul>
            <FaRegFileCode size="50" color="#303030"></FaRegFileCode>
            <h1>Back-End</h1>
            <li>Node.Js - Intermediário</li>
            <li>Dart - básico</li>
            <li>Python - básico</li>
            <li>Java - básico</li>
            <li>PHP - básico</li>
          </ul>
        </div>
        <div className="modelagemSkils boxSkils">
          <ul>
            <FaDraftingCompass size="50" color="#303030">
              Font end
            </FaDraftingCompass>
            <h1>Outros</h1>
            <li>WordPress - Intermediário</li>
            <li>UML - Intermediário</li>
            <li>BPMN - Intermediário</li>
            <li>MySQL - básico</li>
            <li>SQLite - básico</li>
          </ul>
        </div>
      </div>
      <div className="titulos">
        <h1>Sobre Mim</h1>
        <p>Aqui vou falar um pouco mais sobre mim</p>
      </div>
      <div className="sobremim">
        <div className="imagemPerfil">
          <img className="FotoPerfil" src={FotoPerfil} alt="Foto Pedro" />
        </div>
        <div className="TextPerfil">
          <p>
            Ola meu nome e Pedro sou estudante do terceiro período de engenharia
            de software na PUCPR, Sou um amante de tecnologia e busco aprender
            sempre mais sobre novas tecnologias e tecnologias mais "antigas".
          </p>
          <p>
            Sou Comunicativo, Criativo, Comprometido, Flexível, tenho uma boa
            capacidade de resolver problemas e um bom relacionamento
            interpessoal. Busco Ser sempre uma pessoa fora da curva e me
            destacar dos demais.
          </p>
        </div>
      </div>
      <div className="frase">
        <div className="fraseArruma">
          <p>“Esforce-se para não ser um sucesso, mas sim para ser valioso” </p>
          <p>Albert Einstein</p>
        </div>
      </div>
      <div className="titulos">
        <h1>Meus Projetos</h1>
        <p>Aqui vou mostrar um pouco do que sei</p>
      </div>
      <div className="projetos">
        <div className="projetoList">
          <h1>{Pedro.Projetos[0].Name}</h1>
          <div className="conteudoProjeto">
            <div className="textosProjetos">
              <p>
                <strong>Descrição</strong> : Trabalho da matéria de Experiencia
                Criativa, aonde nos Desenvolvemos o projeto para uma empresa de
                moveis, aonde o Sistema devera controlar toda a operação interna
                feita pela empresa, a metodologia para o desenvolvimento foi
                usado o SCRUM e a arquitetura MVC.
              </p>
              <div className="tec">
                <h1>Tecnologias</h1>
                <p>Front-End : {Pedro.Projetos[0].FrontEnd}</p>
                <p>Back-End : {Pedro.Projetos[0].BackEnd}</p>
                <p>Data-Base : {Pedro.Projetos[0].BancoDados}</p>
              </div>
            </div>
            <div className="botaoProjetos">
              <div className="ProjetoBotao">
                <a href={Pedro.Projetos[0].VerProjeto}>Ver Projeto</a>
                <a href={Pedro.Projetos[0].GitHub}>GitHub</a>
              </div>
            </div>
          </div>
        </div>
        <div className="projetoList">
          <h1>{Pedro.Projetos[1].Name}</h1>
          <div className="conteudoProjeto">
            <div className="textosProjetos">
              <p>
                <strong>Descrição</strong> : Trabalho da matéria de Experiencia
                Criativa, aonde nos Desenvolvemos o projeto para uma empresa de
                moveis, aonde o Sistema devera controlar toda a operação interna
                feita pela empresa, a metodologia para o desenvolvimento foi
                usado o SCRUM e a arquitetura MVC.
              </p>
              <div className="tec">
                <h1>Tecnologias</h1>
                <p>Front-End : {Pedro.Projetos[1].FrontEnd}</p>
                <p>Back-End : {Pedro.Projetos[1].BackEnd}</p>
                <p>Data-Base : {Pedro.Projetos[1].BancoDados}</p>
              </div>
            </div>
            <div className="botaoProjetos">
              <div className="ProjetoBotao">
                <a href={Pedro.Projetos[1].VerProjeto}>Ver Projeto</a>
                <a href={Pedro.Projetos[1].GitHub}>GitHub</a>
              </div>
            </div>
          </div>
        </div>
        <div className="projetoList">
          <h1>{Pedro.Projetos[2].Name}</h1>
          <div className="conteudoProjeto">
            <div className="textosProjetos">
              <p>
                <strong>Descrição</strong> : Trabalho da matéria de Experiencia
                Criativa, aonde nos Desenvolvemos o projeto para uma empresa de
                moveis, aonde o Sistema devera controlar toda a operação interna
                feita pela empresa, a metodologia para o desenvolvimento foi
                usado o SCRUM e a arquitetura MVC.
              </p>
              <div className="tec">
                <h1>Tecnologias</h1>
                <p>Front-End : {Pedro.Projetos[2].FrontEnd}</p>
                <p>Back-End : {Pedro.Projetos[2].BackEnd}</p>
                <p>Data-Base : {Pedro.Projetos[2].BancoDados}</p>
              </div>
            </div>
            <div className="botaoProjetos">
              <div className="ProjetoBotao">
                <a href={Pedro.Projetos[2].VerProjeto}>Ver Projeto</a>
                <a href={Pedro.Projetos[2].GitHub}>GitHub</a>
              </div>
            </div>
          </div>
        </div>
        <div className="projetoList">
          <h1>{Pedro.Projetos[3].Name}</h1>
          <div className="conteudoProjeto">
            <div className="textosProjetos">
              <p>
                <strong>Descrição</strong> : Trabalho da matéria de Experiencia
                Criativa, aonde nos Desenvolvemos o projeto para uma empresa de
                moveis, aonde o Sistema devera controlar toda a operação interna
                feita pela empresa, a metodologia para o desenvolvimento foi
                usado o SCRUM e a arquitetura MVC.
              </p>
              <div className="tec">
                <h1>Tecnologias</h1>
                <p>Front-End : {Pedro.Projetos[3].FrontEnd}</p>
                <p>Back-End : {Pedro.Projetos[3].BackEnd}</p>
                <p>Data-Base : {Pedro.Projetos[3].BancoDados}</p>
              </div>
            </div>
            <div className="botaoProjetos">
              <div className="ProjetoBotao">
                <a href={Pedro.Projetos[3].VerProjeto}>Ver Projeto</a>
                <a href={Pedro.Projetos[3].GitHub}>GitHub</a>
              </div>
            </div>
          </div>
        </div>
        <div className="projetoList">
          <h1>{Pedro.Projetos[4].Name}</h1>
          <div className="conteudoProjeto">
            <div className="textosProjetos">
              <p>
                <strong>Descrição</strong> : Trabalho da matéria de Experiencia
                Criativa, aonde nos Desenvolvemos o projeto para uma empresa de
                moveis, aonde o Sistema devera controlar toda a operação interna
                feita pela empresa, a metodologia para o desenvolvimento foi
                usado o SCRUM e a arquitetura MVC.
              </p>
              <div className="tec">
                <h1>Tecnologias</h1>
                <p>Front-End : {Pedro.Projetos[4].FrontEnd}</p>
                <p>Back-End : {Pedro.Projetos[4].BackEnd}</p>
                <p>Data-Base : {Pedro.Projetos[4].BancoDados}</p>
              </div>
            </div>
            <div className="botaoProjetos">
              <div className="ProjetoBotao">
                <a href={Pedro.Projetos[4].VerProjeto}>Ver Projeto</a>
                <a href={Pedro.Projetos[4].GitHub}>GitHub</a>
              </div>
            </div>
          </div>
        </div>
        <div className="projetoList">
          <h1>{Pedro.Projetos[5].Name}</h1>
          <div className="conteudoProjeto">
            <div className="textosProjetos">
              <p>
                <strong>Descrição</strong> : Trabalho da matéria de Experiencia
                Criativa, aonde nos Desenvolvemos o projeto para uma empresa de
                moveis, aonde o Sistema devera controlar toda a operação interna
                feita pela empresa, a metodologia para o desenvolvimento foi
                usado o SCRUM e a arquitetura MVC.
              </p>
              <div className="tec">
                <h1>Tecnologias</h1>
                <p>Front-End : {Pedro.Projetos[5].FrontEnd}</p>
                <p>Back-End : {Pedro.Projetos[5].BackEnd}</p>
                <p>Data-Base : {Pedro.Projetos[5].BancoDados}</p>
              </div>
            </div>
            <div className="botaoProjetos">
              <div className="ProjetoBotao">
                <a href={Pedro.Projetos[5].VerProjeto}>Ver Projeto</a>
                <a href={Pedro.Projetos[5].GitHub}>GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
