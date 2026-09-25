import React, { useEffect, useState } from 'react'
import "./stylelist.css"
import WatchMe from './WatchMe';
import { nanoid } from 'nanoid';
const MyList = () => {
  const [moviedata,setMovieData] = useState([]);
  const WatchList = JSON.parse(localStorage.getItem("WatchLater"))||null
  
  //get data of movies
  useEffect(()=>{
    async function getMovies(){
      const response = await fetch(`${import.meta.env.BASE_URL}/data/movies.json`);
      const data = await response.json();
      console.log("console",data);
      
      setMovieData(data);
    }
    getMovies()
  },[])
  
  //check whether the watch list is null?
  if(WatchList===null || WatchList.length===0){
    return <h1 className='w-full text-center text-[#ddd] tracking-[2px] text-lg font-bold p-2 '>No Item added Yet</h1>
  }
  

  //if you don't have movie data
  if(moviedata.length===0){
    return <h1 className='w-full text-center text-[#ddd] tracking-[2px] text-lg font-bold p-2 '>No Movies data Found</h1>
  }
  
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
    <>
    <h1 className='w-full p-3 font-serif text-2xl text-center text-[#ddd]'>Content Saved for Later Watching</h1>
      <div className='w-full p-3  md:px-25 flex items-center justify-around'>
        <div className='w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 bg-[rgba(255,255,255,0.1)] py-3 rounded-3xl border border-[#505050] shadow-[0px_0px_10px_rgba(255,255,255,0.4)] gap-2  p-2'>
          {watchLaterList}
        </div>
      </div>
    </>
  )
}

export default MyList
