import { useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import { Routes , Route } from 'react-router-dom';
import TV from "../SeriesFolder/TV.jsx"
import Movies from '../MovieFolder/Movies.jsx'
import Home from '../HomeFolder/Home.jsx'
import MyList from '../MyList/MyList.jsx';
const AnimateComp = () => {
    const location = useLocation();
  return (
    <>
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/'element ={<Home/>}/>
          <Route path='/TV' element={<TV/>}/>
          <Route path='/Saved' element={<Movies/>}/>
          <Route path='/MyList' element={<MyList/>}/>
        </Routes>
    </AnimatePresence>
    </>
  )
}

export default AnimateComp
