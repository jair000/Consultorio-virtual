import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHeadset} from "@fortawesome/free-solid-svg-icons"
import {Link} from "react-router-dom"

import "./Header.css"

function Header() {
  return (
    <div className="header-login">
        <div className="logo">
          <img src="/logoo.png" alt="header" />
          </div>
        <div className="sac">
          <Link to={"#"} className='sac'>
          <FontAwesomeIcon icon={faHeadset} />
          </Link>
        </div>
      </div>
  )
}

export default Header;