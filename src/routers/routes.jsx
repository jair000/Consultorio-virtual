import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Principal} from "../pages/Principal";
import { Login } from "../pages/Login";
import { Main } from "../pages/Main";
import { Registro } from "../pages/Registro"

export function MyRoutes() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal/>} />
        <Route path="/login-virtual" element={<Login/>}/>
        <Route path="/main" element={<Main/>}/>
        <Route path="/registrate" element={<Registro/>} />
      </Routes>
    </BrowserRouter>
  )
}
