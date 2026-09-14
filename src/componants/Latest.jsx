import "./style.css"
import React, { useState } from 'react'
import HanumanAnsh from "/photos/hanuman ansh.jpg"
import SpiderManMovie from "/photos/spiderman brand.jpg"
import df from "/photos/df.jpg"
import matrabhumiMovie from "/photos/matrabhumi.jpg"
import alpha from "/photos/alpha.jpg"
import vvaan from "/photos/vvan.jpg"
import rrr from "/photos/rrr.jpg"
import Kalki from "/photos/kalki.jpg"
import game from "/photos/Kalki_film_poster.jpg"
import std from "/photos/sdf.jpg"
import {useRef} from 'react'

const Latest = () => {
    let ref = useRef(null);
    const scroll = (scrollOffset) => {
        if (ref.current) {
            ref.current.scrollBy({
            left: scrollOffset,
            behavior: 'smooth',
            });
        }   
    };
    const MovieList = [HanumanAnsh,df,SpiderManMovie,"/photos/matrabhumi.jpg",alpha,vvaan,std,rrr,Kalki,game,]
    const Latest_movies = MovieList.map((movie)=>{
        return <img className={`rounded-2xl  w-30 h-50 object-cover shrink-0 `} src={movie} alt="MoviePic" />
    })
    console.log(Latest_movies)

  return (
    <div className="w-full p-3 flex items-center justify-around">
      <div className="relative flex flex-col w-full md:px-26 px-3  gap-1 ">
        <ul className="text-white list-disc text-[15px] font-bold md:text-xl"><li>Latest Movies:- </li></ul>
        <div ref = {ref} className="mask-[linear-gradient(to_right,transparent_0%,white_3%_97%,transparent_100%)] w-full  [&::-webkit-scrollbar]:hidden overflow-x-auto flex flex-row gap-2 items-center justify-around p-1">
            {Latest_movies}
        </div>
        <div onClick={()=>{
            scroll(-100)
        }} className="p-1 absolute top-[50%] md:flex hidden left-25  w-min rounded-2xl bg-white">
            <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </div>
        <button onClick={()=>{
            scroll(100);

        }} className="z-30 p-1 absolute top-[50%] md:flex hidden right-25 w-min rounded-2xl bg-white">
            <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </button>
      </div>
    </div>
  )
}

export default Latest
