import './App.css'
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Navbar from './components/layout/Navbar/Nabvar'
import Dentist from './components/pages/dentist/Dentist'
import Footer from './components/layout/Footer/Footer'
import GlobalContextProvider from './context/GlobalContext'


function App() { 

return (
<BrowserRouter>
<GlobalContextProvider>
<Routes>
  <Route element={<Navbar/>}>
  <Route element={<Footer/>}>
  <Route path='/' element={<h1>Home</h1>} />
  
  <Route path='/dentists' element={<Dentist/>}/>
  <Route path='/dentist/:id' element={<h1>Profesionales</h1>}/>
  <Route path='/contact' element={<h1>form contact</h1>}/>
  <Route path='/favs' element={<h1> Favoritos</h1>}/>
  </Route>
  </Route>
  <Route path='*' element={<h1>No Found</h1>}/>
</Routes>
</GlobalContextProvider>
</BrowserRouter>
  )
}

export default App