import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Principal} from "../pages/Principal";
import { Registro } from "../pages/Registro";

export function MyRoutes() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal/>} />
        <Route path="/registro-virtual" element={<Registro/>}/>
      </Routes>
    </BrowserRouter>
  )
}