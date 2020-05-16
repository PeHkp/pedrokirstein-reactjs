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
          <p>Developer Web - Mobile - Software Engineer</p>
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
            <li>React.Js - Intermediary</li>
            <li>JavaScript - Intermediary</li>
            <li>HTML - Intermediary</li>
            <li>CSS - Intermediary</li>
          </ul>
        </div>
        <div className="backendSkils boxSkils">
          <ul>
            <FaRegFileCode size="50" color="#303030"></FaRegFileCode>
            <h1>Back-End</h1>
            <li>Node.Js - Intermediary</li>
            <li>Dart - Basic</li>
            <li>Python - Basic</li>
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
            <li>MySQL - Basic</li>
            <li>SQLite - Basic</li>
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
      <div className="titulos">
        <h1>My projects</h1>
        <p>here i will show a little of what i know</p>
      </div>
      
      <Footer></Footer>
    </div>
  );
}

export default Home;
