import {Link} from "react-router-dom"
import Header from "../components/Header"
import "./Login.css"

export function Login() {
  return(
    <div className="login">
      
      <Header/>

      <div className="Container">
        <h1>Ingresa y separa tu cita virtual</h1>
        <p>Bienvenido, ingrese sus datos para poder <br /> reservar su cita:</p>

        <form>
          <label className='lbl-dni'>
            <span className='txt-dni'>Ingrese su dni: </span>
          </label>
          <br />
          <input type="text" maxLength={8} required className='inp-dni' placeholder='XXXXXXXX'/>
          <br />
          <label className='lbl-pass'>
            <span className='txt-pass'>Ingrese su contraseña:</span>
          </label>
          <br />
          <input type="password" minLength={6} required className='inp-pass'/>
          <br />
          <div className='ingreso-flex'>
          <Link to={"/main"} className='btn-ingresar'>Ingresar</Link>
          </div>
        </form>


          <div className="login-flex">
            <p>¿No tienes cuenta?</p>
            <div className='btn-register'>
              <Link to={"/registrate"} className='btn-re'>Registrate</Link>
              </div>
          </div>
          
      </div>
    </div>
  )
}