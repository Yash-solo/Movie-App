import './App.css'

import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Navbar from './componants/Navbar.jsx'
import AnimateComp from './componants/AnimateComp.jsx'
function App() {

  return (
    <>
      <BrowserRouter basename='/Movie-App/'>
        <Navbar/>
        <AnimateComp/>
      </BrowserRouter>
    </>
  )
}

export default App
