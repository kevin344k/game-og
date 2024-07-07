import { useNavigate } from "react-router-dom";
import MainImage  from "../assets/images/MainImage.png";

function BodyInit() {
const navigate=useNavigate()

const startBut=()=>{
navigate("/menu")
}



  return (
    <>
    
    <main>
        <div className="main-container">
            <img src={MainImage} className="main-image" alt="Main Image"/>
            <div className="main-content">
                <div id="mainMessage">
                    <h1>¡La forma divertida, efectiva y gratis de aprender!</h1>
                </div>
                <div className="buttons-home">
                    <button id="startButton" onClick={startBut} >EMPIEZA AHORA</button>
                    <button id="loginButton">YA TENGO UNA CUENTA</button>
                </div>
            </div>
        </div>
    </main>

    </>
  )
}

export default BodyInit
