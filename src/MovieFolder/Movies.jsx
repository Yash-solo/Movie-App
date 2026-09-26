import About from '../componants/About.jsx'
import HeroSection from '../componants/HeroSection'
import { motion } from 'framer-motion'
import Top10 from "./Top10.jsx"
import ActionxAdv from './ActionxAdv.jsx'
import SouthSec from './SouthSec.jsx'
import { useRef , useEffect ,useState } from 'react'
import ScrollBtn from '../componants/ScrollBtn.jsx'
import Onlynetflix from './Onlynetflix.jsx'

const Movie = () => {
  //select element for scroll
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  //store topMovies cards
  const [topMovies,setTopMovies] = useState([]);
  const [moviesList,setMoviesList] = useState([]);
  const [actionMovie,setactionMovieList] = useState([]);
  const [onlynetData,setOnlynetdata] = useState([]);
  //scroll template
  const scroll = (scrollByNum)=>{
    if(ref.current){
      ref.current.scrollBy({
        left:scrollByNum,
        behavior:"smooth"
      })
    }
    
  }
  const scrollSouth=(scrollByNum)=>{
    if(ref2.current){
      ref2.current.scrollBy({
        left:scrollByNum,
        behavior:"smooth"
      })
    }
  }
  const scrollAdventure=(scrollByNum)=>{
    if(ref3.current){
      ref3.current.scrollBy({
        left:scrollByNum,
        behavior:"smooth"
      })
    }
  }
  //scrollBlockbuster
  const scrollBlockbuster=(scrollByNum)=>{
    if(ref4.current){
      ref4.current.scrollBy({
        left:scrollByNum,
        behavior:"smooth"
      })
    }
  }
  //scroll only netflix section
  const onlyNet = (scrollByNum)=>{
    if(ref7.current){
      ref7.current.scrollBy({
        left:scrollByNum,
        behavior:"smooth"
      })
    }
  }
  //scrollFc
  const scrollFc=(scrollByNum)=>{
    if(ref5.current){
      ref5.current.scrollBy({
        left:scrollByNum,
        behavior:"smooth"
      })
    }
  }
  //scrollHorror
  const scrollHorror = (scrollByNum)=>{
    if(ref6.current){
      ref6.current.scrollBy({
        left:scrollByNum,
        behavior:"smooth"
      })
    }
  }
  //for supernatural horror
  let horror = actionMovie.filter((movie)=>{
      return movie.category.includes("natural Horror");
  })
  //select only 10 movies
  horror = horror.reverse().slice(0,10);
  const SuperHorror = horror.map((movie)=>{
    return <ActionxAdv picture={movie.picture}key={movie.id}path={movie.path}MovieName={movie.MovieName}category={movie.category}id={movie.id}  />
  })

  //for family comedies rendering
  //for blockbuster movies
  const FamilyComedies = actionMovie.filter((movie)=>{
    return movie.familyComedies === true;
  })
  
  const renderFc = FamilyComedies.map((movie)=>{
    return <ActionxAdv picture={movie.picture}key={movie.id}path={movie.path}MovieName={movie.MovieName}category={movie.category}id={movie.id}  />
  })

  //for only on netflix movies rendering 
  useEffect(()=>{
    async function getnetmovie(){
      const response = await fetch(`${import.meta.env.BASE_URL}/data/onlynet.json`)
      const data = await response.json();
      setOnlynetdata(data);
    }
    getnetmovie();
  },[])
  const onlynetmovies = onlynetData.map((movie)=>{
    return <Onlynetflix key={movie.id} picture={movie.picture}/>
  })

  //for blockbuster movies
  const blockbustermovie = actionMovie.filter((movie)=>{
    return movie.status==="Blockbuster"
  })
  
  const renderBuster = blockbustermovie.map((movie)=>{
    return <ActionxAdv picture={movie.picture}key={movie.id}path={movie.path}MovieName={movie.MovieName}category={movie.category}id={movie.id}  />
  })

  //for action and adventure 
  useEffect(()=>{
        //get action advanture movies
        async function getMovie(){
            const response = await fetch(`${import.meta.env.BASE_URL}data/movies.json`);
            const data = await response.json();
            setactionMovieList(data);
        }
        getMovie();
    },[])
    
    //filtering movies from the data 
    let ActionMovieList = actionMovie.filter((movie)=>{
        return movie.category.includes("action") || movie.category.includes("adventure");
    })
    //select only 10 movies
    ActionMovieList = ActionMovieList.reverse().slice(0,10);
    const Actionrender = ActionMovieList.map((movie)=>{
      return <ActionxAdv picture={movie.picture}key={movie.id}path={movie.path}MovieName={movie.MovieName}category={movie.category}id={movie.id}  />
    })

  //top 10 movies
  useEffect(()=>{
    async function getTopMovies(){
        //fetch data from anywhere
        const response = await fetch(`${import.meta.env.BASE_URL}/data/TopMovies.json`)
        const data = await response.json();
        //store the movie template choosen from the Top10 componants
        const TopMoviesNet = data.map((movie)=>{
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
        //save in the state as a local save
        setTopMovies(TopMoviesNet);
    }
    getTopMovies();
  },[])

  //south indian movies
  useEffect(()=>{
        //get action advanture movies
        async function getMovie(){
            const response = await fetch(`${import.meta.env.BASE_URL}/data/movies.json`);
            const data = await response.json();
            setMoviesList(data);
        }
        getMovie();
    },[])
    
    //filtering movies from the data 
    let updateList = moviesList.filter((movie)=>{
        return movie.region ==="South Movie"
    })
    //select only 10 movies
    updateList = updateList.reverse().slice(0,10);
    //choosing only movies that should rander
    const renderUpdate = updateList.map((movie)=>{
      return <SouthSec picture={movie.picture}key={movie.id}path={movie.path}MovieName={movie.MovieName}category={movie.category}id={movie.id} />
    })
    

  return (
    <motion.div initial={{opacity:0}}animate={{opacity:1}}exit={{opacity:0}}>
      <HeroSection aboutMovie = "Set in a fictional village of Dakshina Kannada, the story centers around a human-versus-nature conflict and a multi-generational land dispute"heroMovie="./photos/heroOf Movie.png" path="https://www.youtube.com/watch?v=x6Xemdjqrlw"MovieName = "KANTARA"/>
      
      {/*Top 10 Movies Section*/}
      <div className='w-full p-3 text-center flex flex-col  items-center justify-around'>
        <h1 className='text-3xl lg:tracking-[5px] lg:text-4xl font-serif text-[#ddd]'>See your Favorite Movies For Free From Any where</h1>
      </div>
      <div className='relative w-full flex-col py-5   md:px-25 px-3 flex gap-3 '>
          <h1 className='text-[20px] font-semibold md:text-2xl  lg:text-2xl text-white'>Top 10 Movies on Netflix</h1>
          <div ref={ref} className='flex gap-10 py-4 px-5 [&::-webkit-scrollbar]:hidden  overflow-x-auto'>
            {topMovies}
          </div>
          <ScrollBtn scroll={scroll}/>
      </div>
      
      {/* Adventure Movies section */}
      <div className='relative w-full p-3 md:px-25 flex flex-col items-center justify-around gap-2'>
            <div className=' w-full flex flex-col gap-2'>
                
                {/* Here your movies will render */}
                <h1 className='text-lg md:text-2xl lg:text-4xl text-white'>Action & Adventure Movies</h1>
                <div ref={ref3} className='overflow-x-auto p-2 w-full [&::-webkit-scrollbar]:hidden  flex flex-row gap-7 items-center justify-around'>
                    {Actionrender}
                </div>
              <ScrollBtn scroll={scrollAdventure}/>
            </div>
        </div>

      {/* South movies Section */}
      <div className='relative w-full p-3 md:px-25 flex flex-col items-center justify-around gap-2'>
            <div className=' w-full flex flex-col gap-2'>
                
                {/* Here your movies will render */}
                <h1 className='text-lg md:text-2xl lg:text-4xl text-white'>South Indian Movies</h1>
                <div ref={ref2} className='overflow-x-auto p-2 w-full [&::-webkit-scrollbar]:hidden  flex flex-row gap-7 items-center justify-around'>
                    {renderUpdate}
                </div>
                <ScrollBtn scroll={scrollSouth}/>
            </div>
        </div>

      {/* block buster Movies section */}
      <div className='relative w-full p-3 md:px-25 flex flex-col items-center justify-around gap-2'>
            <div className=' w-full flex flex-col gap-2'>
                
                {/* Here your movies will render */}
                <h1 className='text-lg md:text-2xl lg:text-3xl text-white'>Blockbuster Movies</h1>
                <div ref={ref4} className='overflow-x-auto p-2 w-full [&::-webkit-scrollbar]:hidden  flex flex-row gap-7 items-center justify-around'>
                    {renderBuster}
                </div>
              <ScrollBtn scroll={scrollBlockbuster}/>
            </div>
        </div>

        {/* Only on netflix section */}
        <div className='relative w-full p-3 md:px-25 flex flex-col items-center justify-around gap-2'>
            <div className=' w-full flex flex-col gap-2'>
                
                {/* Here your movies will render */}
                <h1 className='text-lg md:text-2xl lg:text-3xl text-white'>Only on Netflix</h1>
                <div ref={ref7} className='overflow-x-auto p-2 w-full [&::-webkit-scrollbar]:hidden  flex flex-row gap-7 items-center justify-around'>
                    {onlynetmovies}
                </div>
              <ScrollBtn scroll={onlyNet}/>
            </div>
        </div>

        {/* Family Comedies section */}
        <div className='relative w-full p-3 md:px-25 flex flex-col items-center justify-around gap-2'>
            <div className=' w-full flex flex-col gap-2'>
                
                {/* Here your movies will render */}
                <h1 className='text-lg md:text-2xl lg:text-3xl text-white'>Family Comedies</h1>
                <div ref={ref5} className='overflow-x-auto p-2 w-full [&::-webkit-scrollbar]:hidden  flex flex-row gap-7 items-center justify-start'>
                    {renderFc}
                </div>
              <ScrollBtn scroll={scrollFc}/>
            </div>
        </div>
        
         {/* Family Comedies section */}
        <div className='relative w-full p-3 md:px-25 flex flex-col items-center justify-around gap-2'>
            <div className=' w-full flex flex-col gap-2'>
                
                {/* Here your movies will render */}
                <h1 className='text-lg md:text-2xl lg:text-3xl text-white'>Supernatural Horror Movies</h1>
                <div ref={ref6} className='overflow-x-auto p-2 w-full [&::-webkit-scrollbar]:hidden  flex flex-row gap-7 items-center justify-start'>
                    {SuperHorror}
                </div>
              <ScrollBtn scroll={scrollHorror}/>
            </div>
        </div>
      <About/>
    </motion.div>
  )
}

export default Movie
