import  { useEffect, useState ,useRef } from 'react'
import { motion } from 'framer-motion'
import HeroSection from '../componants/HeroSection'
import SeriesPh from './SeriesPh'
import About from "../componants/About.jsx"
import "./Tv.css"
import ScrollBtn from '../componants/ScrollBtn'
import Series_pic from './Series_pic'
const TV = () => {
  let ref = useRef(null);
  let ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);

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
  
  const scrollUS = (num)=>{
    if(ref4.current){
      ref4.current.scrollBy({
        left:num,
        behavior:"smooth"
      })
    }
  }

  const scrollHorror = (num)=>{
    if(ref5.current){
      ref5.current.scrollBy({
        left:num,
        behavior:"smooth"
      })
    }
  }
  const scrollAnime = (num)=>{
    if(ref6.current){
      ref6.current.scrollBy({
        left:num,
        behavior:"smooth"
      })
    }
  } 
  const scrollFC = (num)=>{
    if(ref7.current){
      ref7.current.scrollBy({
        left:num,
        behavior:"smooth"
      })
    }
  }
  //get full data
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
  let AdventureSeries = seriesData.filter((series)=>{
    console.log(series.category);
    return series.category.includes("Adventure") || series.category.includes("adventure");
  })
  AdventureSeries = AdventureSeries.reverse().slice(0,20);
  const renderAdv = AdventureSeries.map((series)=>{
    return <Series_pic content={series.content} category={series.category}SeriesName={series.SeriesName} key={series.id} picture = {series.picture} id={series.id} />
  })
  
  //for rendering indian tv shows 
  let indianSeries = seriesData.filter((series)=>{
    return series.region==="IND";
  })
  indianSeries = indianSeries.reverse().slice(0,20);
  const renderIndianSeries = indianSeries.map((series)=>{
    return <Series_pic content={series.content} category={series.category}SeriesName={series.SeriesName} key={series.id} picture = {series.picture} id={series.id} />
  })

  //for rendering US TV shows
  let USSeries = seriesData.filter((series)=>{
    return series.region==="USA";
  })
  USSeries = USSeries.reverse().slice(0,20);
  const renderUSSeries = USSeries.map((series)=>{
    return <Series_pic content={series.content} category={series.category}SeriesName={series.SeriesName} key={series.id} picture = {series.picture} id={series.id} />
  })

  //for horror series
  let HorrorSeries = seriesData.filter((series)=>{
    console.log(series.category);
    return series.category.includes("Horror") || series.category.includes("horror");
  })
  HorrorSeries = HorrorSeries.reverse().slice(0,20)
  const renderHorror = HorrorSeries.map((series)=>{
    return <Series_pic content={series.content} category={series.category}SeriesName={series.SeriesName} key={series.id} picture = {series.picture} id={series.id} />
  })

  //for rendering anime series 
  let AnimeSeries = seriesData.filter((series)=>{
    console.log(series.category);
    return series.category.includes("Anime") || series.category.includes("Animation");
  })
  AnimeSeries = AnimeSeries.reverse().slice(0,20)
  const renderAnime = AnimeSeries.map((series)=>{
    return <Series_pic content={series.content} category={series.category}SeriesName={series.SeriesName} key={series.id} picture = {series.picture} id={series.id} />
  })

  //for rendering Family comedies
  let familySeries = seriesData.filter((series)=>{
    console.log(series.category);
    return series.category.includes("family-comedies") || series.category.includes("FC");
  })
  familySeries = familySeries.reverse().slice(0,20)
  const renderFC = familySeries.map((series)=>{
    return <Series_pic content={series.content} category={series.category}SeriesName={series.SeriesName} key={series.id} picture = {series.picture} id={series.id} />
  })
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <HeroSection isMovie={true} addwatch={"Money Heist"} path="https://www.youtube.com/watch?v=2ZgtaBWhVT0&list=PLG3hCLqLLB39hI2Y6rLsmpcHkSeDY4DZZ&index=1" aboutMovie = 'The plot follows a brilliant, reclusive mastermind known as "The Professor" who recruits a team of eight skilled criminals to execute two incredibly complex, multi-day robberies' heroMovie="./SeriesPhoto/SeriesHero.png" MovieName = "Money Heist"/>
      
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

      {/* Indian TV series */}
      <div className='relative w-full p-3 md:px-25 flex items-center justify-center'>
        <div className=" w-full p-2  flex flex-col items-start justify-start gap-3 ">
          <h1 className='font-bold text-lg text-[#ddd]'>Indian TV Series</h1>
          <div ref={ref3} className='w-full py-3  [&::-webkit-scrollbar]:hidden flex gap-8 overflow-x-auto'>
            {renderIndianSeries }
          </div>
          <ScrollBtn scroll ={scrollIndia}/>
        </div>
      </div>

      {/* US TV series */}
      <div className='relative w-full p-3 md:px-25 flex items-center justify-center'>
        <div className=" w-full p-2  flex flex-col items-start justify-start gap-3 ">
          <h1 className='font-bold text-lg text-[#ddd]'>US TV Series</h1>
          <div ref={ref4} className='w-full py-3  [&::-webkit-scrollbar]:hidden flex gap-8 overflow-x-auto'>
            {renderUSSeries}
          </div>
          <ScrollBtn scroll ={scrollUS}/>
        </div>
      </div>

      {/* Horror Series */}
      <div className='relative w-full p-3 md:px-25 flex items-center justify-center'>
        <div className=" w-full p-2  flex flex-col items-start justify-start gap-3 ">
          <h1 className='font-bold text-lg text-[#ddd]'>Horror Series</h1>
          <div ref={ref5} className='w-full py-3  [&::-webkit-scrollbar]:hidden flex gap-8 overflow-x-auto'>
            {renderHorror}
          </div>
          <ScrollBtn scroll ={scrollHorror}/>
        </div>
      </div>

      {/* Animation Series */}
      <div className='relative w-full p-3 md:px-25 flex items-center justify-center'>
        <div className=" w-full p-2  flex flex-col items-start justify-start gap-3 ">
          <h1 className='font-bold text-lg text-[#ddd]'>Animation</h1>
          <div ref={ref6} className='w-full py-3  [&::-webkit-scrollbar]:hidden flex gap-8 overflow-x-auto'>
            {renderAnime}
          </div>
          <ScrollBtn scroll ={scrollAnime}/>
        </div>
      </div>

      {/* family comedies Series */}
      <div className='relative w-full p-3 md:px-25 flex items-center justify-center'>
        <div className=" w-full p-2  flex flex-col items-start justify-start gap-3 ">
          <h1 className='font-bold text-lg text-[#ddd]'>Family Comedies</h1>
          <div ref={ref7} className='w-full py-3  [&::-webkit-scrollbar]:hidden flex gap-8 overflow-x-auto'>
            {renderFC}
          </div>
          <ScrollBtn scroll ={scrollFC}/>
        </div>
      </div>

      <About/>
    </motion.div>
  )
}

export default TV
