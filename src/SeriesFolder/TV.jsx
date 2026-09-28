import React, { useEffect, useState ,useRef } from 'react'
import { motion } from 'framer-motion'
import HeroSection from '../componants/HeroSection'
import SeriesPh from './SeriesPh'
import "./Tv.css"
import ScrollBtn from '../componants/ScrollBtn'
import Series_pic from './Series_pic'
const TV = () => {
  let ref = useRef(null);
  let ref2 = useRef(null);
  const ref3 = useRef(null);

  const [seriesData,setSeriesData] = useState([]);

  const [topseriesData,setTopSeries] = useState([]);
  
  const scroll = (num)=>{
    if(ref.current){
      ref.current.scrollBy({
        left:num,
        behavior:"smooth"
      })
    }
  }

  const scrolladvanture = (num)=>{
    if(ref2.current){
      ref2.current.scrollBy({
        left:num,
        behavior:"smooth"
      })
    }
  }

  const scrollIndia = (num)=>{
    if(ref3.current){
      ref3.current.scrollBy({
        left:num,
        behavior:"smooth"
      })
    }
  }
  useEffect(()=>{
    async function gettopSeries(){
      const response = await fetch(`${import.meta.env.BASE_URL}/data/SeriesData.json`)
      const data = await response.json();

      const topresponse = await fetch(`${import.meta.env.BASE_URL}/data/TopSeries.json`);
      const topdata = await topresponse.json();

      setSeriesData(data);
      setTopSeries(topdata);
    }
    gettopSeries();
  },[])
  //for rendering top 10 series
  const renderData = topseriesData.map((series)=>{
    return <SeriesPh content={series.content} category={series.category}SeriesName={series.SeriesName} key={series.id} picture = {series.picture} id={series.id} />
  })

  //for rendering adventure series
  const AdventureSeries = seriesData.filter((series)=>{
    console.log(series.category);
    return series.category.includes("Adventure") || series.category.includes("adventure");
  })
  const renderAdv = AdventureSeries.map((series)=>{
    return <Series_pic content={series.content} category={series.category}SeriesName={series.SeriesName} key={series.id} picture = {series.picture} id={series.id} />
  })
  
  //for rendering indian tv shows 
  const indianSeries = seriesData.filter((series)=>{
    return series.region==="IND";
  })

  const renderIndianSeries = indianSeries.map((series)=>{
    return <Series_pic content={series.content} category={series.category}SeriesName={series.SeriesName} key={series.id} picture = {series.picture} id={series.id} />
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

      {/* Action and advanture */}
      <div className='relative w-full p-3 md:px-25 flex items-center justify-center'>
        <div className=" w-full p-2  flex flex-col items-start justify-start gap-3 ">
          <h1 className='font-bold text-lg text-[#ddd]'>Adventure Series</h1>
          <div ref={ref2} className='w-full py-3  [&::-webkit-scrollbar]:hidden flex gap-8 overflow-x-auto'>
            {renderAdv}
          </div>
          <ScrollBtn scroll ={scrolladvanture}/>
        </div>
      </div>

      <div className='relative w-full p-3 md:px-25 flex items-center justify-center'>
        <div className=" w-full p-2  flex flex-col items-start justify-start gap-3 ">
          <h1 className='font-bold text-lg text-[#ddd]'>Indian Tv Series</h1>
          <div ref={ref3} className='w-full py-3  [&::-webkit-scrollbar]:hidden flex gap-8 overflow-x-auto'>
            {renderIndianSeries }
          </div>
          <ScrollBtn scroll ={scrollIndia}/>
        </div>
      </div>
    </motion.div>
  )
}

export default TV
