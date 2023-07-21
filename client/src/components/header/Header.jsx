import React from "react";
import { useState, useEffect } from "react";
import s from "./Header.module.css";
import logo from "../../assets/Rumay.png";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (sectionId) => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={s.container}>
        <NavLink to={"/"}>
                   <img src={logo} className={s.logo} />
           </NavLink>
          
        
        <div className={s.nav}>
          <nav>
          <NavLink to={"/"}>
                   Inicio
           </NavLink>
           <NavLink to={"/tienda"}>
                   Tienda
           </NavLink>
           <NavLink to={"/como-comprar"}>
                   ¿Cómo comprar?
           </NavLink>
           
            <a href='#'>Categorías</a>
            <a href='#'>Contacto</a>
          </nav>
          <div>
            <i className={`bi bi-search ${s.icon}`}></i>
            <i className={`bi bi-person ${s.icon}`}></i>
            <i className={`bi bi-cart3 ${s.icon}`}></i>
          </div>
        </div>
        <div className={s.burger}>
          <i className={`bi bi-list`} onClick={toggleMenu}></i>
        </div>
    </div>
  );
}


export default Header;