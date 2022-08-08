import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom"
import {Homepage} from "./template/homepage"
import {Programas} from "./template/programas"
import {Turing_template} from "./template/programas/Turing"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/programas" element={<Programas/>}/>
        <Route path="/programas/turing" element={<Turing_template/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
