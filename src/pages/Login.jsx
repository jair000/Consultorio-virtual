import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeadset} from '@fortawesome/free-solid-svg-icons'

import "./Login.css"
import { Link } from 'react-router-dom';

export function Login() {
  return (
    <div className="Login">

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



      <div className="Container">
        <h1>Ingresa y separa tu cita virtual</h1>
        <p>Bienvenido, ingrese sus datos para poder <br /> reservar su cita:</p>

        <form>
          <input className='inp-dni' type="text" maxLength={8} required/>
          <br />
          <label className='lbl-dni'>
            <span className='txt-dni'>Ingrese su dni </span>
          </label>
          <br />
          <input type="password" minLength={6} required/>
          <br />
          <label className='lbl-pass'>Ingrese su contraseña</label>
          <br />
          <div className='ingreso-flex'>
          <Link to={"#"} className='btn-ingresar'>Ingresar</Link>
          <Link to={"#"} className='btn-recuperarPass'>Recupera Contraseña</Link>
          </div>
        </form>


          <div className="registro-flex">
            <p>¿No tienes cuenta?</p>
            <div className='btn-register'>
              <Link to={"/registro-virtual"} className='btn-re'>Registrate</Link>
              </div>
          </div>
          
      </div>
    </div>
  )
}