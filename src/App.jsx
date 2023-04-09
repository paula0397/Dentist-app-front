import './App.css'
import {BrowserRouter,Navigate,Route, Routes} from "react-router-dom"
import Navbar from './components/layout/Navbar/Nabvar'
import Dentist from './components/pages/dentist/Dentist'
import Footer from './components/layout/Footer/Footer'
import GlobalContextProvider from './context/GlobalContext'
import Contact from './components/pages/contact/Contact'
import DentistDetailContainer from './components/pages/dentistDetail/DentistDetailContainer'
import DentistFavs from './components/pages/favs/DentistFavs'
import Home from "./components/pages/home/Home";



function App() { 

return (
<BrowserRouter>
<GlobalContextProvider>

<Routes>
  <Route element={<Navbar/>}>
  <Route element={<Footer/>}>
  
  <Route path='/dentists' element={<Dentist />}/>
  <Route path="/" element={<Navigate replace to="/dentists" />}/>
  <Route path='/dentist/:id' element={<DentistDetailContainer/>}/>
  <Route path='/contact' element={<Contact />}/>
  <Route path='/favs' element={<DentistFavs/> }/> 
  </Route>
  </Route>
  <Route path='*' element={<h1>No Found</h1>}/>
</Routes>

</GlobalContextProvider>
</BrowserRouter>
  )
}

export default App;
