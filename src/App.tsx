import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom"
import {Homepage} from "./template/homepage"
import {Programas} from "./template/programas"
import {Turing_template} from "./template/programas/Turing"
import {InscryptionGame} from "./template/programas/InscryptionGame/Inscryption"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Programas/>}/>
        <Route path="/programas" element={<Programas/>}/>
        <Route path="/programas/turing" element={<Turing_template/>}/>
        <Route path="/programas/inscryption" element={<InscryptionGame/>}/>
        <Route path="/contatos" element={<div>Se chegou aqui, então é gay</div>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
