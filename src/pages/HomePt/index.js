import React from "react";
import {
  FaLaptopCode,
  FaRegFileCode,
  FaDraftingCompass,
  FaGithub,
  FaYoutube,
  FaLinkedin,
  FaFileAlt
} from "react-icons/fa";
import "./style.css";

// importando json de informacoes
import Pedro from "../../assets/Projetos.json";
import Curriculo from "../../assets/PedroKirsteinPortugues.pdf"

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
          <div className="icones">
            <a target="blank" href="https://github.com/PeHkp"><FaGithub className="icon" color="white" size="30"></FaGithub></a>
            <a target="blank" href="https://www.linkedin.com/in/pedro-kirstein/"><FaLinkedin className="icon" color="white" size="30"></FaLinkedin></a>
            <a target="blank" href="https://www.youtube.com/channel/UCcnNKa-3hwmdtZkRP5Iwn-Q?view_as=subscriber"><FaYoutube className="icon" color="white" size="30"></FaYoutube></a>
          </div>
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
            <li>React.Js - Avançado</li>
            <li>Angular.Js - Intermediário</li>
            <li>JavaScript - Intermediário</li>
            <li>HTML - Intermediário</li>
            <li>CSS - Intermediário</li>
          </ul>
        </div>
        <div className="backendSkils boxSkils">
          <ul>
            <FaRegFileCode size="50" color="#303030"></FaRegFileCode>
            <h1>Back-End</h1>
            <li>Node.Js - Avançado</li>
            <li>Dart - básico</li>
            <li>Python - Intermediário</li>
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
            <li>MySQL - Intermediário</li>
            <li>SQLite - Intermediário</li>
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
      <div className="titulos" id="projetos">
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
                <strong>Descrição</strong> : E um site aonde mostramos algumas
                informações do Covid-19 de forma que as pessoas consigam ter
                essa informação rápida e agradável aos olhos. No site usei uma
                API para capturar os dados sobre o covid no Brasil, Dados de
                Mortos e contaminados, alem de mostra as informação de cada dia.
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
                <strong>Descrição</strong> : Uma rede Social aonde as pessoa
                podem postar o que aprenderam, a idéia surgiu quando vi a que
                seria legal que os Recrutadores pudessem ver o que os candidatos
                estavam aprendendo diariamente, tecnologias, metodologias. Assim
                sabendo exatamente o que os candidatos estão aprendendo e se
                eles já resolveu por algum problema que pode vir a acontecer ao
                desenvolver algum projeto.
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
                <strong>Descrição</strong> : Loja virtual, O usuário consegui
                fazer login, cadastro e colocar as coisas no carrinho apenas se
                logado tem a função recuperar senha, e cupom de desconto, entre
                outras, apenas não esta disponível pagamento do produto porem
                ele faz a encomenda e tudo e gerenciado pelo app de gerencia da
                loja virtual.
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
                <strong>Descrição</strong> : Gerente de loja, Um app Usado para
                o gerenciamento de loja Virtual, aonde o "Dono" da Loja pode
                adicionar Produtos, categorias, ver seus pedidos e clientes
                cadastrados.
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
                <strong>Descrição</strong> : Kirs-Chat, A idéia e de fazer um
                App de mensagem como o WhatsApp Para treinar alguns fundamentos,
                O projeto já esta funcional E o usuário pode, mandar qualquer
                tipo de mensagens, vídeos de qualquer tamanho, imagens, mudar
                foto de Perfil, excluir conversas, e o cadastro e login e feito
                por email.
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
          <h1>Contato</h1>
          <p>Entre em Contato comigo por esse Email</p>
        </div>
        <p className="email">pedro.kirstein@outlook.com</p>
        <a target="blank" href={Curriculo}><FaFileAlt color="white" size="30"></FaFileAlt></a>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
