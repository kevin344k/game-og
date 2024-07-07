import LogoMini4  from "../assets/images/LogoMini4.png";
import flag_english  from "../assets/images/flag_english.png";
import flag_french  from "../assets/images/flag_french.png";
import flag_italian  from "../assets/images/flag_italian.png";
import flag_portuguese  from "../assets/images/flag_portuguese.png";

function FooterIdioms() {


  return (
    <>
    
    <footer>
        <div className="footer-content">
            <ul className="horizontal-languages">
                <li><img src={flag_english} alt="English Flag"/>INGLÉS</li>
                <li><img src={flag_french} alt="French Flag"/>FRANCÉS</li>
                <li><img src={flag_italian} alt="Italian Flag"/>ITALIANO</li>
                <li><img src={flag_portuguese} alt="Portuguese Flag"/>PORTUGUÉS</li>
            </ul>
        </div>
        
    </footer>

    </>
  )
}

export default FooterIdioms
