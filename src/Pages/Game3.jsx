import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import FooterMadeBy from "../components/FooterMadeBy";
import { useNavigate } from "react-router-dom";
import "../styles/game_app.css";
import { shuffleArray } from "../js/shuffleArray";
import nature from "../assets/images/nature.png";
import GameMini3 from "../assets/images/GameMini3.png";
//importando el array solo con los animales sin parejas
import dataImages from "../js/dataImages";

export default function Game3() {
  const [playGame, setPlayGame] = useState(false);
  const [resetGame, setResetGame] = useState(false);
  const [textM, setTextM] = useState("");
  let arrFill = dataImages.concat(dataImages);
  const [arrayFill, setArrFill] = useState();
  let arrWorder = shuffleArray(arrFill);
  const [isPair, setIsPair] = useState(false);
  const [coverImage, setImageCover] = useState("");
  const [disabledButtons, setDisabledButtons] = useState("");
  let matchAnimal = [];
  let  [winner,setWinner]=useState(1)
  useEffect(() => {
    setArrFill(arrWorder);
    setResetGame(false);
  }, [resetGame]);



  //navegacion depar ir al menu de juegos
  const navigate = useNavigate();
  const returnBut = () => {
    navigate("/menu");
  };

  function paintImages(arrayFill, playGame) {
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

  //function text match
  function textMatch(text) {
    setTextM(text);
  
  }

const successMatch=(num)=>{
 
  setWinner(winner+num)
  console.log(winner,"veces ganadas");
  winnerFunction(winner)
}

function winnerFunction(winner) {
  winner==3?textMatch("¡Has encontrado todos los pares! ¡Eres un experto en memoria!"): "";
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
  };
  window.onload = () => {
    setDisabledButtons(true);
   textMatch("Encuentra el par de cartas.")
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

    if (matchAnimal.length == 2) {
      if (matchAnimal[0] === matchAnimal[1]) {
       
        successMatch(1)
        setTimeout(() => {
          butAnimalArr[arrINdexDisabled[0]].style.backgroundImage = "none";
          butAnimalArr[arrINdexDisabled[1]].style.backgroundImage = "none";
          butAnimalArr[arrINdexDisabled[0]].disabled = true;
          butAnimalArr[arrINdexDisabled[1]].disabled = true;
          textMatch("Encuentra el par de cartas.")
       
          arrINdexDisabled = [];
        
        }, 1000);
        textMatch("¡Bien hecho! Encontraste un par.")
       
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

  return (
    <>
      <Navbar text={"Desafío de Memoria Animal"}></Navbar>
      <div className="main-container">
        <img
          src={GameMini3}
          id="mainImage"
          className="main-image"
          alt="Main Image"
        />
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
            {paintImages(arrayFill, playGame)}
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
