import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHeadset} from "@fortawesome/free-solid-svg-icons"
import {Link} from "react-router-dom"
import "./Registro.css"

export function Registro() {
  return(
    <div className="Registro">
      <div className="header-registro">
        <div className="logo">
          <img src="/logoo.png" alt="header" />
          </div>
        <div className="sac">
          <Link to={"#"} className='sac'>
          <FontAwesomeIcon icon={faHeadset} />
          </Link>
        </div>
      </div>
      <div className="container-registro">
        <h1>ajskdjakjsdk</h1>
      </div>
    </div>
  )
}