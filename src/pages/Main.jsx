import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHeadset} from "@fortawesome/free-solid-svg-icons"
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"
import "./Main.css";

export function Main() {
  return (
    <div className="Main">
      <div className="header-login">
        <div className="logo">
          <img src="/logoo.png" alt="header" />
          </div>
        <div className="sac">
          <Link to={"#"} className='sac'>
          <FontAwesomeIcon icon={faHeadset} />
          <FontAwesomeIcon icon={faBars} className="bars"/>
          </Link>
        </div>
      </div>
      <div className="container-main">
        <h1>¿Por qué elegir Don pepe?</h1>


      </div>
      <div className="medicos">
        
      </div>
    </div>
  );
}
