import React from 'react'
import About from '../componants/About.jsx'
import HeroSection from '../componants/HeroSection'
import { motion, useReducedMotion, useScroll } from 'framer-motion'
import Top10 from "./Top10.jsx"
import ActionxAdv from './ActionxAdv.jsx'
import SouthSec from './SouthSec.jsx'
import { nanoid } from 'nanoid'
import { useRef , useEffect ,useState } from 'react'
const Movie = () => {
  const ref = useRef(null);
  const [topMovies,setTopMovies] = useState([]);
  const scroll = (scrollByNum)=>{
    if(ref.current){
      ref.current.scrollBy({
        left:scrollByNum,
        behavior:"smooth"
      })
    }
  }
  useEffect(()=>{
    async function getTopMovies(){
        //fetch data from anywhere
        const response = await fetch(`${import.meta.env.BASE_URL}/data/TopMovies.json`)
        const data = await response.json();
        setTopMovies(data);
    }
    getTopMovies();
  },[])

  const TopMoviesNet = topMovies.map((movie)=>{
    return <Top10 onClick={()=>{
      const getKey = JSON.parse(localStorage.getItem("watching"));
      localStorage.setItem("categories",JSON.stringify(movie.category));
      //open link where you can see your movie in 0 payment
      if(movie.path!=="xyz"){
          if(getKey!==null){
              localStorage.setItem("watching",JSON.stringify([...getKey,movie.MovieName]));
          }else{
              localStorage.setItem("watching",JSON.stringify([movie.MovieName]));
          }
          window.open(movie.path,"_blank")
          
      }else{
          alert("Movie not found");
      }      
    }} key={movie.id} picture={movie.picture} id={movie.id} MovieName={movie.MovieName}/>
  })

  return (
    <motion.div initial={{opacity:0}}animate={{opacity:1}}exit={{opacity:0}}>
      <HeroSection aboutMovie = "Set in a fictional village of Dakshina Kannada, the story centers around a human-versus-nature conflict and a multi-generational land dispute"heroMovie="./photos/heroOf Movie.png" path="https://www.youtube.com/watch?v=x6Xemdjqrlw"MovieName = "KANTARA"/>
      <div className='w-full p-3 text-center flex flex-col gap-5 items-center justify-around'>
        <h1 className='text-3xl text-[#ddd]'>See your Favorite Movies For Free From Any where</h1>
      </div>
      <div key={nanoid()} className='relative w-full flex-col  md:px-25 px-3 flex gap-3 '>
          <h1 className='text-lg md:text-2xl lg:text-3xl text-white'>Top 10 Movies on Netflix</h1>
          <div ref={ref} className='flex gap-10 px-5 [&::-webkit-scrollbar]:hidden overflow-x-auto'>
            {TopMoviesNet}
          </div>
          {/* Left button which will scroll left after clicking */}
          <button  onClick={()=>{
            scroll(-550)
          }} className="p-1 absolute top-[50%] md:flex hidden left-25  w-min rounded-2xl bg-white">
              <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
          </button>
          {/* Right button to scroll right */}
          <button   onClick={()=>{
              scroll(550);
      
          }}  className="z-30 p-1 absolute top-[50%] md:flex hidden right-25 w-min rounded-2xl bg-white">
              <svg  xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
          </button>
      </div>
      <ActionxAdv/>
      <SouthSec/>
      <About/>
    </motion.div>
  )
}

export default Movie
