import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import FooterMadeBy from "../components/FooterMadeBy";
import MenuMini from "../assets/images/MenuMini.png";

import "../styles/menu_page_styles.css";

export default function MenuGame() {
  const navigate = useNavigate();

  const startBut = () => {
    navigate("/");
  };

  const game1But = () => {
    navigate("/Game1");
  };

  const game3But = () => {
    navigate("/Game3");
  };

  return (
    <>
      <Navbar text={"¡Tu mundo de aprendizaje!"}></Navbar>

      <div className="main-container">
        <img src={MenuMini} className="main-image" alt="Main Image" />
        <div className="main-content">
          <div id="mainMessage">
            <h1>Escoge un juego</h1>
          </div>
          <div className="buttons ">
            <button id="juegoDeSonidosButton" onClick={game1But}>
              Juego 1
            </button>
            <button id="juegoDeColoresButton">Juego 2</button>
            <button id="juegoDeCartasButton" onClick={game3But}>Juego 3</button>
            <button id="juegoDeMatematicasButton">Juego 4</button>
          </div>
          <div>
            <button id="returnButton" onClick={startBut}>
              Regresa
            </button>
          </div>
        </div>
      </div>

      <FooterMadeBy></FooterMadeBy>
    </>
  );
}
