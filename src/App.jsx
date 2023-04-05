import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dentist from "./components/pages/Dentist"
import Contact from "./components/pages/Contact"
import Favs from "./components/pages/Favs"
import Home from "./components/pages/Home"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/dentist" element={ <Dentist /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/favs" element={ <Favs /> } />
      </Routes>
      </BrowserRouter>
      
        
    </div>
  )
}

export default App
