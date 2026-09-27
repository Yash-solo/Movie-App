import React, { useEffect } from 'react'
import { useState } from 'react';
function Episode(props) {
  const [isopen,setopen] =useState(false);
  const temp2 = (
      <>
        <div className='w-full flex items-center justify-around h-full top-0 backdrop-blur-[10px] left-0 fixed bg-[rgba(18,18,18,0.3)] '>
          <div className='w-9/10 md:w-1/2 rounded-2xl shadow-[0px_0px_10px_rgba(255,255,255,0.4)] border p-3 border-[#525151] bg-[rgba(17,17,17)]'>
            {/* cut btn */}
                <button onClick={() =>setopen(false)} className='cursor-pointer flex py-3 flex-col gap-2 items-end justify-end w-full text-end text-2xl font-mono text-white font-bold '>
                    <span className='h-0.5 -rotate-45 translate-y-2 w-6 bg-[rgba(255,255,255,0.5)]'></span>
                    <span className='h-0.5 w-6 rotate-45 -translate-y-0.5 translate-x-0.2 bg-[rgba(255,255,255,0.5)]'></span>
                </button>
                <h1 className='px-1 text-2xl font-semibold text-[#ddd]'>{props.SeriesName}'s {props.season}</h1>
                <div className='flex border mt-2  border-[#272626] rounded-2xl text-[#ddd] text-2xl items-center justify-around w-full bg-black h-40 md:h-50 '>
                  <h1>Episode:- {props.ep}</h1>
                </div>
                <button onClick={()=>{
                  if(props.path==="xyz"){
                    alert("Episode not found");
                    return 
                  }
                  window.open(props.path)
                }} className='cursor-pointer mt-3 w-full text-lg rounded-lg font-bold p-2 bg-red-500'>&#9655; WatchNow</button>
          </div>
        </div>
      </>
  )
  const temp1 = (
    <div className='flex items-center cursor-pointer justify-start p-1 gap-2'>
        <div onClick={()=>{
          setopen(true);
        }} className='h-15 px-5 md:px-4  md:h-15 rounded-lg border border-[#212121] p-2 flex items-center justify-around  bg-[rgba(255,255,255,0.2)]'>
            <h1>Episode:{props.ep}</h1>
        </div>
    </div>
  )
  return (
    <>
      {isopen?temp2:temp1}
    </>
  )
}

export default Episode
