import './App.css'
import SearchBar from "./componants/Search.jsx"
import Latest from './componants/Latest.jsx'
import Recommanded from './componants/Recommanded.jsx'
import ContinueWatch from './componants/ContinueWatch.jsx'


import Navbar from './componants/Navbar.jsx'
import Faviorate from './componants/Faviorate.jsx'
import Saved from './componants/Saved.jsx'
import History from './componants/History.jsx'
import { BrowserRouter, Routes , Route } from 'react-router-dom'

function Home(){
  return (
    <>
      <div className='w-full p-2 bg-red'></div>
    </>
  )
}
function App() {

  return (
    <>

      <BrowserRouter>

        <Navbar/>
        <SearchBar/>
        <Latest/>
        <Recommanded/>
        <ContinueWatch/>

        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path='/Fav' element={<Faviorate/>}/>
          <Route path='/Saved' element={<Saved/>}/>
          <Route path='/History' element={<History/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
