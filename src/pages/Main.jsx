import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHeadset} from "@fortawesome/free-solid-svg-icons"
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"
import "./Main.css";
import { useState } from "react";

export function Main() {

  const [User, setUser] = useState(null)

  const login = () => {
    setUser (
      {
        id: 1,
        "name": "Jairo"
      }
    )
  }

  const logout = () => {
    setUser = useState(null)
  }

  const exit = () => {
    
  }

  return (
    <div className="Main">
      <div className="header-login">
        <div className="logo">
          <img src="/logoo.png" alt="header" />
          </div>
        <div className="sac">
            <Link to={"#"} className="Link">
              <FontAwesomeIcon icon={faHeadset} />
            </Link>
            <Link to={"#"} className="Link">
              <FontAwesomeIcon icon={faRightFromBracket} className="bars"/>
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
