import React from 'react'
import Header from "../components/Header"
import { Link } from "react-router-dom";

import "./Registro.css"

export const Registro = () => {
  return (
    <div className='registro'>
      <Header/>
      <div className="Container">
        <h1>Registro</h1>
        <h3>Estas a un paso de poder conectar con diferentes medicos especialistas!!</h3>
        <p>Bienvenido, ingrese sus datos para poder registrarse con nosotros:</p>

        <form>
          <label>
            <span>Ingrese su dni: </span>
          </label>
          <br />
          <input type="text" maxLength={8} required placeholder='XXXXXXXX'/>
          <br />
          <label>
            <span>Ingrese su contraseña:</span>
          </label>
          <br />
          <input type="password" minLength={6} required/>
          <br />
          <label>
            <span>Ingrese su número telefonico:</span>
          </label>
          <br />
          <input type="text" minLength={9} required placeholder='+51' maxLength={9}/>
          <br />
          <div className='ingreso-flex'>
          <Link to={"/main"} className='btn-ingresar'>Registrarme</Link>
          </div>
        </form>


          <div className="login-flex">
            <p>¿Ya tienes cuenta?</p>
              <Link to={"/login-virtual"} className='btn-re'>Iniciar Sesión</Link>
          </div>
          
      </div>
    </div>
  )
}
