import './App.css'



import Navbar from './componants/Navbar.jsx'
import TV from './componants/TV.jsx'
import Movies from './componants/Movies.jsx'
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
          <Route path='/Fav' element={<TV/>}/>
          <Route path='/Saved' element={<Movies/>}/>
          <Route path='/History' element={<History/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
