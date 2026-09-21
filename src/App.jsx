import './App.css'


import HeroSection from './componants/HeroSection.jsx'
import TV from './componants/TV.jsx'
import Movies from './componants/Movies.jsx'
import History from './componants/History.jsx'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Home from './componants/Home.jsx'
import Navbar from './componants/Navbar.jsx'
function App() {

  return (
    <>

      <BrowserRouter basename='/Movie-App/'>
        <Navbar/>
        <Routes>
          <Route path='/'element ={<Home/>}/>
          <Route path='/Fav' element={<TV/>}/>
          <Route path='/Saved' element={<Movies/>}/>
          <Route path='/History' element={<History/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
