import React from 'react';
import { Link } from "react-router-dom";

import { AiOutlineAppstore } from "react-icons/ai";
import { CgProfile, } from 'react-icons/cg'
import { HiOutlineHome } from 'react-icons/hi'
import { IoMdContacts } from 'react-icons/io'
import {MdWork} from "react-icons/md";
import {GiGraduateCap} from 'react-icons/gi'

import ImagePerfil from '../../assets/image/fotoPerfil.png';

import { Profile } from './styles';

const Sidebar: React.FC = () => {
  return (
    <Profile>
      <img src={ImagePerfil} alt="Pedro Kirstein" />
      <h2>Pedro Kirstein</h2>
      <p>Junior Software Engineer</p>
      <Link className='button' to='contato'>Contato</Link>
      <div>

      <Link to='/'>
        <HiOutlineHome size={28} />
        <p>Home</p>
      </Link>
      <Link to='/sobre'>
        <CgProfile size={28} />
        <p>Sobre</p>
      </Link>
      <Link to='/estudos'>
        <GiGraduateCap size={28} />
        <p>Estudos</p>
      </Link>
      <Link to='/experiencia'>
        <MdWork size={28} />
        <p>Experiencia</p>
      </Link>
      <Link to='/projetos'>
        <AiOutlineAppstore size={28} />
        <p>Projetos</p>
      </Link>
      <Link to='/contato'>
        <IoMdContacts size={28} />
        <p>Contato</p>
      </Link>
    </div>
    </Profile>
  );
}

export default Sidebar;