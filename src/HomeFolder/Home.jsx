import { useEffect, useState } from 'react'
import SearchBar from "./Search.jsx"
import Latest from './Latest.jsx'
import Recommanded from './Recommanded.jsx'
import ContinueWatch from './ContinueWatch.jsx'
import About from '../componants/About.jsx'
import HeroSection from '../componants/HeroSection.jsx'
import { motion } from 'framer-motion'
import Top10 from '../MovieFolder/Top10.jsx'
const Home = () => {
  const [isLoder,setLoder] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoder(false);
    },300);
  },[])
  const ReloderTemplate = (
    <>
      <div className='h-screen w-full flex items-center justify-around '>
        <div className='rotate h-15 w-15 rounded-[50%] border-5 border-collapse border-t-gray-500 border-gray-300'></div>
      </div>
    </>
  )
  const RealTemplate = (
    <motion.div initial={{opacity:0}} animate={{opacity:1}}exit={{opacity:0}}>
      <HeroSection MovieName="KALKI"aboutMovie="The story follows a modern avatar of Vishnu, inspired by Hindu mythology, who arrives on Earth to protect the world from evil forces"  ShortNote="== 2898AD ==" heroMovie="./photos/herosection.png"/>
      <h1 className='text-2xl text-white font-bold md:text-4xl font-mono w-full text-center'>Home</h1>
      <SearchBar/>
      <Latest/>
      <Recommanded/>
      <ContinueWatch/>
      <Top10/>
      <About/>
    </motion.div>
  )
  return (
    <>
      {isLoder?ReloderTemplate:RealTemplate}
    </>
  )
}

export default Home
