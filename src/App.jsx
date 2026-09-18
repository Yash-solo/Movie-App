import './App.css'



import Navbar from './componants/Navbar.jsx'
import Faviorate from './componants/Faviorate.jsx'
import Saved from './componants/Saved.jsx'
import History from './componants/History.jsx'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Home from './componants/Home.jsx'
function App() {

  return (
    <>

      <BrowserRouter basename='/Movie-App/'>
        <Navbar/>
        <Routes>
          <Route path='/'element ={<Home/>}/>
          <Route path='/Fav' element={<Faviorate/>}/>
          <Route path='/Saved' element={<Saved/>}/>
          <Route path='/History' element={<History/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
