import React from 'react'
import { useRef } from 'react'
const ActionxAdv = () => {
    const ref = useRef(null);
    const scroll =(scrollByNum)=>{
        if(ref.current){
            ref.current.scrollBy({
                left:scrollByNum,
                behavior:"smooth"
            })
        }
    }
  return (
    <>
        <div className='relative w-full p-3 md:px-25 flex flex-col items-center justify-around gap-2'>
            <div className=' w-full flex flex-col gap-2'>
                <h1 className='text-lg md:text-2xl lg:text-4xl text-white'>Action & Adventure Movies</h1>
                <div ref={ref} className='overflow-x-auto p-2 w-full [&::-webkit-scrollbar]:hidden mask-[linear-gradient(to_right,transparent_0%,black_10%_90%,transparent_100%)] flex flex-row gap-7 items-center justify-around'>
                    <img className="h-50 rounded-2xl shrink-0"src="./photos/hanuman ansh.jpg" alt="" />
                    <img className="h-50 rounded-2xl shrink-0"src="./photos/hanuman ansh.jpg" alt="" />
                    <img className="h-50 rounded-2xl shrink-0"src="./photos/hanuman ansh.jpg" alt="" />
                    <img className="h-50 rounded-2xl shrink-0"src="./photos/hanuman ansh.jpg" alt="" />
                    <img className="h-50 rounded-2xl shrink-0"src="./photos/hanuman ansh.jpg" alt="" />
                    <img className="h-50 rounded-2xl shrink-0"src="./photos/hanuman ansh.jpg" alt="" />
                    <img className="h-50 rounded-2xl shrink-0"src="./photos/hanuman ansh.jpg" alt="" />
                    <img className="h-50 rounded-2xl shrink-0"src="./photos/hanuman ansh.jpg" alt="" />
                    <img className="h-50 rounded-2xl shrink-0"src="./photos/hanuman ansh.jpg" alt="" />
                    <img className="h-50 rounded-2xl shrink-0"src="./photos/hanuman ansh.jpg" alt="" />
                    <img className="h-50 rounded-2xl shrink-0"src="./photos/hanuman ansh.jpg" alt="" />
                </div>
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
        </div>
    </>
  )
}

export default ActionxAdv
