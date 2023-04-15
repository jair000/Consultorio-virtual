import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeadset} from '@fortawesome/free-solid-svg-icons'

import "./Registro.css"
import { Link } from 'react-router-dom';

export function Registro() {
  return (
    <div className="Register">
      <div className="header-registro">
        <div className="logo">
          <img src="/logoo.png" alt="header" /></div>
        <div className="sac">
          <Link to={"#"} className='sac'>
          <FontAwesomeIcon icon={faHeadset} />
          </Link>
        </div>
      </div>
      <div className="Container">
        <h1>Ingresa y separa tu cita virtual</h1>
        <p>Bienvenido, ingrese sus datos para poder <br /> reservar su cita:</p>

        <form action="">
          <label htmlFor="">Ingrese su dni <br /></label>
          <input type="text" maxLength={8}/> <br />
          <label htmlFor="">Ingrese su contraseña  <br /></label>
          <input type="password" minLength={6}/> <br />
          <div className='ingreso-flex'>
          <button className='btn-ingresar'>Ingresar</button>
          <Link to={"#"}>Recupera Contraseña</Link>
          </div>
        </form>
          <div className="registro-flex">
            <p>¿No tienes cuenta?</p>
            <div className='btn-register'><Link to={"#"} className='btn-re'>Registrate</Link></div>
          </div>
          
      </div>
    </div>
  )
}