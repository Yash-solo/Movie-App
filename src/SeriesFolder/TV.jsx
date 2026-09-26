import React, { useEffect, useState ,useRef } from 'react'
import { motion } from 'framer-motion'
import HeroSection from '../componants/HeroSection'
import SeriesPh from './SeriesPh'
import "./Tv.css"
import ScrollBtn from '../componants/ScrollBtn'
const TV = () => {
  let ref = useRef(null);

  const [seriesData,setSeriesData] = useState([]);

  const scroll = (num)=>{
    if(ref.current){
      ref.current.scrollBy({
        left:num,
        behavior:"smooth"
      })
    }
  }
  useEffect(()=>{
    async function gettopSeries(){
      const response = await fetch(`${import.meta.env.BASE_URL}/data/TopSeries.json`)
      const data = await response.json();
      setSeriesData(data);
    }
    gettopSeries();
  },[])
  const renderData = seriesData.map((series)=>{
    return <SeriesPh category={series.category}SeriesName={series.SeriesName} key={series.id} picture = {series.picture} id={series.id} />
  })

  return (
    <motion.div initial={{opacity:0}}animate={{opacity:1}}exit={{opacity:0}}>
      <HeroSection path="https://www.youtube.com/watch?v=x6Xemdjqrlw" aboutMovie = 'The plot follows a brilliant, reclusive mastermind known as "The Professor" who recruits a team of eight skilled criminals to execute two incredibly complex, multi-day robberies' heroMovie="./SeriesPhoto/SeriesHero.png" MovieName = "Money Heist"/>
      
      <div className='relative w-full p-3 md:px-25 flex items-center justify-center'>
        <div className=" w-full p-2  flex flex-col items-start justify-start gap-3 ">
          <h1 className='font-bold text-lg text-[#ddd]'>Top 10 Series on Netflix</h1>
          <div ref={ref} className='w-full py-3  [&::-webkit-scrollbar]:hidden flex gap-8 overflow-x-auto'>
            {renderData}
          </div>
          <ScrollBtn scroll ={scroll}/>
        </div>
      </div>
    </motion.div>
  )
}

export default TV
