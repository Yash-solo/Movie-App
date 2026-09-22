import { img } from 'framer-motion/client';
import React, { useEffect } from 'react'
import { useRef } from 'react'
const Top10 = () => {
    const ref = useRef(null);
    const scroll = (scrollNum)=>{
        if(ref.current){
            ref.current.scrollBy({
                left:scrollNum,
                behavior:"smooth"
            })
        }
    }

    useEffect(()=>{
        async function getTopMovies(){
            const response = await fetch(`${import.meta.env.BASE_URL}/data/TopMovies.json`)
            const data = await response.json();
            const TopMovies = data.map((movie)=>{
                return <img src={movie.picture} alt="Moviepic" />
            })
            console.log(TopMovies);
        }
        getTopMovies();
    },[])



  return (
    <div className='relative w-full flex-col  md:px-25 p-3 flex  '>
        <h1 className='text-lg md:text-2xl lg:text-3xl text-white'>Top 10 Movies on Netflix</h1>
      <div ref={ref} className='relative [&::-webkit-scrollbar]:hidden overflow-x-auto flex mask-[linear-gradient(to_right,transparent_0%,black_10%_90%,transparent_100%)] flex-row items-center gap-10 w-full   p-5'>
        <div className='relative shrink-0'>
            <h1 className='absolute bottom-0 -left-6 text-8xl text-[rgb(17,17,17)] font-bold [-webkit-text-stroke:1px_#ddd]'>1</h1>
            <img className='h-50   rounded-2xl cursor-pointer' src="./photos/hanuman ansh.jpg" alt="" />
        </div>
        <div className='relative shrink-0'>
            <h1 className='absolute bottom-0 -left-6 text-8xl text-[rgb(17,17,17)] font-bold [-webkit-text-stroke:1px_#ddd]'>2</h1>
            <img className='h-50   rounded-2xl cursor-pointer' src="./photos/hanuman ansh.jpg" alt="" />
        </div>
        <div className='relative shrink-0'>
            <h1 className='absolute bottom-0 -left-6 text-8xl text-[rgb(17,17,17)] font-bold [-webkit-text-stroke:1px_#ddd]'>3</h1>
            <img className='h-50   rounded-2xl cursor-pointer' src="./photos/hanuman ansh.jpg" alt="" />
        </div>
        <div className='relative shrink-0'>
            <h1 className='absolute bottom-0 -left-6 text-8xl text-[rgb(17,17,17)] font-bold [-webkit-text-stroke:1px_#ddd]'>4</h1>
            <img className='h-50   rounded-2xl cursor-pointer' src="./photos/hanuman ansh.jpg" alt="" />
        </div>
        <div className='relative shrink-0'>
            <h1 className='absolute bottom-0 -left-6 text-8xl text-[rgb(17,17,17)] font-bold [-webkit-text-stroke:1px_#ddd]'>5</h1>
            <img className='h-50   rounded-2xl cursor-pointer' src="./photos/hanuman ansh.jpg" alt="" />
        </div>
        <div className='relative shrink-0'>
            <h1 className='absolute bottom-0 -left-6 text-8xl text-[rgb(17,17,17)] font-bold [-webkit-text-stroke:1px_#ddd]'>6</h1>
            <img className='h-50   rounded-2xl cursor-pointer' src="./photos/hanuman ansh.jpg" alt="" />
        </div>
        <div className='relative shrink-0'>
            <h1 className='absolute bottom-0 -left-6 text-8xl text-[rgb(17,17,17)] font-bold [-webkit-text-stroke:1px_#ddd]'>7</h1>
            <img className='h-50   rounded-2xl cursor-pointer' src="./photos/hanuman ansh.jpg" alt="" />
        </div>
        <div className='relative shrink-0'>
            <h1 className='absolute bottom-0 -left-6 text-8xl text-[rgb(17,17,17)] font-bold [-webkit-text-stroke:1px_#ddd]'>8</h1>
            <img className='h-50   rounded-2xl cursor-pointer' src="./photos/hanuman ansh.jpg" alt="" />
        </div>
        <div className='relative shrink-0'>
            <h1 className='absolute bottom-0 -left-6 text-8xl text-[rgb(17,17,17)] font-bold [-webkit-text-stroke:1px_#ddd]'>9</h1>
            <img className='h-50   rounded-2xl cursor-pointer' src="./photos/hanuman ansh.jpg" alt="" />
        </div>
        <div className='relative shrink-0'>
            <h1 className='absolute bottom-0 -left-6 text-8xl text-[rgb(17,17,17)] font-bold [-webkit-text-stroke:1px_#ddd]'>10</h1>
            <img className='h-50   rounded-2xl cursor-pointer' src="./photos/hanuman ansh.jpg" alt="" />
        </div>
      </div>
      {/* Left button which will scroll left after clicking */}
            <div  onClick={()=>{
                scroll(-400)
            }} className="p-1 absolute top-[50%] md:flex hidden left-25  w-min rounded-2xl bg-white">
                <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </div>
            {/* Right button to scroll right */}
            <button   onClick={()=>{
                scroll(400);

            }}  className="z-30 p-1 absolute top-[50%] md:flex hidden right-25 w-min rounded-2xl bg-white">
                <svg  xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>
    </div>
  )
}

export default Top10
