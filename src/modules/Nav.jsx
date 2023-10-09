import React from "react";
import logo from "../assets/logo.png"
import "./nav.css"

const Nav = ({fes}) => {
  

  const mostrarHome = () => {
    fes[1].current.style.display = "none";
    fes[0].current.style.display = "flex";
  }

  const mostrarCtag= () => {
    fes[0].current.style.display = "none";
    fes[1].current.style.display = "flex";
  }

  return (
    <div className="nav__container">
      <div className="logo spr">
        <img src={logo} alt="" className="logo__img" />
      </div>
      <nav className="nav spr">
        <ul className="nav-ul">
          <li className="nav-ul-li" onClick={mostrarHome}>Home </li>
          <li className="nav-ul-li" onClick={mostrarCtag}>Catálogo </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
