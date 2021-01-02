import React from "react";
import {FiMenu} from 'react-icons/fi'

import Sidebar from "./Sidebar"

import { Container } from './styles';

import "../../styles/sz-navbar.css"

const Topbar: React.FC = () => {
  return (
    <Container className="sz-navbar">
      <div className="sz-navbar-inner sz-navbar-left">
        <input type="checkbox" id="sz-navbar-check" />
        <label htmlFor="sz-navbar-check" className="sz-navbar-hamburger"><FiMenu size={20} color={'#20e080'}/></label>
        <div className="sz-navbar-items">
          <Sidebar/>
        </div>
      </div>
    </Container>
  );
};

export default Topbar;
