import About from '../componants/About.jsx'
import HeroSection from '../componants/HeroSection'
import { motion } from 'framer-motion'
import Top10 from "./Top10.jsx"
import ActionxAdv from './ActionxAdv.jsx'
import SouthSec from './SouthSec.jsx'
const Movie = () => {
  return (
    <motion.div initial={{opacity:0}}animate={{opacity:1}}exit={{opacity:0}}>
      <HeroSection aboutMovie = " Set in a fictional village of Dakshina Kannada, the story centers around a human-versus-nature conflict and a multi-generational land dispute"heroMovie="./photos/heroOf Movie.png" path="https://www.youtube.com/watch?v=x6Xemdjqrlw"MovieName = "KANTARA"/>
      <div className='w-full p-3 text-center flex flex-col gap-5 items-center justify-around'>
        <h1 className='text-3xl text-[#ddd]'>See your Favorite Movies For Free From Any where</h1>
      </div>
      <Top10/>
      <ActionxAdv/>
      <SouthSec/>
      <About/>
    </motion.div>
  )
}

export default Movie
