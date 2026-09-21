import { useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import { Routes , Route } from 'react-router-dom';
import TV from '../componants/TV.jsx'
import Movies from '../componants/Movies.jsx'
import History from '../componants/History.jsx'
import Home from '../componants/Home.jsx'
const AnimateComp = () => {
    const location = useLocation();
  return (
    <>
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/'element ={<Home/>}/>
          <Route path='/Fav' element={<TV/>}/>
          <Route path='/Saved' element={<Movies/>}/>
          <Route path='/History' element={<History/>}/>
        </Routes>
    </AnimatePresence>
    </>
  )
}

export default AnimateComp
