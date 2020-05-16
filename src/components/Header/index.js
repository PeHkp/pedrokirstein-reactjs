import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import Logo from "../../img/favi.png";

export default function Header() {
  return (
    <div className="cabecario">
      <div className="left">
        <img src={Logo} alt="" srcset="" />
      </div>
      <div className="headerigth">
        <Link className="headerlinks" to="/">
          Português
        </Link>
        <Link className="headerlinks" to="/ingles">
          English
        </Link>
      </div>
    </div>
  );
}
