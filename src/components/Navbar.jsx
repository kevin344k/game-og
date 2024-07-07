import LogoMini4  from "../assets/images/LogoMini4.png";




function Navbar({text}) {


  return (
    <>
    
    <header>
        <div className="header-content">
            <img src={LogoMini4} className="logo-image" alt="Logo"/>
            <h2>{text}</h2>
        </div>
    </header>

    </>
  )
}

export default Navbar
