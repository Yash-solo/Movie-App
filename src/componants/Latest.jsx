import "./style.css"
import React from 'react'
import HanumanAnsh from "/src/photos/hanuman ansh.jpg"
import SpiderManMovie from "/src/photos/spiderman brand.jpg"
import df from "/src/photos/df.jpg"
import matrabhumiMovie from "/src/photos/matrabhumi.jpg"
import alpha from "/src/photos/alpha.jpg"
import vvaan from "/src/photos/vvan.jpg"
import rrr from "/src/photos/rrr.jpg"
import Kalki from "/src/photos/kalki.jpg"
import game from "/src/photos/Kalki_film_poster.jpg"
import std from "/src/photos/sdf.jpg"
const Latest = () => {
  return (
    <div className="w-full p-3 flex items-center justify-around">
      <div className="relative flex flex-col w-full bg-amber-800 md:px-26 px-3  gap-1 ">
        <ul className="text-white list-disc text-[15px] font-bold md:text-xl"><li>Latest Movies:- </li></ul>
        <div className="w-full [&::-webkit-scrollbar]:hidden overflow-x-auto flex flex-row gap-2 items-center justify-around bg-amber-200 p-1">
            <img className="rounded-2xl w-30 h-50 object-cover shrink-0 " src={HanumanAnsh} alt="" />
            <img className="rounded-2xl w-30 h-50 object-cover shrink-0 " src={SpiderManMovie} alt="" />
            <img className="rounded-2xl w-30 h-50 object-cover shrink-0 " src={df} alt="" />
            <img className="rounded-2xl w-30 h-50 object-cover shrink-0 " src={matrabhumiMovie} alt="" />
            <img className="rounded-2xl w-30 h-50 object-cover shrink-0 " src={alpha} alt="" />
            <img className="rounded-2xl w-30 h-50 object-cover shrink-0 " src={vvaan} alt="" />
            <img className="rounded-2xl w-30  h-50 object-cover shrink-0 " src={rrr} alt="" />
            <img className="rounded-2xl w-30 h-50 object-cover shrink-0 " src={Kalki} alt="" />
            <img className="rounded-2xl w-30 h-50 object-cover shrink-0 " src={game} alt="" />
            <img className="rounded-2xl w-30 h-50 object-cover shrink-0 " src={std} alt="" />
        </div>
        <div className="p-1 absolute top-[50%] md:flex hidden left-25  w-min rounded-2xl bg-white">
            <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </div>
        <div className="p-1 absolute top-[50%] md:flex hidden right-25 w-min rounded-2xl bg-white">
            <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </div>
      </div>
    </div>
  )
}

export default Latest
