import React from 'react'
import "./stylelist.css"
import WatchMe from './WatchMe';
import { nanoid } from 'nanoid';
const MyList = () => {
  const WatchList = JSON.parse(localStorage.getItem("WatchLater"))
  
  if(WatchList===null){
    return <h1 className='w-full text-center text-[#ddd] tracking-[2px] text-lg font-bold p-2 '>No Item added Yet</h1>
  }
  const newWatchList = [];
  WatchList.map((movie)=>{
    if(!newWatchList.includes(movie)){
      newWatchList.push(movie)
    }
  })
  console.log(newWatchList);
  const watchLaterList = newWatchList.map((movie)=>{
    return <WatchMe key={nanoid()} path={movie.path} category={movie.category} picture={movie.picture} movieName={movie.movieName}/>
  })
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
