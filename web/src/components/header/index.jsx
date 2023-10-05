import React from "react";
import './styles.css';
import logo from '../../assets/logobrancaa.png';

export default function Header() {
  return (
    <div className="containerHeader">
      <img className="logoImg" src={logo} alt="Logo da viaLagoa" />
      <div className="nav">
        <a href="#">Inicio</a>
        <a href="#">Sobre nós</a>
        <a href="#">História</a>
        <a href="#">Menu</a>
        <a href="#">Reservas</a>
        <a href="#">Contate-nos</a>
      </div>
    </div>
  );
}
