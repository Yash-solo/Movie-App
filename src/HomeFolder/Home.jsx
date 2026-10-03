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
import ScrollBtn from '../componants/ScrollBtn.jsx'
import SeriesPh from '../SeriesFolder/SeriesPh.jsx'
import Series_pic from '../SeriesFolder/Series_pic.jsx'

const Home = () => {
  const [topSeries,setTopSeries] = useState([]);
  const [totaldata,settotalData] = useState([]);
  //load the page or not?
  const [isLoder,setLoder] = useState(true);

  //4 section 
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  //movies filter
  const [topMovies,setTopMovies] = useState([]);
  const [RdMovie,setRdMovie] = useState([]);
  const [watchingList,setWathingList] = useState([]);
  //take categories from the localstorage
  let iscate = useRef(true);

  let category= JSON.parse(localStorage.getItem("categories"));
  //handle category undefined error
  if(category===null){
    console.log("No category");
    iscate = false;
  }
  //scroll template
  const scroll = (scrollByNum)=>{
    if(ref.current){
      ref.current.scrollBy({
        left:scrollByNum,
        behavior:"smooth"
      })
    }
  }
  const scrollLatest = (scrollByNum)=>{
    if(ref2.current){
      ref2.current.scrollBy({
        left:scrollByNum,
        behavior:"smooth"
      })
    }
  }
  const scrollRd = (scrollByNum)=>{
    if(ref3.current){
      ref3.current.scrollBy({
        left:scrollByNum,
        behavior:"smooth"
      })
    }
  } 
  const scrollContinue = (scrollByNum)=>{
    if(ref4.current){
      ref4.current.scrollBy({
        left:scrollByNum,
        behavior:"smooth"
      })
    }
  } 
  const scrollseries = (scrollByNum)=>{
    if(ref5.current){
      ref5.current.scrollBy({
        left:scrollByNum,
        behavior:"smooth"
      })
    }
  }
  //series data
  useEffect(()=>{
    async function addTopSeries(){
      const response = await fetch(`${import.meta.env.BASE_URL}/data/TopSeries.json`);
      const data = await response.json();

      const response2 = await fetch(`${import.meta.env.BASE_URL}/data/movies.json`);
      const data2 = await response2.json();

      settotalData([...data,...data2]);
      setTopSeries(data);
    }
    addTopSeries();
  },[])
  const renderSeries = topSeries.map((series)=>{
    return <SeriesPh content={series.content} category={series.category}SeriesName={series.SeriesName} key={series.id} picture = {series.picture} id={series.id} />
  })

  //continue Watching
  useEffect(()=>{
    const getKey = JSON.parse(localStorage.getItem("watching"));
    if(getKey===null){
      console.log("don't know")
    }else{
      async function getData(){

        //reduce the usablitily
        const watchingId = [];
        
        getKey.map((movieName)=>{
          if(!watchingId.includes(movieName)){
            watchingId.push(movieName);
          }
        })
                    
        //filter data from both data
        const filtered_list = totaldata.filter((item)=>{
          return watchingId.includes(item.MovieName||item.SeriesName);
        })
        //set to render continue wathing list
        setWathingList(filtered_list)
      }
      getData();
    }
  },[totaldata, category])
  
  const renderWatch = watchingList.map((item)=>{
    if(item.MovieName===undefined){
      return <Series_pic content={item.content} category={item.category}SeriesName={item.SeriesName} key={item.id} picture = {item.picture} id={item.id} />
    }
    return <ContinueWatch picture={item.picture}key={item.id}path={item.path}MovieName={item.MovieName}category={item.category}id={item.id}/>
  })


  //Recommand Movies
  useEffect(()=>{
    try{
      async function getdata(){

        const newList = totaldata.filter((movie)=>{
            let cateAgree = 0;
            for(let cate of category){
                if(movie.category.includes(cate)){
                    cateAgree+=1;
                }
                if(cateAgree===2){
                    return true
                }
            }
        })
        setRdMovie(newList);
      }
      getdata();

    }catch(error){
      console.log(error.message);
    }
  },[totaldata ,category])
  
  const renderRdMovie = RdMovie.map((item)=>{
    if(item.MovieName===undefined){
      return <Series_pic content={item.content} category={item.category}SeriesName={item.SeriesName} key={item.id} picture = {item.picture} id={item.id} />
    }
    return <Recommanded picture={item.picture}key={item.id}path={item.path}MovieName={item.MovieName}category={item.category}id={item.id}/>
  })

  //Latest Movies
  //movie list to show latest Movies
  const [LatestMovies,setMovie] = useState([]);
  //render movie when rendering the page
  useEffect(()=>{
      async function getMovie(){
          //fetch movies from json 
          const response = await fetch(`${import.meta.env.BASE_URL}/data/movies.json`);
          const data = await response.json();//convert data as normal list object
              
          //contains latest movies
          let lMovieList = [];
               
          const movieAdded = 22;
          //show only last 10 movies
          for(let i= data.length-1  ;i > data.length-movieAdded+1;i--){
              lMovieList.push(data[i]);
          };
          //set movies for randering
          setMovie(lMovieList);
  
      }
      //call the function imidiatly after rendering 
      getMovie();
  },[])
  const RenderLatest = LatestMovies.map((movie)=>{
    return <Latest picture={movie.picture}key={movie.id}path={movie.path}MovieName={movie.MovieName}category={movie.category}id={movie.id} />
  })

  //top 10 movies
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
        <div className='rotate h-15 w-15 rounded-[50%] border-5 border-dotted border-t-gray-500 border-gray-300'></div>
      </div>
    </>
  )
  //real Template
  const RealTemplate = (
    <motion.div initial={{opacity:0}} animate={{opacity:1}}exit={{opacity:0}}>
      <HeroSection addwatch="Kalki 2898 AD" MovieName="KALKI"aboutMovie="The story follows a modern avatar of Vishnu, inspired by Hindu mythology, who arrives on Earth to protect the world from evil forces" path="https://www.youtube.com/watch?v=ed7DxXQgTKk&t=10216s" ShortNote="== 2898AD ==" heroMovie="./photos/herosection.png"/>
      <h1 className='text-2xl text-white font-bold md:text-4xl font-mono w-full text-center'>Home</h1>
      <SearchBar/>


      
      <div className='relative w-full p-3 md:px-25 flex flex-col items-center justify-around gap-2'>
        <div className=' w-full flex flex-col gap-2'>    
            {/* Here your movies will render */}
            <h1 className='text-lg md:text-2xl lg:text-4xl text-white'>Latest Movies</h1>
            <div ref={ref2} className='overflow-x-auto p-2 w-full [&::-webkit-scrollbar]:hidden  flex flex-row gap-7 items-center justify-around'>
              {RenderLatest}
            </div>
            <ScrollBtn scroll={scrollLatest}/>
        </div>
      </div>

      <div className='relative w-full p-3 md:px-25 flex flex-col items-center justify-around gap-2'>
        <div className=' w-full flex flex-col gap-2'>    
            {/* Here your movies will render */}
            {iscate?<h1 className='text-lg md:text-2xl lg:text-4xl text-white'>Recommand Content for you</h1>:""}
            <div ref={ref3} className='overflow-x-auto p-2 w-full [&::-webkit-scrollbar]:hidden  flex flex-row gap-7 items-start justify-start'>
              {renderRdMovie}
            </div>
            {iscate?<ScrollBtn scroll={scrollRd}/>:""}
        </div>
      </div>

      <div className='relative w-full p-3 md:px-25 flex flex-col items-center justify-around gap-2'>
        <div className=' w-full flex flex-col gap-2'>    
            {/* Here your movies will render */}
            <h1 className='text-lg md:text-2xl lg:text-4xl text-white'>Continue watching</h1>
            <div ref={ref4} className='overflow-x-auto p-2 w-full [&::-webkit-scrollbar]:hidden  flex flex-row gap-7 items-start justify-start'>
              {renderWatch}
            </div>
            <ScrollBtn scroll={scrollContinue}/>
        </div>
      </div>


      {/* Top 10 Movies On Netflix Section */}
      <div key={nanoid()} className='py-3 relative w-full flex-col  md:px-25 px-3 flex gap-3 '>
          <h1 className='text-lg md:text-2xl lg:text-2xl text-white'>Top 10 Movies on Netflix</h1>
          <div ref={ref} className='flex py-5 [&::-webkit-scrollbar]:hidden gap-10 px-5  overflow-x-auto'>
            {/* list of movies */}
            {TopMoviesNet}
          </div>
          <ScrollBtn scroll={scroll}/>
      </div>
     
      {/* Top 10 series On Netflix Section */}
      <div key={nanoid()} className='py-3 relative w-full flex-col  md:px-25 px-3 flex gap-3 '>
          <h1 className='text-lg md:text-2xl lg:text-2xl text-white'>Top 10 Series on Netflix</h1>
          <div ref={ref5} className='flex py-5 [&::-webkit-scrollbar]:hidden gap-10 px-5  overflow-x-auto'>
            {/* list of movies */}
            {renderSeries}
          </div>
          <ScrollBtn scroll={scrollseries}/>
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
