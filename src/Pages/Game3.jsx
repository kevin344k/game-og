import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import FooterMadeBy from "../components/FooterMadeBy";
import { matchPath, useNavigate } from "react-router-dom";
import "../styles/game_app.css";
import { shuffleArray } from "../js/shuffleArray";
import nature from "../assets/images/nature.png";
import GameMini3 from "../assets/images/GameMini3.png";
//importando el array solo con los animales sin parejas
import dataImages from "../js/dataImages";

export default function Game3() {
  const [playGame, setPlayGame] = useState(false);
  const [resetGame, setResetGame] = useState(false);
const [textM, setTextM]=useState("Encuentra el par de cartas.")
  let arrFill = dataImages.concat(dataImages);
  const [arrayFill, setArrFill] = useState();
  let arrWorder = shuffleArray(arrFill);
  const [isPair, setIsPair] = useState(false);
  const [coverImage, setImageCover] = useState("");
let matchAnimal=[]
  useEffect(() => {
    setArrFill(arrWorder);
    setResetGame(false);
  }, [resetGame]);

  //const [restart,setRestart]=useState(false)

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
              className={`${coverImage} animalImageButton`} disabled={false}
              //style={index==clickIndexAnimal?{backgroundImage: `url(${item.rute})`}:{ backgroundImage: `url(${nature})`}}
              style={{ backgroundImage: `url(${item.rute})` }}
              id={index}
              onClick={(e) => {
                console.log(item.name);
               
                handlerClickAnimal(e,item.name,index)
              
               
              }}
            ></button>
          ))
        : "no existe imagen";
    }
  }

//function text match
function textMatch(text) {
 setTimeout(()=>{
  setTextM(text)
 },5000)
 setTextM("Encuentra el par de cartas.")
}

  //reiniciar el juego

  const play = () => {
    setPlayGame(true);
    setImageCover("image-cover");
    console.log("play");
  };


  const clickResetGame = () => {
    setResetGame(true);
    setPlayGame(false);


    setImageCover("");
   
  };


const handlerClickAnimal=(e,name,index)=>{
  let idClick=(e.target.id)
 document.getElementById(idClick).classList.toggle("image-cover")

 console.log(name,index);
 machtPair(name)

}

function machtPair(nameA) {
  matchAnimal.push(nameA)
  console.log(matchAnimal)
  if (matchAnimal.length==2) {
    console.log("si");
    if (matchAnimal[0]===matchAnimal[1]) {
      console.log("son iguales");
      textMatch("¡Bien hecho! Encontraste un par.")
    }else{
      console.log("no lo son ");
      textMatch("¡Oops! No es un par. Sigue buscando.")
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
