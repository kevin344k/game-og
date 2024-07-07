import React from "react";
import Navbar from "../components/Navbar";
import FooterMadeBy from "../components/FooterMadeBy";
import { useNavigate } from "react-router-dom";
import "../styles/game_app.css";
import Cat from "../assets/images/cat.png";
import GameMini from "../assets/images/GameMini.png";

export default function Game1() {
  const navigate = useNavigate();

  const returnBut = () => {
    navigate("/menu");
  };

  return (
    <>
      <Navbar text={"Juego de Sonidos y Animales"}></Navbar>
      <div className="main-container">
        <img
          src={GameMini}
          id="mainImage"
          className="main-image"
          alt="Main Image"
        />
        <div className="main-content">
          <div className="message-container">
            <h1 id="message">¿A quien pertenece el sonido?</h1>
          </div>
          <div className="button-container">
            <button id="playButton">Play</button>
            <button id="restartButton">Reiniciar</button>
          </div>
          <div className="image-container">
            <button
              className="image-button"
              id="animalImageButton"
              style={{backgroundImage:`url(${Cat})`}}
            ></button>
            <button
              className="image-button"
              id="animalImageButton"
              style={{backgroundImage:`url(${Cat})`}}
            ></button>
            <button
              className="image-button"
              id="animalImageButton"
              style={{backgroundImage:`url(${Cat})`}}
            ></button>
            <button
              className="image-button"
              id="animalImageButton"
              style={{backgroundImage:`url(${Cat})`}}
            ></button>
            <button
              className="image-button"
              id="animalImageButton"
              style={{backgroundImage:`url(${Cat})`}}
            ></button>
            <button
              className="image-button"
              id="animalImageButton"
              style={{backgroundImage:`url(${Cat})`}}
            ></button>
          </div>
          <div className="button-container-2">
            <button id="returnButton" onClick={returnBut}>
              Regresa
            </button>
          </div>
        </div>
      </div>
      <FooterMadeBy></FooterMadeBy>
    </>
  );
}
