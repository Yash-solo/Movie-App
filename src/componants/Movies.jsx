import React from 'react'
import HeroSection from './HeroSection'
import { motion } from 'framer-motion'
const Movie = () => {
  return (
    <motion.div initial={{opacity:0}}animate={{opacity:1}}exit={{opacity:0}}>
      <HeroSection aboutMovie = " Set in a fictional village of Dakshina Kannada, the story centers around a human-versus-nature conflict and a multi-generational land dispute"heroMovie="./photos/heroOf Movie.png" MovieName = "KANTARA"/>
    </motion.div>
  )
}

export default Movie
