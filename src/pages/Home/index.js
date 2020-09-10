import React from "react";
import {
  FaLaptopCode,
  FaRegFileCode,
  FaDraftingCompass,
  FaGithub,
  FaYoutube,
  FaLinkedin,
  FaFileAlt,
} from "react-icons/fa";
import "./style.css";

// importando json de informacoes
import Pedro from "../../assets/Projetos.json";
import Curriculo from "../../assets/PedroKirsteinIngles.pdf";

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
          <p>Developer Web - Mobile - Software Engineer</p>
          <div className="icones">
            <a target="blank" href="https://github.com/PeHkp">
              <FaGithub className="icon" color="white" size="30"></FaGithub>
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/in/pedro-kirstein/"
            >
              <FaLinkedin className="icon" color="white" size="30"></FaLinkedin>
            </a>
            <a
              target="blank"
              href="https://www.youtube.com/channel/UCcnNKa-3hwmdtZkRP5Iwn-Q?view_as=subscriber"
            >
              <FaYoutube className="icon" color="white" size="30"></FaYoutube>
            </a>
          </div>
          <a className="BotaoBanner" href="#projetos">
            What do I do
          </a>
        </div>
      </div>
      <div className="titulos">
        <h1>Skills</h1>
        <p>Some of my skills</p>
      </div>
      <div className="skils">
        <div className="frontendSkils boxSkils">
          <ul>
            <FaLaptopCode size="50" color="#303030"></FaLaptopCode>
            <h1>Front-End</h1>
            <li>Flutter - Intermediary</li>
            <li>React.Js - Advanced</li>
            <li>Angular.js - Intermediary</li>
            <li>JavaScript - Intermediary</li>
            <li>HTML - Intermediary</li>
            <li>CSS - Intermediary</li>
          </ul>
        </div>
        <div className="backendSkils boxSkils">
          <ul>
            <FaRegFileCode size="50" color="#303030"></FaRegFileCode>
            <h1>Back-End</h1>
            <li>Node.Js - Advanced</li>
            <li>Dart - Basic</li>
            <li>Python - Intermediary</li>
            <li>Java - Basic</li>
            <li>PHP - Basic</li>
          </ul>
        </div>
        <div className="modelagemSkils boxSkils">
          <ul>
            <FaDraftingCompass size="50" color="#303030">
              Font end
            </FaDraftingCompass>
            <h1>Outros</h1>
            <li>WordPress - Intermediary</li>
            <li>UML - Intermediary</li>
            <li>BPMN - Intermediary</li>
            <li>MySQL - Intermediary</li>
            <li>SQLite - Intermediary</li>
          </ul>
        </div>
      </div>
      <div className="titulos">
        <h1>About Me</h1>
        <p>Here I will talk a little more about myself</p>
      </div>
      <div className="sobremim">
        <div className="imagemPerfil">
          <img className="FotoPerfil" src={FotoPerfil} alt="Foto Pedro" />
        </div>
        <div className="TextPerfil">
          <p>
            Hello my name and Pedro I am a student of the third period of
            software engineering at PUCPR, I am a technology lover and I always
            seek to learn more about new technologies and older technologies.
          </p>
          <p>
            I am Communicative, Creative, Committed, Flexible, I have a good
            ability to solve problems and a good interpersonal relationship. I
            seek to always be a person out of the curve and stand out from the
            rest.
          </p>
        </div>
      </div>
      <div className="frase">
        <div className="fraseArruma">
          <p>“Strive not to be a success, but rather to be of value”</p>
          <p>Albert Einstein</p>
        </div>
      </div>
      <div className="titulos" id="projetos">
        <h1>My projects</h1>
        <p>here i will show a little of what i know</p>
      </div>
      <div className="projetos">
        <div className="projetoList">
          <h1>{Pedro.Projetos[0].Name}</h1>
          <div className="conteudoProjeto">
            <div className="textosProjetos">
              <p>
                <strong>Description</strong> : Experienced matter work Creative,
                where we developed the project for a company of where the System
                must control the entire internal operation made by the company,
                the methodology for development was SCRUM and MVC architecture
                were used.
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
          <h1>{Pedro.Projetos[6].Name}</h1>
          <div className="conteudoProjeto">
            <div className="textosProjetos">
              <p>
                <strong>Description</strong> : This project was developed during the first
                 rocketseat Next Level Week bootcamp, and a platform where the user adds
                 collection points of recyclable material and what materials this point collects.
                 It has integration with the IBGE API and a free map API. besides being developed using the Javascript stack.
              </p>
              <div className="tec">
                <h1>Tecnologias</h1>
                <p>Front-End : {Pedro.Projetos[6].FrontEnd}</p>
                <p>Back-End : {Pedro.Projetos[6].BackEnd}</p>
                <p>Data-Base : {Pedro.Projetos[6].BancoDados}</p>
              </div>
            </div>
            <div className="botaoProjetos">
              <div className="ProjetoBotao">
                <a href={Pedro.Projetos[6].VerProjeto}>Ver Projeto</a>
                <a href={Pedro.Projetos[6].GitHub}>GitHub</a>
              </div>
            </div>
          </div>
        </div>
        <div className="projetoList">
          <h1>{Pedro.Projetos[1].Name}</h1>
          <div className="conteudoProjeto">
            <div className="textosProjetos">
              <p>
                <strong>Description</strong> : And a website where we show some
                Covid-19 information so that people can have that information is
                quick and pleasing to the eye. On the site I used a API to
                capture data about covid in Brazil, Data from Dead and
                contaminated, besides showing the information of each day.
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
                <strong>Description</strong> : A social network where people can
                post what they've learned, the idea came when I saw what it
                would be nice for Recruiters to be able to see what candidates
                they were learning daily, technologies, methodologies. Like this
                knowing exactly what the candidates are learning and whether
                they have already solved for some problem that can happen to the
                develop some project.
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
                <strong>Description</strong> : Online store, The user got it
                only if logged in has the function to recover password, and
                discount coupon, between others, only payment for the product is
                not available. He makes the order and everything and managed by
                the management app of Virtual store.
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
                <strong>Description</strong> : Store Manager, An app Used for
                Virtual store management, where the "Owner" of the Store can add
                Products, categories, view your orders and customers registered.
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
                <strong>Description</strong> : Kirs-Chat, The idea is to make a
                Messaging app like WhatsApp To train some fundamentals, The
                project is already functional and the user can send any type of
                messages,videos of any size, images, change Profile photo,
                delete conversations, and the registration and login is done by
                email.
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
      <div className="contato">
        <div className="titulosContato">
          <h1>Contact</h1>
          <p>Contact me by this Email</p>
        </div>
        <p className="email">pedro.kirstein@outlook.com</p>

        <a target="blank" href={Curriculo}>
          <FaFileAlt color="white" size="30"></FaFileAlt>
        </a>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
