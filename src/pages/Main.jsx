import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeadset} from '@fortawesome/free-solid-svg-icons'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "./Main.css";

export function Main() {
  return (
    <div className="Main">
      <div className="header-registro">
        <div className="logo">
          <img src="/logoo.png" alt="header" />
        </div>
        <div className="sac-contain">
          <Link to={"#"} className="sac">
            <FontAwesomeIcon icon={faHeadset} />
          </Link>
          <Link to={"#"} className='sac'><FontAwesomeIcon icon={faBars} /></Link>
        </div>
      </div>
      <h1>Hola mundo</h1>
    </div>
  );
}
