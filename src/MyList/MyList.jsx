import React, { useEffect, useState } from 'react'
import "./stylelist.css"
import WatchMe from './WatchMe';
import { motion } from 'framer-motion';
import { nanoid } from 'nanoid';
import WatchSiri from './WatchSiri';
const MyList = () => {
  const [moviedata,setMovieData] = useState([]);
  const [seriesdata,setSeriesData] = useState([]);
  const WatchList = JSON.parse(localStorage.getItem("WatchLater"))||[]
  const WatchseriesList = JSON.parse(localStorage.getItem("WatchSeriesLater"))||[];
  console.log(WatchseriesList);
  //get data of movies
  useEffect(()=>{
    async function getMovies(){
      //get movies data
      const response = await fetch(`${import.meta.env.BASE_URL}/data/movies.json`);
      const data = await response.json();
      
      //get series data 
      const response2 = await fetch(`${import.meta.env.BASE_URL}/data/SeriesData.json`);
      const data2 = await response2.json();

      setMovieData(data);
      setSeriesData(data2);
    }
    getMovies()
  },[])
  
  //check whether the watch list is null?
  if((WatchList.length===0 && WatchseriesList.length===0)){
    return <h1 className='w-full text-center text-[#ddd] tracking-[2px] text-lg font-bold p-2 '>No Item added Yet</h1>
  }
  

  //if you don't have movie data
  if(moviedata.length===0){
    return <h1 className='w-full text-center text-[#ddd] tracking-[2px] text-lg font-bold p-2 '>No Movies data Found</h1>
  }
  //filter those series from the seriesdata which added in the watchseriesList
  const seriesList = WatchseriesList.map((seriesname)=>{
    return seriesdata.filter((series)=>series.SeriesName===seriesname)
  })
  const watchLaterseriesList = seriesList
  .filter((arr)=>arr.length>0)
  .map((series)=>{
    return <WatchSiri  picture={series[0].picture} SeriesName={series[0].SeriesName}category={series[0].category}content={series[0].content}key={nanoid()}/>
  })

  //filter those movies from the data which added in the watchlist
  const newWatchList = WatchList.map((movieName)=>{
    return moviedata.filter((movie)=>movie.MovieName === movieName)
  })

  //if arr.length >0 than print their cards
  const watchLaterList = newWatchList
  .filter((arr)=>arr.length>0)
  .map((movie)=>{
    return <WatchMe key={nanoid()} path={movie[0].path} category={movie[0].category} picture={movie[0].picture} movieName={movie[0].MovieName}/>
  })

  //render everthing
  return (
    <motion.div initial={{opacity:0}}animate={{opacity:1}}exit={{opacity:0}}>
    <h1 className='w-full p-3 font-serif text-2xl text-center text-[#ddd]'>Content Saved for Later Watching</h1>
      <div className='w-full p-3  md:px-25 flex items-center justify-around'>
        <div className='w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 bg-[rgba(255,255,255,0.1)] py-3 rounded-3xl border border-[#505050] shadow-[0px_0px_10px_rgba(255,255,255,0.4)] gap-2  p-2'>
          {watchLaterList}
        </div>
      </div>
      <h1 className='w-full text-[#ddd] text-center text-2xl font-bold'>Series</h1>
      <div className='w-full p-3  md:px-25 flex items-center justify-around'>
        <div className='w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 bg-[rgba(255,255,255,0.1)] py-3 rounded-3xl border border-[#505050] shadow-[0px_0px_10px_rgba(255,255,255,0.4)] gap-2  p-2'>
          {watchLaterseriesList}
        </div>
      </div>
    </motion.div>
  )
}

export default MyList
