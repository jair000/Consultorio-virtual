import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {Link} from "react-router-dom";

import '../App.css'

export function Principal() {
  return (
    <div className="App">
      <div className="Container1">
      <div className='registro-logo'>
        <div className='header'><img src="/logoo.png" alt="header" /></div>
      </div>
      <div className="reserva-container">
      <div className="reserva"><img src="/reserva.png" alt="reserva" /></div>
        <Link to={"https://wa.me/932206837"} className="btn-fixedwsp">Vía Whatsapp <FontAwesomeIcon icon={faWhatsapp} /> </Link>
        <Link to={"/login-virtual"} className="btn-fixedweb">Vía Online <FontAwesomeIcon icon={faMagnifyingGlass} /></Link>
      </div>
      </div>  
    </div>
    )
}

