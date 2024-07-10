import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import FooterMadeBy from "../components/FooterMadeBy";
import { useNavigate } from "react-router-dom";
import "../styles/game_app.css";
import { shuffleArray } from "../js/shuffleArray";
import Button from 'react-bootstrap/Button';
import GameMini3 from "../assets/images/GameMini3.png";
//importando el array solo con los animales sin parejas
import imagesLevel from "../js/dataImages";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

export default function Game3() {
  const [playGame, setPlayGame] = useState(false);
  const [resetGame, setResetGame] = useState(false);
  const [textM, setTextM] = useState("Encuentra el par de cartas.");

  let [arrayFill, setArrFill] = useState();

  const [coverImage, setImageCover] = useState("");
  const [disabledButtons, setDisabledButtons] = useState("");
  const [radioValue, setRadioValue] = useState("1");

  let matchAnimal = [];

  let [winner, setWinner] = useState(1);
  let level1=imagesLevel.imagesLevel1
  let level2=imagesLevel.imagesLevel2
  let level3=imagesLevel.imagesLevel3
  //sección para añadir dos imágenes de acuerdo a los niveles

  const user = localStorage.getItem("userName");
  const radios = [
    { name: "Fácil 😋", value: "1" },
    { name: "Medio 🙂", value: "2" },
    { name: "Difícil 😡", value: "3" },
  ];



console.log(imagesLevel);



  useEffect(() => {
    console.log(radioValue);

if (radioValue==1) {
  let arrComplete=level1.concat(level1)
  let newArr= shuffleArray(arrComplete)
  setArrFill(newArr)
}
if (radioValue==2) {
  let arrComplete=level2.concat(level2)
  let newArr= shuffleArray(arrComplete)
  setArrFill(newArr)
}
if (radioValue==3) {
  let arrComplete=level3.concat(level3)
  let newArr= shuffleArray(arrComplete)
  setArrFill(newArr)
}
    setResetGame(false);
  }, [radioValue,resetGame]);

 

  //navegacion depar regresar al menú de juegos
  const navigate = useNavigate();
  const returnBut = () => {
    navigate("/menu");
  };

  const paintImages=()=> {
    console.log("paint",arrayFill);
    if (arrayFill !== undefined) {
      return arrayFill !== "" && arrayFill !== undefined
        ? arrayFill.map((item, index) => (
            <button
              key={index}
              name="butAnimal"
              className={`${coverImage} animalImageButton`}
              disabled={disabledButtons}
              //style={index==clickIndexAnimal?{backgroundImage: `url(${item.rute})`}:{ backgroundImage: `url(${nature})`}}
              style={{ backgroundImage: `url(${item.rute})` }}
              id={index}
              onClick={(e) => {
                console.log(item.name);

                handlerClickAnimal(e, item.name, index);
              }}
            ></button>
          ))
        : "no existe imagen";
    }
  }

  //function para cambiar el estado del texto de la cabecera del tablero
  function textMatch(text) {
    setTextM(text);
  }
  //funcion que permite
  const successMatch = (num) => {
    setWinner(winner + num);
    console.log(winner, "veces ganadas");
    winnerFunction(winner);
  };

  function winnerFunction(winner) {
    winner == 3
      ? textMatch(
          "¡Has encontrado todos los pares! ¡Eres un experto en memoria!"
        )
      : "";
  }

  const play = () => {
    setPlayGame(true);
    setImageCover("image-cover");
    setDisabledButtons(false);
    console.log("play");
  };

  const clickResetGame = () => {
    setResetGame(true);
    setPlayGame(false);
    setDisabledButtons(true);
    setImageCover("");
    textMatch("Encuentra el par de cartas.");
  };
  window.onload = () => {
    setDisabledButtons(true);
  };
  const handlerClickAnimal = (e, name, index) => {
    let idClick = e.target.id;
    document.getElementById(idClick).classList.toggle("image-cover");

    console.log(name, index);
    machtPair(name, idClick);
  };
  let butAnimalArr = document.getElementsByName("butAnimal");
  let arrINdexDisabled = [];

  function machtPair(nameA, idClick) {
    arrINdexDisabled.push(idClick);
    matchAnimal.push(nameA);
    console.log(arrINdexDisabled);
    if (matchAnimal.length == 2) {
      if (
        matchAnimal[0] === matchAnimal[1] &&
        arrINdexDisabled[0] !== arrINdexDisabled[1]
      ) {
        setTimeout(() => {
          butAnimalArr[arrINdexDisabled[0]].style.backgroundImage = "none";
          butAnimalArr[arrINdexDisabled[1]].style.backgroundImage = "none";
          butAnimalArr[arrINdexDisabled[0]].disabled = true;
          butAnimalArr[arrINdexDisabled[1]].disabled = true;
          textMatch("Encuentra el par de cartas.");

          arrINdexDisabled = [];
          successMatch(1);
        }, 1000);
        textMatch("¡Bien hecho! Encontraste un par.");
      } else {
        textMatch("¡Oops! No es un par. Sigue buscando.");
        setTimeout(() => {
          butAnimalArr[arrINdexDisabled[0]].classList.add("image-cover");
          butAnimalArr[arrINdexDisabled[1]].classList.add("image-cover");
          arrINdexDisabled = [];
          matchAnimal = [];
          textMatch("Encuentra el par de cartas.");
        }, 1000);
      }
    }
  }

  const selectLevel = (e) => {
    setRadioValue(e);
    console.log("click level");
  };

  return (
    <>
      <Navbar text={"Desafío de Memoria Animal"}></Navbar>
      <div className="main-container">
        <div className="container-levels">
          <div className="message-container">
         
            <h1 id="message">Elije el nivel</h1>
            <div className="button-container">
              <ButtonGroup>
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={idx % 2 ? "outline-dark" : "outline-dark"}
                    name="radio"
                    size="md"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => {
                      selectLevel(e.currentTarget.value);
                    }}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </div>
          </div>
          <img
            src={GameMini3}
            id="mainImage"
            className="main-image"
            alt="Main Image"
          />
        </div>

        <div className="main-content">
          <div className="message-container">
            <h1 id="message">{textM}</h1>
          </div>

          <div className="button-container">
            <button id="playButton" onClick={play}>
              Play
            </button>
            <button id="restartButton" onClick={clickResetGame}>
              Reiniciar
            </button>
          </div>
          <div className="image-container">
          {paintImages()}
          </div>
          <div className="button-container-2">
            <Button variant="danger" onClick={returnBut}>
              Regresar
            </Button>
            <Button variant="info" size="lg">Tabla de Clasificación</Button>
          </div>
        </div>
      </div>
      <FooterMadeBy></FooterMadeBy>
    </>
  );
}
