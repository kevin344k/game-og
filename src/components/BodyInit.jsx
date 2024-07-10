
import MainImage from "../assets/images/MainImage.png";
import { useState } from "react";
import ModalLogin from "./ModalLogin";
function BodyInit() {

  const [show, setShow] = useState(false);


  const handleClose = ()=>{setShow(false)};


  return (
    <>
      <main>
        <div className="main-container-login">
          <img src={MainImage} className="main-image" alt="Main Image" />
          <div className="main-content">
            <div id="mainMessage">
              <h1>¡La forma divertida, efectiva y gratis de aprender!</h1>
            </div>
            <div className="buttons-home">
              <button id="startButton" onClick={() =>setShow(true)}>
                EMPIEZA AHORA
              </button>
              <button id="loginButton">YA TENGO UNA CUENTA</button>
            </div>
          </div>
        </div>
      </main>
      <ModalLogin show={show} handleClose={handleClose} ></ModalLogin>
   
    </>
  );
}

export default BodyInit;
