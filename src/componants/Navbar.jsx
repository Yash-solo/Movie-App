
import "./style.css";
import { useState } from 'react';
const Navbar = () => {
    const [isOpen,setOpen] = useState(false)
  return (
    <div className='w-full p-3 flex items-center justify-around'>
      <div className='h-full flex items-center justify-around w-full border border-[rgba(255,255,255,0.3)] rounded-2xl p-2'>
        <div className='logo flex z-30 items-center justify-around gap-2'>
            <img className="h-7" src="src/photos/video-camera (1).png" alt="" />
            <h1 className='font-bold text-xl text-white'>Daily.Movies</h1>
        </div>
        <div className='md:flex text-gray-50 font-bold hidden flex-row items-center justify-around gap-7'>
            <a href="#">Faviorate</a>
            <a href="#">Saved</a>
            <a href="#">History</a>
            <a href="#">About</a>
        </div>
        {/* Mobilte menuBar */}
        <div onClick={()=>{
            setOpen(!isOpen);
            console.log(isOpen)
            }} className='flex md:hidden z-30 flex-col items-center justify-around gap-1 p-2 rounded-[10px] bg-[rgba(255,255,255,0.3)] '>
            <span className={`h-0.5 w-5 border transform transition-all duration-100 border-white ${isOpen?"rotate-45 translate-y-1.5":""}`}></span>
            <span className={`h-0.5 w-5 border border-white ${isOpen?"opacity-0":""} `}></span>
            <span className={`h-0.5 transform tranistion-all duration-100 w-5 border ${isOpen?"-rotate-45  -translate-y-1.5":""} border-white `}></span>
        </div>

        <div className={`sideBar md:hidden p-2 text-amber-50 gap-2  flex-col ${isOpen?"flex":"hidden"} items-center justify-end w-full fixed z-3 h-1/2 right-0 top-0 bg-[rgba(255,255,255,0.3)] backdrop-blur-[2px]`}>
            <a className="hover:bg-[rgba(255,255,255,0.2)] p-2 w-full rounded-[5px] text-center" href="#">Faviorate</a>
            <a className="hover:bg-[rgba(255,255,255,0.2)] p-2 w-full rounded-[5px] text-center" href="#">Saved</a>
            <a className="hover:bg-[rgba(255,255,255,0.2)] p-2 w-full rounded-[5px] text-center" href="#">History</a>
            <a className="hover:bg-[rgba(255,255,255,0.2)] p-2 w-full rounded-[5px] text-center" href="#">About</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
