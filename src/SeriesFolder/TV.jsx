import { motion } from 'framer-motion'
import React from 'react'
import HeroSection from '../componants/HeroSection'
const TV = () => {
  return (
    <motion.div initial={{opacity:0}}animate={{opacity:1}}exit={{opacity:0}}>
       <HeroSection aboutMovie = 'The plot follows a brilliant, reclusive mastermind known as "The Professor" who recruits a team of eight skilled criminals to execute two incredibly complex, multi-day robberies' heroMovie="./SeriesPhoto/SeriesHero.png" path="https://www.youtube.com/watch?v=x6Xemdjqrlw"MovieName = "Money Heist"/>
    </motion.div>
  )
}

export default TV
