import { useEffect, useState ,useRef } from 'react'
import SearchBar from "./Search.jsx"
import Latest from './Latest.jsx'
import Recommanded from './Recommanded.jsx'
import ContinueWatch from './ContinueWatch.jsx'
import About from '../componants/About.jsx'
import HeroSection from '../componants/HeroSection.jsx'
import { motion } from 'framer-motion'
import { nanoid } from 'nanoid'
import Top10 from '../MovieFolder/Top10.jsx'

const Home = () => {
  //load the page or not?
  const [isLoder,setLoder] = useState(true);
  const ref = useRef(null);
  const [topMovies,setTopMovies] = useState([]);
  //scroll template
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
        //fetch data and show
        setTopMovies(data);
    }
    getTopMovies();
  },[])
  //template from the Top10 movies componant
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
    }} category = {movie.category} path={movie.path} key={movie.id} picture={movie.picture} id={movie.id} MovieName={movie.MovieName}/>
  })

  //load the page
  useEffect(()=>{
    setTimeout(()=>{
      setLoder(false);
    },500);
  },[])
  //Loder template
  const ReloderTemplate = (
    <>
      <div className='h-screen w-full flex items-center justify-around '>
        <div className='rotate h-15 w-15 rounded-[50%] border-5 border-collapse border-t-gray-500 border-gray-300'></div>
      </div>
    </>
  )
  //real Template
  const RealTemplate = (
    <motion.div initial={{opacity:0}} animate={{opacity:1}}exit={{opacity:0}}>
      <HeroSection MovieName="KALKI"aboutMovie="The story follows a modern avatar of Vishnu, inspired by Hindu mythology, who arrives on Earth to protect the world from evil forces" path="https://www.youtube.com/watch?v=ed7DxXQgTKk&t=10216s" ShortNote="== 2898AD ==" heroMovie="./photos/herosection.png"/>
      <h1 className='text-2xl text-white font-bold md:text-4xl font-mono w-full text-center'>Home</h1>
      <SearchBar/>
      <Latest/>
      <Recommanded/>
      <ContinueWatch/>
      {/* Top 10 Movies On Netflix Section */}
      <div key={nanoid()} className='py-3 relative w-full flex-col  md:px-25 px-3 flex gap-3 '>
          <h1 className='text-lg md:text-2xl lg:text-2xl text-white'>Top 10 Movies on Netflix</h1>
          <div ref={ref} className='flex gap-10 px-5 [&::-webkit-scrollbar]:hidden overflow-x-auto'>
            {/* list of movies */}
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
