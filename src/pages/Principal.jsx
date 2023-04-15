import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {Link} from "react-router-dom";

import '../App.css'

export function Principal() {
  return (
    <div className="App">
      <div className='registro'>
        <div className='header'><img src="/logoo.png" alt="header" /></div>
        <div className="reserva"><img src="/reserva.png" alt="reserva" /></div>
        <a href='#' className="btn-fixedwsp">Vía Whatsapp <FontAwesomeIcon icon={faWhatsapp} /> </a>
        <Link to={"/registro-virtual"} className="btn-fixedweb">Vía Online <FontAwesomeIcon icon={faMagnifyingGlass} /></Link>
      </div>
      <div className="cargos">
        <h3>Contamos con un grupo de expertos profesionales de la salud a tu disposición!</h3>
      </div>
    </div>
    )
}

