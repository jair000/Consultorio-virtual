import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Principal} from "../pages/Principal";
import { Registro } from "../pages/Registro";
import { Main } from "../pages/Main";

export function MyRoutes() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal/>} />
        <Route path="/registro-virtual" element={<Registro/>}/>
        <Route path="/main" element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  )
}
